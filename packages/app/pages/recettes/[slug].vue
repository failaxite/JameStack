<template>
  <div class="container">
    <template v-if="pending">Chargement de la recette...</template>
    <template v-else-if="recipe">
      <!-- Utilisation de la classe product-image pour styliser l'image -->
      <div class="grid-container">
        <div class="image-column">
          <a class="return-link" href="/">Retour</a>
          <img :src="recipe.data.image.url" :alt="recipe.data.title">
        </div>

        <div class="content-column">
          <h1>{{ recipe.data.title }}</h1>

          <!-- Description Container -->
          <div class="desc-container container-style">
            <h2>Description :</h2>
            <ol>
              <p>{{ recipe.data.description }}</p>
            </ol>
          </div>

          <!-- Infos Container -->
          <div class="infos-container container-style">
            <h2>Infos :</h2>
            <ul>
              <li>Slug : {{ recipe.data.slug }}</li>
              <li>Image : <a :href="recipe.data.image.url" target="_blank">Afficher l'image</a></li>
              <li>Titre : {{ recipe.data.title }}</li>
              <li v-for="tag in recipe.data.tags" :key="tag.id"> Tag : {{ tag.name }}</li>
              <li>Créé le: {{ recipe.data.createdAt }}</li>
              <li>Dernière mise à jour: {{ recipe.data.updatedAt }}</li>
            </ul>
          </div>

          <!-- Recette Container -->
          <div class="recette-container container-style">
            <h2>Recettes :</h2>
            <ol>
              <li v-for="step in recipe.data.steps" :key="step.id">{{ step.title }}</li>
            </ol>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
const { findOne } = useStrapi4();
const route = useRoute();

const { data: recipe, pending } = useAsyncData(
    'recipe',
    () => findOne(`recipes/${route.params.slug}`)
)

</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
}

.image-column {
  grid-column: 1;
  position: relative;
}

.image-column img {
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.return-link {
  display: inline-block;
  width: 217px;
  height: 86px;
  background: #FEBD69 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  border-radius: 20px;
  font: normal normal bold 28px/32px Arial;
  text-decoration: none;
  color: #000000;
  line-height: 86px; /* Centering the text vertically */
  text-align: center;
  margin-bottom: 30px;
}

.return-link:hover {
  text-decoration: underline;
}

h1, h2 {
  color: #333;
}

.container-style {
  width: auto;
  height: auto;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 6px 6px 6px #00000029;
  border: 1px solid #000000;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 20px;
  margin-right: 20px;
}

.container-style li{
  list-style-type: none;
}

p {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 10px;
  color: #555;
}

ul, ol {
  padding: 0;
  margin: 0;
}

li {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 5px;
  color: #555;
}

a {
  color: #007BFF;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.recipe-steps {
  margin-top: 20px;
}

.recipe-steps li {
  font-size: 16px;
  line-height: 1.5;
  color: #555;
  margin-bottom: 10px;
}
</style>
