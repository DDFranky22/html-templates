<template>
    <div class="static">
        <div class="top-0 z-10" :class="{ 'bg-green-700': saved, 'bg-red-700': !saved }"> {{ saved }} Name of the file?</div>
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
    const { saved, content } = storeToRefs(contentStore);

    const customKeyMap = {"Ctrl-S": function(cm) { 
        contentStore.compile();
    }};
    
    onMounted(() => {
        const editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
            lineNumbers: true,
            theme: "darcula",
            mode: "application/xml",
            bordered: true
        });
            editor.on('change', function(cm) {
                content.value = cm.getValue();
                if (saved.value != false) {
                    saved.value = false;
                }
        });
        editor.addKeyMap(customKeyMap);
    });
</script>

<style> 
    .CodeMirror {
        height: 100vh;
    }
</style>
