<template>
    <div v-html="htmlOutput" :class="{ 'bg-black':darkMode, 'text-white': darkMode }"></div>
</template>

<script setup lang="ts">
    import { storeToRefs } from "pinia";
    import { useContentStore } from '../stores/content';

    const contentStore = useContentStore();
    const { htmlOutput, darkMode } = storeToRefs(contentStore);
</script>
