<template>
    <dialog class="z-10" :id="id" :open="openValue">
        <slot></slot>    
    </dialog> 
</template>


<script setup lang="ts">
    const props = defineProps({
        id: String,
        openValue: Boolean
    });
    console.log(props);
</script>
