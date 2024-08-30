<template>
  <a href="#" class="btn">{{ label }}</a>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const { label } = defineProps<{
  label: string;
}>();
</script>

<style lang="scss" scoped>
@import "./SectionButtons.module.scss";
</style>
