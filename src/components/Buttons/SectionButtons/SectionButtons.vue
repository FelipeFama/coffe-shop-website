<template>
  <component
    :is="props.isContact ? 'input' : 'a'"
    :href="props.isContact ? undefined : '#'"
    :value="props.isContact ? props.label : undefined"
    :class="['btn']"
    :type="props.isContact ? 'submit' : undefined"
  >
    <template v-if="!props.isContact">
      {{ props.label }}
    </template>
  </component>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
  label: string;
  isContact?: boolean;
}
const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
@import "./SectionButtons.module.scss";
</style>
