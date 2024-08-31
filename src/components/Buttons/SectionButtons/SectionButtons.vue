<template>
  <a href="#" class="btn">{{ props.label }}</a>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
  label: string;
}
const props = defineProps<Props>();
/*
defineProps({
  label: {
    type: String,
    required: true,
  },
});
*/
</script>

<style lang="scss" scoped>
@import "./SectionButtons.module.scss";
</style>
