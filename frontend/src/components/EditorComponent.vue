<template>
    <div class="static">
        <div class="top-0 z-10" :class="{ 'bg-green-700': saved, 'bg-red-700': !saved }">{{ name }}</div>
        <dialog class="z-10" id="filename" :open="openFileNameDialog">
            <p>You must insert a valid name</p>
            <form>
                <input v-model="name" type="text" name="fileName" id="fileName">
                <button type="button" @click="updateFileNameAndSave">Save</button>
                <button type="button" @click="closeFileNameDialog">Close</button>
            </form>
        </dialog>

        <textarea class="h-screen" v-model="content" id="editor"></textarea>
    </div>
</template>

<script setup lang="ts">
    import * as CodeMirror from "codemirror";
    import 'codemirror/lib/codemirror.css';
    import 'codemirror/theme/darcula.css';
    import 'codemirror/mode/xml/xml.js';
    import { ref, onMounted } from "vue";
    import { storeToRefs } from "pinia";
    import { useContentStore } from '../stores/content';

    const contentStore = useContentStore();
    const { saved, content, name } = storeToRefs(contentStore);


    const openFileNameDialog = ref(false);
    const customKeyMap = {"Ctrl-S": function() { 
        if (contentStore.isNameValid) {
            contentStore.compile();
        } else {
            openFileNameDialog.value = true;
        }
    }};

    onMounted(() => {
        const editorElement = document.getElementById("editor") as HTMLTextAreaElement;
        if (editorElement) {
             const editor = CodeMirror.fromTextArea(editorElement, {
                lineNumbers: true,
                theme: "darcula",
                mode: "application/xml",
            });
            editor.on('change', function(cm) {
                content.value = cm.getValue();
                if (saved.value != false) {
                    saved.value = false;
                }
            });
            editor.addKeyMap(customKeyMap);
        }
    });

    const closeFileNameDialog = function() {
        openFileNameDialog.value = false;
    };

    const updateFileNameAndSave = function() {
        if (contentStore.isNameValid) {
            contentStore.compile().then(() => {
                openFileNameDialog.value = false;
            });
        }
    }
</script>

<style> 
.CodeMirror {
    height: 100vh;
}
</style>
