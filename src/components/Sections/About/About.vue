<template>
  <!-- about section -->
  <section class="about" id="about">
    <h1 class="heading"><span>about</span> us</h1>
    <div class="row">
      <figure class="image">
        <img src="/src/assets/images/about-img.jpeg" alt="about" />
      </figure>
      <article class="content">
        <h2>what makes our coffee special?</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, quo
          ullam? Fugit animi, omnis totam reiciendis neque voluptatibus quis
          temporibus iste blanditiis unde, ipsam debitis in voluptatem modi
          veritatis recusandae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          inventore nisi tempora consequuntur corporis accusantium veritatis
          consequatur dolorum illum culpa?
        </p>
        <SectionButtons label="Learn More" />
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionButtons from "../../Buttons/SectionButtons/SectionButtons.vue";
</script>

<style lang="scss" scoped>
@import "./About.module.scss";
</style>
