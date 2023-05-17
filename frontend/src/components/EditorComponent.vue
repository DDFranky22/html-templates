<template>
    <div class="static">
        <div class="top-0 z-10" :class="{ 'bg-green-700': saved, 'bg-red-700': !saved }">
            <span v-if="isTemplate">Template: </span>
            <span v-if="name">{{ name }}</span></div>

        <textarea class="h-screen" v-model="content" id="editor"></textarea>
    </div>
</template>

<script setup lang="ts">
    import * as CodeMirror from "codemirror";
    import 'codemirror/lib/codemirror.css';
    import 'codemirror/theme/darcula.css';
    import 'codemirror/mode/xml/xml.js';
    import 'codemirror/addon/hint/show-hint.css';
    import 'codemirror/addon/hint/show-hint.js';
    import 'codemirror/addon/hint/xml-hint.js';
    import { onMounted } from "vue";
    import { storeToRefs } from "pinia";
    import { useContentStore } from '../stores/content';
    import mjmlSchema from '../utils/mjmlSchema';

    const contentStore = useContentStore();
    const { saved, content, name, isTemplate } = storeToRefs(contentStore);
    const emit = defineEmits(["saveFile"]);

    const customKeyMap = {
        "Ctrl-S": function() { 
            emit("saveFile");
        },
        "Ctrl-P": function() {
            contentStore.preview();
        }
    };

    onMounted(() => {
        const editorElement = document.getElementById("editor") as HTMLTextAreaElement;
        if (editorElement) {
            
        function completeAfter(cm: CodeMirror.Editor, pred: Function)  {
            if (!pred || pred()) setTimeout(function() {
                if (!cm.state.completionActive)
                    cm.showHint({completeSingle: false});
                }, 100);
            return CodeMirror.Pass;
      }

      function completeAfterStandard(cm: CodeMirror.Editor) {
        return completeAfter(cm, function(){
            setTimeout(function() {
                if (!cm.state.completionActive) {
                    cm.showHint({completeSingle: false});
                }
            }, 100);
        });
      }

      function completeIfAfterLt(cm: CodeMirror.Editor) {
        return completeAfter(cm, function() {
          var cur = cm.getCursor();
          return cm.getRange(CodeMirror.Pos(cur.line, cur.ch - 1), cur) == "<";
        });
      }

      function completeIfInTag(cm: CodeMirror.Editor) {
        return completeAfter(cm, function() {
          var tok = cm.getTokenAt(cm.getCursor());
          if (tok.type == "string" && (!/['"]/.test(tok.string.charAt(tok.string.length - 1)) || tok.string.length == 1)) return false;
          var inner = CodeMirror.innerMode(cm.getMode(), tok.state).state;
          return inner.tagName;
        });
      }
           const editor = CodeMirror.fromTextArea(editorElement, {
               lineNumbers: true,
               theme: "darcula",
               mode: "application/xml",
                extraKeys: {
                    "'<'": completeAfterStandard,
                    "'/'": completeIfAfterLt,
                    "' '": completeIfInTag,
                    "'='": completeIfInTag,
                    "Ctrl-Space": "autocomplete"
                },
               hintOptions: { schemaInfo: mjmlSchema }
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
