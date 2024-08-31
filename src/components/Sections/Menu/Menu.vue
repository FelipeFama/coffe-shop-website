<template>
  <!-- menu section -->
  <section class="menu" id="menu">
    <h1 class="heading"><span>our </span>menu</h1>
    <article class="box-container">
      <figcaption class="box" v-for="(item, index) in menuItems" :key="index">
        <img :src="item.image" :alt="`${item.title}`" />
        <h3>{{ item.title }}</h3>
        <aside class="price">
          {{ item.price }} <span>{{ item.oldPrice }}</span>
        </aside>
        <SectionButtons :label="item.buttonText" />
      </figcaption>
    </article>
  </section>
</template>

<script setup lang="ts">
import { menuItems } from "@/utils";
import SectionButtons from "../../Buttons/SectionButtons/SectionButtons.vue";
</script>

<style lang="scss" scoped>
@import "./Menu.module.scss";
</style>
