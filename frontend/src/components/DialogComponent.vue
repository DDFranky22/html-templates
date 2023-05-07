<template>
    <dialog class="z-10" :id="id" :open="openValue">
        <slot></slot>    
    </dialog> 
</template>


<script setup lag="ts">
    const props = defineProps({
        id: String,
        openValue: Boolean
    });

</script>
