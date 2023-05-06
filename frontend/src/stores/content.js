import { defineStore } from "pinia";

export const useContentStore = defineStore({
    id: 'content',
    state: () => ({
        saved: false,
        content: '',
        htmlOutput: ''
    }),
    actions: {
        compile() {
            return fetch();
        }
    }
})
