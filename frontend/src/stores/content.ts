import { defineStore } from "pinia";
const baseUrl = import.meta.env.VITE_API_ENDPOINT;
const validNameRegex = new RegExp(/^[A-Za-z0-9_-]{1,}$/gm);

export const useContentStore = defineStore({
    id: 'content',
    state: () => ({
        saved: false,
        content: '',
        name: '',
        isTemplate: false,
        htmlOutput: '',
        nameValid: false,
        saveError: false,
        fileList: [],
        templateList: [],
        darkMode: false
    }),
    getters: {
        isNameValid: (state) => {
            if (state.name != "" && state.name.match(validNameRegex)) {
                console.log(state.nameValid, state.name);
                return state.nameValid = true;
            }
            console.log(state.nameValid, state.name);
            return state.nameValid = false;
        }
    },
    actions: {
        getProperty(object: any, key: string): any {
            return object[key];
        },
        clearEditor() {
           this.setEditorValue(""); 
        },
        setEditorValue(value: string) {
            const editorObject = document.querySelector('.CodeMirror');
            let editor = null;
            if (editorObject && editorObject.hasOwnProperty('CodeMirror')) {
                editor = this.getProperty(editorObject, "CodeMirror");
            }
            if (editor) {
                editor.getDoc().setValue(value);
            }
        },
        newFile() {
            this.saved = false;
            this.content = '';
            this.name = "";
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
        selectFile(fileName: string) {
            return fetch(baseUrl+"/internal-api/get-file", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({fileName: fileName})
            }).then((response) => {
                if (response.status == 200) {
                    return response.json();
                }
            }).then( (responseJson) => {
                if (responseJson) {
                    this.htmlOutput = responseJson.preview;
                    this.content = responseJson.content;
                    this.name = fileName;
                    this.isTemplate = false;
                    this.setEditorValue(this.content);
                    this.saved = true;
                }
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
        selectTemplate(templateName: string) {
            return fetch(baseUrl+"/internal-api/get-template", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({templateName: templateName})
            }).then((response) => {
                if (response.status == 200) {
                    return response.json();
                }
            }).then( (responseJson) => {
                if (responseJson) {
                    this.htmlOutput = responseJson.preview;
                    this.content = responseJson.content;
                    this.name = templateName;
                    this.isTemplate = true;
                    this.setEditorValue(this.content);
                    this.saved = true;
                }
            });
        },
        newFromTemplate(templateName: string) {
            return fetch(baseUrl+"/internal-api/get-template", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({templateName: templateName})
            }).then((response) => {
                if (response.status == 200) {
                    return response.json();
                }
            }).then( (responseJson) => {
                if (responseJson) {
                    this.htmlOutput = responseJson.preview;
                    this.content = responseJson.content;
                    this.isTemplate = false;
                    this.name = "";
                    this.setEditorValue(this.content);
                }
            });
        },
        sendTestMail(destinationMail: string) {
            return fetch(baseUrl+"/internal-api/send-mail", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({content: this.content, destinationMail: destinationMail})
            }).then((response) => {
                if (response.status == 200) {
                    return response.json();
                }
            });
        }
    }
})
