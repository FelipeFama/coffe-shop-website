<template>
  <!-- blog section -->
  <section class="blogs" id="blogs">
    <h1 class="heading"><span>our </span>blogs</h1>
    <div class="box-container">
      <article class="box" v-for="(post, index) in blogPosts" :key="index">
        <figure class="image">
          <img :src="post.imageSrc" :alt="post.imageAlt" />
        </figure>
        <aside class="content">
          <a class="title" :href="post.link">{{ post.title }}</a>
          <span>by {{ post.author }} / {{ post.date }}</span>
          <p>{{ post.description }}</p>
          <SectionButtons label="Read More" />
        </aside>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { blogPosts } from "@/utils";
import SectionButtons from "../../Buttons/SectionButtons/SectionButtons.vue";
</script>

<style lang="scss" scoped>
@import "./Blog.module.scss";
</style>
