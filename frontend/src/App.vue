<template>
    <DialogComponent
    :id="'templates'"
    :openValue="openTemplateListDialog"
    >
        <p>Available templates</p>
        <select>
            <option :value="singleTemplate" v-for="singleTemplate in templateList">
                {{ singleTemplate }}
            </option>
        </select>
        <button type="button" @click="">Select Template</button>
    </DialogComponent>

    <DialogComponent
    :id="'filename'"
    :openValue="openFileNameDialog"
    >
    <p>You must insert a valid name</p>
    <form>
        <input v-model="name" type="text" name="fileName" id="fileName">
        <button type="button" @click="updateFileNameAndSave">Save</button>
    </form>
    </DialogComponent>
    <DialogComponent
    :id="'template'"
    :openValue="openTemplateFileNameDialog"
    >
    <p>You must insert a valid name</p>
    <form>
        <input v-model="name" type="text" name="fileName" id="fileName">
        <button type="button" @click="updateTempalteNameAndSave">Save</button>
    </form>

    </DialogComponent>
    <MenuComponent @saveFile="saveFile" @newFile="newFile" @loadTemplates="loadTemplates" />
    <div class="grid grid-cols-2">
        <EditorComponent @saveFile="saveFile"/>
        <DisplayComponent/>
    </div>
</template>

<script setup lang="ts">
    import DialogComponent from './components/DialogComponent.vue';
    import MenuComponent from './components/MenuComponent.vue';
    import EditorComponent from './components/EditorComponent.vue';
    import DisplayComponent from './components/DisplayComponent.vue'; 

    import { ref } from "vue";
    import { storeToRefs } from "pinia";
    import { useContentStore } from './stores/content';

    const contentStore = useContentStore();
    const { name, isTemplate, templateList } = storeToRefs(contentStore);

    const openFileNameDialog = ref(false);
    const openTemplateFileNameDialog = ref(false);
    const openTemplateListDialog = ref(false);

    const loadTemplates = function() {
        contentStore.listTemplates();
        document.getElementById("templates").showModal();
        //openTemplateListDialog.value = true;
    };

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
            contentStore.save().then(() => {
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
