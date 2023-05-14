<template>
    <dialog class="z-10" :id="id" :open="openValue">
        <slot></slot>    
        <button type="button" @click="closeDialog">Close</button>
    </dialog> 
</template>


<script setup lang="ts">
    const props = defineProps({
        id: { type: String, required: true },
        openValue: Boolean
    });

    const closeDialog = function() {
        const dialogElement: HTMLDialogElement = document.getElementById(props.id) as HTMLDialogElement;
        dialogElement.close();
    };
</script>
