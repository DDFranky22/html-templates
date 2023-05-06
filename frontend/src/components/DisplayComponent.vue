<template>
    <div v-html="htmlOutput"></div>
</template>

<script setup lang="ts">
    import { storeToRefs } from "pinia";
    import { useContentStore } from '../stores/content';

    const contentStore = useContentStore();
    const { htmlOutput } = storeToRefs(contentStore);
</script>
