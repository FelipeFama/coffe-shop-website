<template>
  <footer class="footer">
    <aside class="share">
      <a href="#">
        <FaBandsFacebookF />
      </a>
      <a href="#">
        <FaBandsTwitter />
      </a>
      <a href="#">
        <FaBandsInstagram />
      </a>
      <a href="#">
        <FaBandsLinkedin />
      </a>
      <a href="#">
        <FaBandsPinterest />
      </a>
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
