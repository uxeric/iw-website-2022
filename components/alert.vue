<template>
  <div class="alert">
    <slot />
  </div>
</template>

<style lang="scss">
.alert {
  max-width: 500px;
  margin: 0 auto 45px auto;
  position: relative;
  padding: 1rem 1rem;
  border: 1px solid #badbcc;
  border-radius: 0.25rem;
  color: #0f5132;
  background-color: #d1e7dd;
}
</style>
