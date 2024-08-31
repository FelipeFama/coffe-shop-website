<template>
  <!-- review section -->
  <section class="review" id="review">
    <h1 class="heading"><span>customer's </span>review</h1>
    <div class="box-container">
      <article class="box" v-for="(reviews, index) in reviews" :key="index">
        <image :src="reviews.quoteImage" :alt="reviews.quoteAlt" />
        <p>{{ reviews.text }}</p>
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
