import type { Schema, Attribute } from '@strapi/strapi';

export interface RecipesEtapes extends Schema.Component {
  collectionName: 'components_recipes_etapes';
  info: {
    displayName: 'Etapes';
    description: '';
  };
  attributes: {
    title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'recipes.etapes': RecipesEtapes;
    }
  }
}
