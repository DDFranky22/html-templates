import { defineStore } from "pinia";
const baseUrl = import.meta.env.VITE_API_ENDPOINT;
const validNameRegex = new RegExp(/^[A-Za-z0-9_-]{1,}$/gm);

export const useContentStore = defineStore({
    id: 'content',
    state: () => ({
        saved: false,
        content: '',
        name: 'New email *',
        htmlOutput: '',
        saveError: false
    }),
    getters: {
        isNameValid: (state) => {
            if (state.name != "New email *" && state.name.match(validNameRegex)) {
                return true;
            }
            return false;
        }
    },
    actions: {
        compile() {
            const formData = new FormData();
            formData.append('content', this.content);
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
        }
    }
})
