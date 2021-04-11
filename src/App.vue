<template>
<main>
  <img class="menu" src="./assets/icons/menu.svg" alt="menu" />
  <div class="logos">
    <img class="ducati-logo" src="./assets/images/ducati-logo.png" alt="Ducati Logo" />
    <img class="monster-logo" src="./assets/images/monster-logo.png" alt="Monster Logo" />
    <h1>{{this.data[this.current].number}}</h1>
  </div>
  <div class="infos">
    <table-data />
    <colour-selector :activated="current" :colours="getColours" />
    <img src="./assets/images/slogan.png" alt="slogan">
  </div>
  <section class="front-layer">
    <img v-on:click="goNext('left')" src="./assets/icons/arrow-left.svg" alt="Arrow Left" />
    <img
      class="motorcycle"
      :src="this.data[this.current].image"
      alt="Motorcycle"
    />
    <img v-on:click="goNext('right')" src="./assets/icons/arrow-right.svg" alt="Arrow Right" />
  </section>
</main>
</template>

<script>
import ColourSelector from './components/ColourSelector.vue';
import TableData from './components/TableData.vue';

const ducati01 = require('./assets/images/ducati-01.png');
const ducati02 = require('./assets/images/ducati-02.png');
const ducati03 = require('./assets/images/ducati-03.png');

const mockData = [
  {
    id: 0,
    image: ducati01,
    number: 797,
    colour: '#DF1F26',
    specs: [
      {
        id: 1,
        title: 'Displacement',
        info: '803 cc',
      },
      {
        id: 2,
        title: 'Horse Power',
        info: '73 hp (54 kW)',
      },
      {
        id: 3,
        title: 'Torque',
        info: '67 Nm (49.0 lb-ft)',
      },
      {
        id: 4,
        title: 'Dry Weight',
        info: '175 Kg (386 lb)',
      },
      {
        id: 5,
        title: 'Seat Height',
        info: '805 mm (31.69 in)',
      },
      {
        id: 6,
        title: 'Safety',
        info: 'ABS',
      },
    ],
  },
  {
    id: 1,
    image: ducati02,
    number: 821,
    colour: '#141414',
    specs: [
      {
        id: 1,
        title: 'Displacement',
        info: '821 cc',
      },
      {
        id: 2,
        title: 'Horse Power',
        info: '109 hp (80 kW)',
      },
      {
        id: 3,
        title: 'Torque',
        info: '86 Nm (63 lb-ft)',
      },
      {
        id: 4,
        title: 'Dry Weight',
        info: '180.5 Kg (398 lb)',
      },
      {
        id: 5,
        title: 'Seat Height',
        info: '805 mm (31.69 in)',
      },
      {
        id: 6,
        title: 'Safety',
        info: 'ABS',
      },
    ],
  },
  {
    id: 2,
    image: ducati03,
    number: 797,
    colour: '#E4E4E4',
    specs: [
      {
        id: 1,
        title: 'Displacement',
        info: '803 cc',
      },
      {
        id: 2,
        title: 'Horse Power',
        info: '73 hp (54 kW)',
      },
      {
        id: 3,
        title: 'Torque',
        info: '67 Nm (49.0 lb-ft)',
      },
      {
        id: 4,
        title: 'Dry Weight',
        info: '175 Kg (386 lb)',
      },
      {
        id: 5,
        title: 'Seat Height',
        info: '805 mm (31.69 in)',
      },
      {
        id: 6,
        title: 'Safety',
        info: 'ABS',
      },
    ],
  },
];

export default {
  components: {
    ColourSelector,
    TableData,
  },
  name: 'App',
  data() {
    return {
      current: 0,
      data: mockData,
    };
  },
  computed: {
    getColours() {
      const currentColours = [];
      this.data.map((element) => {
        const { id, colour } = element;
        currentColours.push({ id, colour });
        return null;
      });
      return currentColours;
    },
  },
  methods: {
    goNext(direction) {
      if (direction === 'left' && this.current > 0) {
        this.current -= 1;
      } else if (direction === 'right' && this.current < this.data.length - 1) {
        this.current += 1;
      }
    },
  },
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
      max-height: 9.75vh;
      max-width: 6.87vw;
    }

    img.monster-logo {
      margin-top: 3.75vh;
      max-height: 1.66vh;
      max-width: 20.1vw;
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

  section.front-layer {
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 100vh;
    justify-content: space-between;
    padding: 0 10vw;
    position: absolute;
    width: 100vw;

    img {
      cursor: pointer;
      max-height: 5.8vh;
      max-width: 4.37vw;

      &:first-child, &:last-child {
        margin-bottom: 1.58vh;
      }
    }

    img.motorcycle {
      margin-bottom: 4vh;
      max-height: 54.1vh;
      max-width: 65.6vw;
    }
  }
}
</style>
