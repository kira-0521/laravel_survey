import { defineStore } from "pinia";
import { tempSurveys } from "../types/tmpSurveys";

export const useSurveyStore = defineStore("survey", {
    state: () => ({
        surveys: [] as tempSurveys,
    }),
    actions: {},
});
