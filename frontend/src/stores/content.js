import { defineStore } from "pinia";
const baseUrl = import.meta.env.VITE_API_ENDPOINT;

export const useContentStore = defineStore({
    id: 'content',
    state: () => ({
        saved: false,
        content: '',
        name: '',
        htmlOutput: '',
        saveError: false
    }),
    actions: {
        compile() {
            const formData = new FormData();
            formData.append('content', this.content);
            fetch(baseUrl+"/internal-api/convert", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({content: this.content}) 
            }).then((result) => {
                result.text().then( (value) => {
                    this.htmlOutput = value;
                    this.saved = true;
                });
            });
        }
    }
})
