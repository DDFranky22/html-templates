import { defineStore } from "pinia";
const baseUrl = import.meta.env.VITE_API_ENDPOINT;
const validNameRegex = new RegExp(/^[A-Za-z0-9_-]{1,}$/gm);

export const useContentStore = defineStore({
    id: 'content',
    state: () => ({
        saved: false,
        content: '',
        name: 'New email *',
        isTemplate: false,
        htmlOutput: '',
        nameValid: false,
        saveError: false,
        fileList: [],
        templateList: []
    }),
    getters: {
        isNameValid: (state) => {
            if (state.name != "New email *" && state.name.match(validNameRegex)) {
                return state.nameValid = true;
            }
            return state.nameValid = false;
        }
    },
    actions: {
        clearEditor() {
            const editor = document.querySelector('.CodeMirror')?.CodeMirror;
            if (editor) {
                editor.getDoc().setValue("");
            }
        },
        setEditorValue(value: string) {
            const editor = document.querySelector('.CodeMirror')?.CodeMirror;
            if (editor) {
                editor.getDoc().setValue(value);
            }
        },
        newFile() {
            this.saved = false;
            this.content = '';
            this.name = "New email *";
            this.isTemplate = false;
            this.htmlOutput = '';
            this.nameValid = false;
            this.saveError = false;
            this.clearEditor();
        },
        preview() {
            return fetch(baseUrl+"/internal-api/preview", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({content: this.content})
            }).then( (result) => {
                if (result.status == 200) {
                    return result.text();
                }
            }). then( (resultText) => {
                if (resultText) {
                    this.htmlOutput = resultText;
                }
            });
        },
        save() {
            return fetch(baseUrl+"/internal-api/save-file", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({content: this.content, name: this.name}) 
            }).then((result) => {
                if (result.status == 200) {
                    return result.text();
                }
            }).then((preview) => {
                if (preview) {
                    this.htmlOutput = preview;
                    this.saved = true;
                }
            });
        },
        listFiles() {
            return fetch(baseUrl+"/internal-api/list-files", {
                method: "GET",
                mode: "cors"
            }).then( (result) => {
                if (result.status == 200) {
                    return result.json();
                }
            }).then( (files) => {
               this.fileList = files; 
            });
        },
        download() {
            return fetch(baseUrl+"/internal-api/download-html", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({content: this.content}) 
            }).then((result) => {
                if (result.status == 200) {
                    return result.blob(); 
                }
            }).then((blob) => {
                if (blob) {
                    const link = document.createElement('a')
                    link.href = URL.createObjectURL(blob);
                    link.download = "file";
                    link.click();
                    URL.revokeObjectURL(link.href);
                }
            });

        },
        saveTemplate() {
            return fetch(baseUrl+"/internal-api/save-template", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({content: this.content, name: this.name}) 
            }).then((result) => {
                if (result.status == 200) {
                    return result.text();
                }
            }).then( (preview) => {
                if (preview) {
                    this.htmlOutput = preview;
                    this.saved = true;
                }
            });

        },
        listTemplates() {
            return fetch(baseUrl+"/internal-api/list-templates", {
                method: "GET",
                mode: "cors"
            }).then( (result) => {
                if (result.status == 200) {
                    return result.json();
                }
            }).then( (files) => {
               this.templateList = files; 
            });
        },
    }
})
