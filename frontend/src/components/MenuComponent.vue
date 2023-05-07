<template>
    <nav class="flex flex-row">
        <a class="flex-auto" @click="newFile">New file</a> 
        <a class="flex-auto">Load file</a> 
        <a class="flex-auto">Load template</a> 
        <a class="flex-auto" @click="save">Save</a> 
        <a class="flex-auto" @click="saveAsTemplate">Save as Template</a> 
        <a class="flex-auto">Download HTML</a> 
        <a class="flex-auto">Delete</a> 
    </nav>
</template>
<script setup lang="ts">
    import { ref, onMounted } from "vue";
    import { storeToRefs } from "pinia";
    import { useContentStore } from '../stores/content';

    const contentStore = useContentStore();
    const { isTemplate } = storeToRefs(contentStore);

    const emit = defineEmits(["newFile", "saveFile"]);

    const saveAsTemplate = function() {
        isTemplate.value = true;
        emit("saveFile");
    }
    
    const save = function() {
        emit("saveFile");
    }

    const newFile = function() {
        emit("newFile");
    }

</script>
