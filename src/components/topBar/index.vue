<template>
  <div class="centralized">
    <span
      :style="{ color: $route.path == '/' ? '#9834e5' : 'white' }"
      class="spamHeader"
      >Home</span
    >
    <span class="spamHeader">Envie seu spam</span>
    <span class="spamHeader">Sobre nós</span>
  </div>
</template>

<script>
export default {
  name: "topBar",
};
</script>

<style lang="scss" src="./style.scss">
</style>