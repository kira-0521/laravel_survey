<script lang="ts" setup>
import { computed } from "vue";
import PageComponent from "../components/PageComponent.vue";
import { useSurveyStore } from "../store/survey";
import { Survey } from "../types/tmpSurveys";
const surveyStore = useSurveyStore();

const surveys = computed(() => surveyStore.surveys);
const deleteSurvey = (survey: Survey) => {
  if (confirm("この質問を本当に削除していいですか？戻せなくなります。")) {
    // delete survey
  }
};
</script>

<template>
  <PageComponent>
    <template v-slot:header>
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold text-gray-900">Surveys</h1>
        <router-link
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
          Add new Survey
        </router-link>
      </div>
    </template>

    <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md: grid-cols-3">
      <div
        v-for="survey in surveys"
        :key="survey.id"
        class="
          flex flex-col
          py-4
          px-6
          shadow-md
          bg-white
          hover:bg-gray-50
          h-[470px]
        "
      >
        <img
          :src="survey.image"
          :alt="survey.title"
          class="w-full h-48 object-cover"
        />
        <h4 class="mt-4 text-lg font-bold">{{ survey.title }}</h4>
        <div v-html="survey.description" class="overflow-hidden flex-1"></div>

        <div class="flex justify-between items-center mt-3">
          <router-link
            :to="{ name: 'SurveyView', params: { id: survey.id } }"
            class="
              flex
              py-2
              px-4
              border border-transparent
              text-sm
              rounded-md
              text-white
              bg-indigo-600
              hover:bg-indigo-700
              focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
            "
          >
            Edit
          </router-link>
          <button
            type="submit"
            v-if="survey.id"
            @click="deleteSurvey(survey)"
            class="
              h-8
              w-8
              flex
              items-center
              justify-center
              rounded-full
              border border-transparent
              text-sm text-red-500
              focus:ring-2 focus:ring-offset-2 focus:ring-red-500
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </PageComponent>
</template>
