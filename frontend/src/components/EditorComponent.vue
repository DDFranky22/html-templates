<template>
    <div class="static">
        <div class="top-0 z-10" :class="{ 'bg-green-700': saved, 'bg-red-700': !saved }">{{ name }}</div>

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
    const emit = defineEmits(["saveFile"]);

    const openFileNameDialog = ref(false);
    const customKeyMap = {"Ctrl-S": function() { 
        emit("saveFile");
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

</script>

<style> 
.CodeMirror {
    height: 100vh;
}
</style>
