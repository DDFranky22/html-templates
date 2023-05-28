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
    :id="'newFromTemplate'"
    >
    <p>Available templates</p>
    <select v-model="selectedTemplate" >
        <option disabled value="">Please select one</option>
        <option :value="singleTemplate" v-for="singleTemplate in templateList">
        {{ singleTemplate }}
        </option>
    </select>
    <button type="button" @click="newFromTemplate">Select Template</button>
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
    >
    <p>You must insert a valid name</p>
    <form @submit.prevent="saveFile">
        <input v-model="name" type="text" name="fileName" id="fileName">
    </form>
    <button type="button" @click="saveFile">Save</button>
    </DialogComponent>
    <DialogComponent
    :id="'testMail'"
    >
    <form @submit.prevent="sendTestMail">
        <input v-model="testMailAddress" type="text" name="testMailAddress" id="testMailAddress">
    </form>
    <button type="button" @click="sendTestMail">Send</button>
    </DialogComponent>

    <MenuComponent 
    @saveFile="saveFile" 
    @newFile="newFile" 
    @loadFiles="loadFiles"
    @loadTemplates="loadTemplates" 
    @newFromTemplate="loadNewFromTemplates"
    @sendTestMail="sendTestMail"
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

    const selectedTemplate = ref("");
    const selectedFile = ref("");
    const testMailAddress = ref("");

    const loadTemplates = function() {
        contentStore.listTemplates();
        const dialogElement: HTMLDialogElement = document.getElementById("templates") as HTMLDialogElement;
        dialogElement.showModal();
    };

    const selectTemplate = function() {
        contentStore.selectTemplate(selectedTemplate.value);
        const dialogElement: HTMLDialogElement = document.getElementById("templates") as HTMLDialogElement;
        dialogElement.close();
    };

    const loadNewFromTemplates = function() {
        contentStore.listTemplates();
        const dialogElement: HTMLDialogElement = document.getElementById("newFromTemplate") as HTMLDialogElement;
        dialogElement.showModal();
    };

    const newFromTemplate = function() {
        contentStore.newFromTemplate(selectedTemplate.value);
        const dialogElement: HTMLDialogElement = document.getElementById("newFromTemplate") as HTMLDialogElement;
        dialogElement.close();
    };

    const loadFiles = function() {
        contentStore.listFiles();
        const dialogElement: HTMLDialogElement = document.getElementById("files") as HTMLDialogElement;
        dialogElement.showModal();
    };

    const selectFile = function() {
        contentStore.selectFile(selectedFile.value);
        const dialogElement: HTMLDialogElement = document.getElementById("files") as HTMLDialogElement;
        dialogElement.close();
    };

    const saveFile = function() {
        if (contentStore.isNameValid) {
            if (isTemplate.value) {
                contentStore.saveTemplate();
            } else {
                contentStore.save();
            }
            const dialogElement: HTMLDialogElement = document.getElementById("filename") as HTMLDialogElement;
            dialogElement.close();
        } else {
            const dialogElement: HTMLDialogElement = document.getElementById("filename") as HTMLDialogElement;
            dialogElement.showModal();
        }
    };

    const newFile = function() {
        contentStore.newFile();
    };

    const sendTestMail = function() {
        if (testMailAddress.value) {
            contentStore.sendTestMail(testMailAddress.value);
            const dialogElement: HTMLDialogElement = document.getElementById("testMail") as HTMLDialogElement;
            dialogElement.close();
            testMailAddress.value = "";
        } else {
            const dialogElement: HTMLDialogElement = document.getElementById("testMail") as HTMLDialogElement;
            dialogElement.showModal();
        }
    }
</script>

<style scoped>
</style>
