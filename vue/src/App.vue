<script setup lang="ts">
import { useStore } from "vuex";
import { key } from "./store";

const store = useStore(key);
</script>

<template>
  <router-view></router-view>
</template>

<style>

</style>
