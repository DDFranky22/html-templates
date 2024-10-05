<template>
    <dialog class="z-10 relative w-6/12 md:w-4/12 p-3" :id="id">
        <section>
            <header>
                <button @click="closeDialog" class="absolute top-1 right-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>

                </button>
                <div v-html="title" class="font-semibold"></div>
            </header>
            <hr class="border-black mb-2">
            <slot></slot>
            <hr class="border-black my-3">
            <footer>
                <div class="flex flex-row space-x-2">
                    <button class="flex-auto bg-red-800 text-gray-100 p-1 rounded-md" type="button" @click="closeDialog">Close</button>
                    <button class="flex-auto bg-green-800 text-gray-900 p-1 rounded-md" type="button" @click="execSelectFunction">{{selectLabel}}</button>
                </div>
            </footer>
        </section>
    </dialog>
</template>


<script setup lang="ts">
    import dialogHelper from '../utils/dialogHelper';
    const props = defineProps({
        title: {type: String, required: true },
        id: { type: String, required: true },
        openValue: Boolean,
        selectFunction: Function,
        selectLabel: String
    });

    const execSelectFunction = function() {
        if (props.selectFunction) {
            props.selectFunction();
        }
    };

    const closeDialog = function() {
        dialogHelper.closeDialog(props.id);
    };
</script>

