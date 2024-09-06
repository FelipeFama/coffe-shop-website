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
      <aside id="search-btn" @click="toggleSearch"><IoSearch /></aside>
      <aside id="cart-btn" @click="toggleCartItem"><FaCartShopping /></aside>
      <aside id="menu-btn" @click="toggleNavbar"><FaBars /></aside>
    </nav>
    <!-- search section with its icon -->
    <aside :class="['search-form', { active: isSearchFormActive }]">
      <input type="search" id="search-box" placeholder="search here..." />
      <label for="search-box">
        <IoSearch />
      </label>
    </aside>
    <!-- cart section with its listed items -->
    <nav :class="['cart-items-container', { active: isCartItemActive }]">
      <aside class="cart-item" v-for="(item, index) in headerCart" :key="index">
        <span class="fas fa-times"></span>
        <img :src="item.image" alt="item.alt" />
        <span><HuTimes /></span>
        <article class="content">
          <h3>{{ item.title }}</h3>
          <div class="price">{{ item.price }}</div>
        </article>
      </aside>
      <SectionButtons label="checkout now" />
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { headerCart } from "@/utils";
import {
  IoSearch,
  FaCartShopping,
  FaBars,
  HuTimes,
} from "@kalimahapps/vue-icons";
import SectionButtons from "../../Buttons/SectionButtons/SectionButtons.vue";

const isNavbarActive = ref(false);
const isSearchFormActive = ref(false);
const isCartItemActive = ref(false);

const toggleNavbar = () => {
  isNavbarActive.value = !isNavbarActive.value;
  isSearchFormActive.value = false;
  isCartItemActive.value = false;
};

const toggleSearch = () => {
  isSearchFormActive.value = !isSearchFormActive.value;
  isNavbarActive.value = false;
  isCartItemActive.value = false;
};

const toggleCartItem = () => {
  isCartItemActive.value = !isCartItemActive.value;
  isNavbarActive.value = false;
  isSearchFormActive.value = false;
};
</script>

<style lang="scss" scoped>
@import "./Header.module.scss";
</style>
