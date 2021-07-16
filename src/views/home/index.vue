<template>
  <div style="padding: 0 15px">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
    <v-row>
      <v-col sm="12" cols="12">
        <v-card
          dark
          width="100%"
          height="600"
          color="#333"
          elevation="0"
          class="cardColor"
          style="border-radius: 20px"
          data-aos="fade-up"
        >
          <v-row>
            <v-col cols="6">
              <div style="padding: 15px">
                <span class="textCard1">
                  Meu nome é Fernando Risso, sou desenvolvedor Full stack web
                  and mobile.</span
                >
                <br />
                <span>
                  Tenho 20 anos e comecei a desenvolver em meados de 2018, hoje
                  trabalho profissionalmente na aréa, possuo conhecimento em
                  Vue.Js, Angular, Node, Express.Js, PostgreSQL, MySQL entre
                  outros.
                </span>
              </div>
            </v-col>
            <v-col cols="6">
              <div
                style="
                  display: flex;
                  justify-content: center;
                  aling-items: center;
                "
              >
                <img
                  style="width: auto; height: 500px"
                  src="conhecimento.png"
                />
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col sm="6" cols="12">
        <v-card
          dark
          width="100%"
          height="500"
          color="#333"
          elevation="0"
          class="cardColor2"
          style="border-radius: 20px"
          data-aos="fade-up"
        >
          <div style="padding: 15px">
            <span class="textCard2">Projetos profissionais</span><br />
            <span
              >Hoje atuo profissionalmente em uma empresa chamada SaaSTec Labs.
              Onde atuo diretamente na área de inovações durante esse periodo
              participei diretamente da criação e do deploy das seguintes
              aplicações:</span
            >
          </div>
        </v-card>
      </v-col>
      <v-col sm="6" cols="12">
        <v-card
          dark
          width="100%"
          height="500"
          color="#333"
          elevation="0"
          class="cardColor3"
          style="border-radius: 20px"
          data-aos="fade-up"
        >
          <div style="padding: 15px">
            <span class="textCard2">Projetos profissionais</span><br />
            <span
              >Durante os anos venho fazendo projetos pessoais como uma forma de
              estudar, para acompanhar alguns dos meus projetos me siga no
              GitHub</span
            >
          </div>
        </v-card>
      </v-col>
      <v-col sm="4" cols="12">
        <v-card
          dark
          width="100%"
          height="500"
          color="#333"
          elevation="0"
          class="cardColor4"
          style="border-radius: 20px"
          data-aos="fade-up"
        >
          <v-card-title>Sobre mim</v-card-title>
        </v-card>
      </v-col>
      <v-col sm="4" cols="12">
        <v-card
          dark
          width="100%"
          height="500"
          color="#333"
          elevation="0"
          class="cardColor5"
          style="border-radius: 20px"
          data-aos="fade-up"
        >
          <v-card-title>Sobre mim</v-card-title>
        </v-card>
      </v-col>
      <v-col sm="4" cols="12">
        <v-card
          dark
          width="100%"
          height="500"
          color="#333"
          elevation="0"
          class="cardColor6"
          style="border-radius: 20px"
          data-aos="fade-up"
        >
          <v-card-title>Sobre mim</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => {
    return {};
  },
  mounted() {
    import("aos").then((AOS) => AOS.init());
  },
};
</script>

<style>
body {
  background: #000;
}
.cardColor {
  background: linear-gradient(
    to right top,
    #604c7c 0%,
    #257983 50%,
    #20825a 100%
  );
}
.textCard1 {
  font-size: 45px;
  font-weight: 700;
  color: #8ef7ff;
  text-align: start;
  word-break: break-word;
}
.cardColor2 {
  background: linear-gradient(to right, #dc2424, #ff512f);
}
.textCard2 {
  font-size: 45px;
  font-weight: 700;
  color: #ffc6bc;
  text-align: start;
  word-break: break-word;
}
.cardColor3 {
  background: linear-gradient(to right, #ff512f, #dc2424);
}
.cardColor4 {
  background: linear-gradient(to right, #7474bf, #348ac7);
}
.cardColor5 {
  background: linear-gradient(to right, #d31027, #ea384d);
}
.cardColor6 {
  background: linear-gradient(to right, #141e30, #243b55);
}
</style>