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
        saveError: false
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
        newFile() {
            this.saved = false;
            this.content = '';
            this.name = "New email *";
            this.isTemplate = false;
            this.htmlOutput = '';
            this.nameValid = false;
            this.saveError = false;
        },
        compile() {
            return fetch(baseUrl+"/internal-api/convert", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({content: this.content, name: this.name}) 
            }).then((result) => {
                if (result.status == 200) {
                    result.text().then( (value) => {
                        this.htmlOutput = value;
                        this.saved = true;
                    });
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
                    result.blob().then( (blob) => {
                       const link = document.createElement('a')
                       link.href = URL.createObjectURL(blob);
                       link.download = "file";
                       link.click();
                       URL.revokeObjectURL(link.href);
                    });
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
                    result.text().then( (value) => {
                        this.htmlOutput = value;
                        this.saved = true;
                    });
                }
            });

        }
    }
})
