<template>
  <!-- products section -->
  <section class="products" id="products">
    <h1 class="heading"><span>our </span>products</h1>
    <article class="box-container">
      <div class="box" v-for="(products, index) in products" :key="products.id">
        <aside class="icons">
          <a href="#">
            <FaCartShopping />
          </a>
          <a href="#">
            <FaHeart />
          </a>
          <a href="#">
            <FaEye />
          </a>
        </aside>
        <figure class="image">
          <img :src="products.image" :alt="products.alt" />
        </figure>
        <aside class="content">
          <h3>{{ products.title }}</h3>
        </aside>
        <aside class="stars"></aside>
        <aside class="price">
          \${{ products.price }} <span>\${{ products.oldPrice }}</span>
        </aside>
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
import { products } from "@/utils";
import SectionButtons from "../../Buttons/SectionButtons/SectionButtons.vue";
import {
  FaCartShopping,
  FaHeart,
  FaEye,
  FaStar,
  FaStarHalfStroke,
} from "@kalimahapps/vue-icons";
</script>

<style lang="scss" scoped>
@import "./Products.module.scss";
</style>
