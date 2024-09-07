<template>
  <!-- products section -->
  <section class="products" id="products">
    <h1 class="heading"><span>our </span>products</h1>
    <div class="box-container">
      <article class="box" v-for="(products, index) in products" :key="index">
        <aside class="icons">
          <a href="#" aria-label="shopping">
            <FaCartShopping />
          </a>
          <a href="#" aria-label="heart">
            <FaHeart />
          </a>
          <a href="#" aria-label="eye">
            <FaEye />
          </a>
        </aside>
        <figure class="image">
          <img :src="products.image" :alt="products.alt" />
        </figure>
        <aside class="content">
          <h2>{{ products.title }}</h2>
          <aside class="stars">
            <FaStar v-for="n in Math.floor(products.stars)" :key="n" />
            <FaStarHalfStroke v-if="products.stars % 1 !== 0" />
          </aside>
          <aside class="price">
            ${{ products.price }} <span>${{ products.oldPrice }}</span>
          </aside>
        </aside>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { products } from "@/utils";
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
