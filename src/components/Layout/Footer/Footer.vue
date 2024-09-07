<template>
  <footer class="footer">
    <aside class="share">
      <a href="#" aria-label="facebook">
        <FaBandsFacebookF />
      </a>
      <a href="#" aria-label="twitter">
        <FaBandsTwitter />
      </a>
      <a href="#" aria-label="instagram">
        <FaBandsInstagram />
      </a>
      <a href="#" aria-label="linkedin">
        <FaBandsLinkedin />
      </a>
      <a href="#" aria-label="pinterest">
        <FaBandsPinterest />
      </a>
    </aside>
    <aside class="links">
      <a href="#" aria-label="home">home</a>
      <a href="#" aria-label="about">about</a>
      <a href="#" aria-label="menu">menu</a>
      <a href="#" aria-label="products">products</a>
      <a href="#" aria-label="review">review</a>
      <a href="#" aria-label="contact">contact</a>
      <a href="#" aria-label="blogs">blogs</a>
    </aside>
    <aside class="credit">
      created by <span>felipe fama</span> | rights reserved for
      <span>mr. web designer</span>
    </aside>
  </footer>
</template>

<script setup lang="ts">
import { FaBandsFacebookF } from "@kalimahapps/vue-icons";
import { FaBandsTwitter } from "@kalimahapps/vue-icons";
import { FaBandsInstagram } from "@kalimahapps/vue-icons";
import { FaBandsLinkedin } from "@kalimahapps/vue-icons";
import { FaBandsPinterest } from "@kalimahapps/vue-icons";
</script>

<style lang="scss" scoped>
@import "./Footer.module.scss";
</style>
