<template>
    <DialogComponent
    :id="'templates'"
    >
        <p>Available templates</p>
        <select v-model="selectedTemplate" >
            <option disabled value="">Please select one</option>
            <option :value="singleTemplate" v-for="singleTemplate in templateList">
                {{ singleTemplate }}
            </option>
        </select>
        <button type="button" @click="selectTemplate">Select Template</button>
    </DialogComponent>
    <DialogComponent
    :id="'files'"
    >
        <p>Available files</p>
        <select v-model="selectedFile" >
            <option disabled value="">Please select one</option>
            <option :value="singleFile" v-for="singleFile in fileList">
                {{ singleFile }}
            </option>
        </select>
        <button type="button" @click="selectFile">Select File</button>
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
    <MenuComponent 
        @saveFile="saveFile" 
        @newFile="newFile" 
        @loadFiles="loadFiles"
        @loadTemplates="loadTemplates" 
    />
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
    const { name, isTemplate, fileList, templateList } = storeToRefs(contentStore);

    const openFileNameDialog = ref(false);
    const openTemplateFileNameDialog = ref(false);
    const selectedTemplate = ref("");
    const selectedFile = ref("");

    const loadTemplates = function() {
        contentStore.listTemplates();
        const dialogElement: HTMLDialogElement = document.getElementById("templates") as HTMLDialogElement;
        dialogElement.showModal()
    };

    const selectTemplate = function() {
        contentStore.selectTemplate(selectedTemplate.value);
        const dialogElement: HTMLDialogElement = document.getElementById("templates") as HTMLDialogElement;
        dialogElement.close()
    };

    const loadFiles = function() {
        contentStore.listFiles();
        const dialogElement: HTMLDialogElement = document.getElementById("files") as HTMLDialogElement;
        dialogElement.showModal()
    };
    
    const selectFile = function() {
        contentStore.selectFile(selectedFile.value);
        const dialogElement: HTMLDialogElement = document.getElementById("files") as HTMLDialogElement;
        dialogElement.close();
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
