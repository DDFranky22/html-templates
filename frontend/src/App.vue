<script setup lang="ts">
    import ManuComponent from './components/MenuComponent.vue';
    import EditorComponent from './components/EditorComponent.vue';
    import DisplayComponent from './components/DisplayComponent.vue'; 
</script>

<template>
    <ManuComponent/>
    <div class="grid grid-cols-2">
        <EditorComponent/>
        <DisplayComponent/>
    </div>
</template>

<style scoped>
</style>
