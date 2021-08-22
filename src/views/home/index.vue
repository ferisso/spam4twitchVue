<template>
  <div>
    <div class="centralized">
      <h1 class="titulo">Spam4</h1>
      <h1 class="titulo" style="color: #9834e5">Twitch</h1>
    </div>
    <div class="centralized">
      <p style="color: white">
        Melhor site de personalização de spams 🤮 para Twitch. 🙏🙏🙏
      </p>
    </div>
    <div class="centralized">
      <input
        v-model="input"
        placeholder="Escreva o nome do Streamer"
        class="inputStyle"
        type="text"
      />
    </div>
    <spams class="spams" :input="input" />
  </div>
</template>

<script src="./script.js">
</script>

<style lang="scss" src="./style.scss">
</style>