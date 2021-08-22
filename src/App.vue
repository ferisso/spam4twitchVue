<template>
  <v-app style="background: #292c3b">
    <topBar />
    <router-view style="margin-top: 80px" />
  </v-app>
</template>

<script>
import topBar from "../src/components/topBar/index.vue";
export default {
  components: { topBar },
  data: () => ({}),
};
</script>

<style lang="scss" src="./typography/style.scss">
</style>