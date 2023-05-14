<template>
    <dialog class="z-10" :id="id" :open="openValue">
        <slot></slot>    
        <button type="button" @click="closeDialog">Close</button>
    </dialog> 
</template>


<script setup lang="ts">
    const props = defineProps({
        id: String,
        openValue: Boolean
    });

    const closeDialog = function() {
        document.getElementById(props.id).close();
    };
</script>
