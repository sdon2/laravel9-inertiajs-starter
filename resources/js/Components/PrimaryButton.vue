<script setup>
defineProps({
    type: {
        type: String,
        default: 'submit',
    },
});
</script>

<template>
    <button
        :type="type"
        class="inline-flex items-center btn btn-primary py-3 px-4 xl:mr-3 mt-3 xl:mt-0 align-top"
    >
        <slot />
    </button>
</template>
