<template>
  <!-- home section -->
  <section class="home" id="home">
    <article class="content">
      <h1>fresh coffee in the morning</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto ducimus
        eius ea mollitia ipsum quae!
      </p>
      <SectionButtons label="Get Yours Now" />
    </article>
  </section>
</template>

<script setup lang="ts">
import SectionButtons from "../../Buttons/SectionButtons/SectionButtons.vue";
</script>

<style lang="scss" scoped>
@import "./Home.module.scss";
</style>
