<template>
    <nav class="flex flex-row">
        <a class="flex-auto" @click="newFile">New file</a> 
        <a class="flex-auto" @click="newFromTemplate">New from template</a> 
        <a class="flex-auto" @click="loadFiles">Load file</a> 
        <a class="flex-auto" @click="loadTemplates">Load template</a> 
        <a class="flex-auto" @click="save">Save</a> 
        <a class="flex-auto" @click="saveAsTemplate">Save as Template</a> 
        <a class="flex-auto" @click="downloadFile">Download HTML</a> 
        <a class="flex-auto">Delete</a> 
    </nav>
</template>
<script setup lang="ts">
    import { storeToRefs } from "pinia";
    import { useContentStore } from '../stores/content';

    const contentStore = useContentStore();
    const { isTemplate } = storeToRefs(contentStore);

    const emit = defineEmits(["newFile", "newFromTemplate", "saveFile", "loadFiles", "loadTemplates"]);

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

    const loadTemplates = function() {
        emit("loadTemplates");
    }

    const loadFiles = function() {
        emit("loadFiles");
    }

    const newFromTemplate = function() {
        emit("newFromTemplate");
    }
    
    const downloadFile = function () {
        contentStore.download();
    }

</script>
