<template>
  <main>
    <img class="menu" src="./assets/icons/menu.svg" alt="menu" />
    <Header :number="this.data[this.current].number" />
    <div class="infos">
      <table-data :infos="this.data[this.current].specs" />
      <colour-selector :activated="current" :colours="getColours" @selectByColour="goTo" />
      <img src="./assets/images/slogan.png" alt="slogan">
    </div>
    <front-layer :image="this.data[this.current].image" @goNext="goNext" />
  </main>
</template>

<script>
import ColourSelector from './components/ColourSelector.vue';
import TableData from './components/TableData.vue';
import Header from './components/Header.vue';
import FrontLayer from './components/FrontLayer.vue';

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
    Header,
    TableData,
    FrontLayer,
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

    goTo(id) {
      if (id >= 0 && id < this.data.length) {
        this.current = id;
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
