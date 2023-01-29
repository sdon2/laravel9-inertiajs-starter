<script setup>
defineProps({
    type: {
        type: String,
        default: 'button',
    },
});
</script>

<template>
    <button
        :type="type"
        class="inline-flex items-center btn btn-secondary py-3 px-4 xl:mr-3 mt-3 xl:mt-0 align-top"
    >
        <slot />
    </button>
</template>
