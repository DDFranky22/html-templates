<template>
    <dialog class="z-10" id="filename" :open="openFileNameDialog">
        <p>You must insert a valid name</p>
        <form>
            <input v-model="name" type="text" name="fileName" id="fileName">
            <button type="button" @click="updateFileNameAndSave">Save</button>
            <button type="button" @click="closeFileNameDialog">Close</button>
        </form>
    </dialog>
    <dialog class="z-10" id="filename" :open="openTemplateFileNameDialog">
        <p>You must insert a valid name</p>
        <form>
            <input v-model="name" type="text" name="fileName" id="fileName">
            <button type="button" @click="updateTempalteNameAndSave">Save</button>
            <button type="button" @click="closeTemplateDialog">Close</button>
        </form>
    </dialog>
    <MenuComponent @saveFile="saveFile" @newFile="newFile"/>
    <div class="grid grid-cols-2">
        <EditorComponent @saveFile="saveFile"/>
        <DisplayComponent/>
    </div>
</template>

<script setup lang="ts">
    import MenuComponent from './components/MenuComponent.vue';
    import EditorComponent from './components/EditorComponent.vue';
    import DisplayComponent from './components/DisplayComponent.vue'; 

    import { ref, onMounted } from "vue";
    import { storeToRefs } from "pinia";
    import { useContentStore } from './stores/content';

    const contentStore = useContentStore();
    const { name, isTemplate } = storeToRefs(contentStore);

    const openFileNameDialog = ref(false);
    const openTemplateFileNameDialog = ref(false);

    const saveFile = function() {
        if (isTemplate.value) {
            saveAsTemplate();
        } else {
            updateFileNameAndSave();
        }
    }

    const saveAsTemplate = function() {
        if (contentStore.isNameValid) {
            contentStore.saveTemplate();
        } else {
            openTemplateFileNameDialog.value = true;
        }
    };

    const closeTemplateDialog = function() {
        openTemplateFileNameDialog.value = false;
    };

    const closeFileNameDialog = function() {
        openFileNameDialog.value = false;
    };

    const updateFileNameAndSave = function() {
        if (contentStore.isNameValid) {
            contentStore.compile().then(() => {
                openFileNameDialog.value = false;
            });
        } else {
            openFileNameDialog.value = true;
        }
    };

    const updateTempalteNameAndSave = function() {
        if (contentStore.isNameValid) {
            contentStore.saveTemplate().then( () => {
                openTemplateFileNameDialog.value = false;
            });
        }
    };

    const newFile = function() {
        contentStore.newFile();
    };
</script>

<style scoped>
</style>
