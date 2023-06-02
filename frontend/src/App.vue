<template>
    <DialogComponent
    :title="'Available templates'"
    :id="'templates'"
    :selectLabel="'Select Template'"
    :selectFunction="selectTemplate"
    >
    <form @submit.prevent>
    <select v-model="selectedTemplate" >
        <option disabled value="">Please select one</option>
        <option :value="singleTemplate" v-for="singleTemplate in templateList">
        {{ singleTemplate }}
        </option>
    </select>
    </form>
    </DialogComponent>
    <DialogComponent
    :title="'Available templates'"
    :id="'newFromTemplate'"
    :selectLabel="'Select Template'"
    :selectFunction="newFromTemplate"
    >
    <form @submit.prevent>
    <select v-model="selectedTemplate" >
        <option disabled value="">Please select one</option>
        <option :value="singleTemplate" v-for="singleTemplate in templateList">
        {{ singleTemplate }}
        </option>
    </select>
    </form>
    </DialogComponent>

    <DialogComponent
    :title="'Available files'"
    :id="'files'"
    :selectLabel="'Select file'"
    :selectFunction="selectFile"
    >
    <form @submit.prevent>
    <select v-model="selectedFile" >
        <option disabled value="">Please select one</option>
        <option :value="singleFile" v-for="singleFile in fileList">
        {{ singleFile }}
        </option>
    </select>
    </form>
    </DialogComponent>

    <DialogComponent
    :title="'You must insert a valid name'"
    :id="'filename'"
    :selectLabel="'Save'"
    :selectFunction="saveFile"
    >
    <form @submit.prevent="saveFile">
        <input placeholder="New file name *" v-model="name" type="text" name="fileName" id="fileName">
    </form>
    </DialogComponent>
    <DialogComponent
    :title="'Insert email address'"
    :id="'testMail'"
    :selectLabel="'Send'"
    :selectFunction="sendTestMail"
    >
    <form @submit.prevent="sendTestMail">
        <input placeholder="address@email.com" required v-model="testMailAddress" type="email" name="testMailAddress" id="testMailAddress">
    </form>
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
    import dialogHelper from './utils/dialogHelper';

    const contentStore = useContentStore();
    const { name, isTemplate, fileList, templateList } = storeToRefs(contentStore);

    const selectedTemplate = ref("");
    const selectedFile = ref("");
    const testMailAddress = ref("");

    const loadTemplates = function() {
        contentStore.listTemplates();
        dialogHelper.openDialog("templates");
    };

    const selectTemplate = function() {
        contentStore.selectTemplate(selectedTemplate.value);
        dialogHelper.closeDialog("templates");
    };

    const loadNewFromTemplates = function() {
        contentStore.listTemplates();
        dialogHelper.openDialog("newFromTemplate");
    };

    const newFromTemplate = function() {
        contentStore.newFromTemplate(selectedTemplate.value);
        dialogHelper.closeDialog("newFromTemplate");
    };

    const loadFiles = function() {
        contentStore.listFiles();
        dialogHelper.openDialog("files");
    };

    const selectFile = function() {
        contentStore.selectFile(selectedFile.value);
        dialogHelper.closeDialog("files");
    };

    const saveFile = function() {
        if (contentStore.isNameValid) {
            if (isTemplate.value) {
                contentStore.saveTemplate();
            } else {
                contentStore.save();
            }
            dialogHelper.closeDialog("filename");
        } else {
            dialogHelper.openDialog("filename");
        }
    };

    const newFile = function() {
        contentStore.newFile();
    };

    const sendTestMail = function() {
        if (testMailAddress.value) {
            contentStore.sendTestMail(testMailAddress.value);
            dialogHelper.closeDialog("testMail");
            testMailAddress.value = "";
        } else {
            dialogHelper.openDialog("testMail");
        }
    }
</script>

<style scoped>
</style>
