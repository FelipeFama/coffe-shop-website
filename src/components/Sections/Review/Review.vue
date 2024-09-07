<template>
  <!-- review section -->
  <section class="review" id="review">
    <h1 class="heading"><span>customer's </span>review</h1>
    <div class="box-container">
      <article class="box" v-for="(reviews, index) in reviews" :key="index">
        <img :src="reviews.quoteImage" :alt="reviews.quoteAlt" />
        <p>{{ reviews.text }}</p>
        <img :src="reviews.image" :alt="reviews.alt" />
        <h2>{{ reviews.title }}</h2>
        <aside class="stars">
          <FaStar v-for="n in Math.floor(reviews.stars)" :key="n" />
          <FaStarHalfStroke v-if="reviews.stars % 1 !== 0" />
        </aside>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reviews } from "@/utils";
import { FaStar, FaStarHalfStroke } from "@kalimahapps/vue-icons";
</script>

<style lang="scss" scoped>
@import "./Review.module.scss";
</style>
