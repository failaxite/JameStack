<script setup lang="ts">
import { useRoute } from 'vue-router';

export interface IItem {
  id: number;
  Name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  slug: string;
  recipe: {  // Mettez à jour le nom du champ ici
    id: number;
    title: string;
  };
}

export interface IRecipe {
  items: IItem[];
}

export interface ItemsData {
  data: IRecipe[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

const { findOne } = useStrapi4();
const route = useRoute();

const { data: recipe, pending } = useAsyncData(
  'recipe',
  async () => {
    try {
      const recipeData = await findOne(`recipes/${route.params.slug}`);
      
      if (!recipeData || !recipeData.data) {
        throw new Error('La recette n\'a pas été trouvée.');
      }

      const itemsData = await findOne('items', { 'recipe.title_eq': recipeData.data.title });  // Mettez à jour le nom du champ ici
      
      if (!itemsData || !itemsData.data) {
        throw new Error('Aucun article trouvé pour cette recette.');
      }

      return {
        ...recipeData,
        data: {
          ...recipeData.data,
          items: itemsData.data,
        },
      };
    } catch (error) {
      console.error('Une erreur s\'est produite:', error);
      throw error;
    }
  }
);
</script>

<template>
  <div class="container">
    <template v-if="pending">Chargement de la recette...</template>
    <template v-if="recipe">
      <h1>{{ recipe.data.title }}</h1>
      <img :src="recipe.data.image.url" :alt="recipe.data.title">
      <p>{{ recipe.data.description }}</p>

      <!-- Afficher les articles liés -->
      <h2>Articles liés à la recette</h2>
      <ul>
        <li v-for="item in recipe.data.items" :key="item.id">
          <h3>{{ item.Name }}</h3>
          <p>Créé le : {{ item.createdAt }}</p>
          <p>Mis à jour le : {{ item.updatedAt }}</p>
          <p>Publié le : {{ item.publishedAt }}</p>
          <p>Slug : {{ item.slug }}</p>
        </li>
      </ul>
    </template>
  </div>
</template>
