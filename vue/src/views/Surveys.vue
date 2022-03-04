<script lang="ts" setup>
import PageComponent from "../components/PageComponent.vue";
</script>

<template>
  <PageComponent title="Surveys">
    <template v-slot:header>
      <h1 class="text-3xl font-bold text-gray-900">Surveys</h1>
      <!-- <router-link
        :to="{ name: 'SurveyCreate' }"
        class="
          py-2
          px-3
          text-white
          bg-emerald-500
          rounded-md
          hover:bg-emerald-600
        "
      >
        Add new Survey
      </router-link> -->
    </template>
  </PageComponent>
</template>
