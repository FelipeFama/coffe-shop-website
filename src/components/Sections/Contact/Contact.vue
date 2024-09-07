<template>
  <!-- contact section -->
  <section class="contact" id="contact">
    <h1 class="heading"><span>contact</span> us</h1>
    <article class="row">
      <iframe
        title="map"
        class="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63702.34563633262!2d-38.60988713128773!3d-3.7233841150569793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c7484cc0982083%3A0x95af8dacfa07bbdc!2sIndustry%20Museum!5e0!3m2!1sen!2sbr!4v1725232447268!5m2!1sen!2sbr"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen="true"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <form action="">
        <h2>get in touch</h2>
        <aside class="inputBox">
          <span><FaUserLarge /></span>
          <input type="text" placeholder="name" />
        </aside>
        <aside class="inputBox">
          <span><FaEnvelope /></span>
          <input type="email" placeholder="email" />
        </aside>
        <aside class="inputBox">
          <span><FaPhone /></span>
          <input type="text" placeholder="number" />
        </aside>
        <SectionButtons label="contact now" :isContact="true" />
      </form>
    </article>
  </section>
</template>

<script setup lang="ts">
import { FaUserLarge, FaEnvelope, FaPhone } from "@kalimahapps/vue-icons";
import SectionButtons from "../../Buttons/SectionButtons/SectionButtons.vue";
</script>

<style lang="scss" scoped>
@import "./Contact.module.scss";
</style>
