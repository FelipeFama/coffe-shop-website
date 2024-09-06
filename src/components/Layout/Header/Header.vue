<template>
  <header class="header">
    <a href="#" class="logo">
      <img src="@/assets/images/logo.png" alt="logo" />
    </a>
    <!-- navigation bar -->
    <nav :class="['navbar', { active: isNavbarActive }]">
      <a href="#home">home</a>
      <a href="#about">about</a>
      <a href="#menu">menu</a>
      <a href="#products">products</a>
      <a href="#review">review</a>
      <a href="#contact">contact</a>
      <a href="#blogs">blogs</a>
    </nav>
    <!-- icons for the navigation -->
    <nav class="icons">
      <aside id="search-btn"><IoSearch /></aside>
      <aside id="cart-btn"><FaCartShopping /></aside>
      <aside id="menu-btn" @click="toggleNavbar"><FaBars /></aside>
    </nav>
    <!-- search section with its icon -->
    <aside class="search-form">
      <input type="search" id="search-box" placeholder="search here..." />
      <label for="search-box">
        <IoSearch />
      </label>
    </aside>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { IoSearch, FaCartShopping, FaBars } from "@kalimahapps/vue-icons";

const isNavbarActive = ref(false);

const toggleNavbar = () => {
  isNavbarActive.value = !isNavbarActive.value;
};
</script>

<style lang="scss" scoped>
@import "./Header.module.scss";
</style>
