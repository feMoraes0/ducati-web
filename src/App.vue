<template>
<main>
  <img class="menu" src="./assets/icons/menu.svg" alt="menu" />
  <div class="logos">
    <img class="ducati-logo" src="./assets/images/ducati-logo.png" alt="Ducati Logo" />
    <img class="monster-logo" src="./assets/images/monster-logo.png" alt="Monster Logo" />
    <h1>797</h1>
  </div>
  <div class="infos">
    <table-data />
    <colour-selector />
    <img src="./assets/images/slogan.png" alt="slogan">
  </div>
</main>
</template>

<script>
import ColourSelector from './components/ColourSelector.vue';
import TableData from './components/TableData.vue';

export default {
  components: {
    ColourSelector,
    TableData,
  },
  name: 'App',
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;900&display=swap');

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Lato", sans-serif;
}

main {
  align-items: center;
  background: url("./assets/images/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 100vw;

  img.menu {
    left: 9.875vw;
    position: absolute;
    top: 5.41vh;
  }

  div.logos {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    img.ducati-logo {
      margin-top: 5.08vh;
    }

    img.monster-logo {
      margin-top: 3.75vh;
    }

    h1 {
      color: white;
      font-size: 12.5rem;
      line-height: 15rem;
      font-weight: 900;
    }
  }

  div.infos {
    align-items: flex-end;
    background-color: white;
    border-radius: 50px;
    box-shadow: 0px 40px 30px rgba(60, 49, 13, 0.15);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 7.33vh;
    padding: 3.66vh 5.31vw 5.75vh 5vh;
    width: 90vw;
  }
}
</style>
