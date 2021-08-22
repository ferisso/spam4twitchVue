<template>
  <div>
    <v-snackbar v-model="snackbar" top right color="#9834e5">
      Texto copiado!

      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          fechar
        </v-btn>
      </template>
    </v-snackbar>
    <v-row>
      <v-col v-for="(item, key) in 12" :key="key" cols="12" sm="4">
        <v-card
          class="spamCard"
          elevation="0"
          color="#292c3b"
          @click="copiarSpam"
        >
          <span class="spamTextTitle">
            O {{ input == "" ? "(Streamer)" : input }} </span
          ><br />
          <span id="spam" style="color: white">
            O {{ input == "" ? "(Streamer)" : input }} pode ser um pouco duro as
            vezes 😏😏 talvez você não saiba disso😥 mas o
            {{ input == "" ? "(Streamer)" : input }}🧒 também cresceu sem
            pai👨😔 Na verdade ele nunca conheceu nenhum de seus pais👨😥🤰 e
            nunca teve nenhum amigo 🤷‍♂️👬em nossa aldeia🍃 Mesmo assim eu nunca
            vi ele chorar😭 ficar zangado😡🤬ou se dar por vencido😱🤷‍♂️ ele está
            sempre disposto😢😧 a melhorar, ele quer ser respeitado😬🧐é o
            sonho☁🌫 dele e o Naruto🧒 daria a vida 🙋‍♂por isso sem hesitar. Meu
            palpite é que ele se cansou🙇 de chorar😭😢 e decidiu dar o cu para
            ganhar dinheiro🥺🙀🙀 🐕🐕🐕🚫🚫👊
          </span>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script src="./script.js">
</script>

<style lang="scss" src="./style.scss">
</style>