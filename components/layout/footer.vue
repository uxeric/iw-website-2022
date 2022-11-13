<template>
  <div class="footer">
    <div class="columns-3 content">
      <div class="column">
        <div class="logo-container">
          <img class="logo" src="images/industrial-webworks-logo-white.png" alt="Industrial Webworks Logo">
        </div>
        <div class="body">
          Prototype. Build. <br/>
          Succeed.
        </div>
      </div>
      <div class="column">
        <div class="title">Quick Links</div>
        <ul class="links">
          <li><a class="link" href="#home">Home</a></li>
          <li><a class="link" href="#services">Services</a></li>
        </ul>
      </div>
      <div class="column">
        <div class="title">&nbsp;</div>
        <ul class="links">
          <li><a class="link" href="#testimonials">Testimonials</a></li>
          <li><a class="link" href="#contact">Contact Us</a></li>
        </ul>
      </div>
    </div>
    <div class="copyright">
      Copyright &copy; {{ year }} Industrial Webworks Inc. All rights reserved.
    </div>
  </div>
</template>

<script setup>
const year = ref(new Date().getFullYear())
</script>
