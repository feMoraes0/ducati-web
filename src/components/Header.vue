<template>
  <header class="logos">
    <img class="ducati-logo" src="../assets/images/ducati-logo.png" alt="Ducati Logo" />
    <img class="monster-logo" src="../assets/images/monster-logo.png" alt="Monster Logo" />
    <h1>{{labelAsInt}}</h1>
  </header>
</template>

<script>
import gsap from 'gsap';

export default {
  name: 'Header',
  data() {
    return {
      label: this.number,
    };
  },
  props: {
    number: Number,
  },
  computed: {
    labelAsInt() {
      return this.label.toFixed(0);
    },
  },
  watch: {
    number() {
      // eslint-disable-next-line no-undef
      gsap.to(this.$data, { duration: 0.5, label: this.number });
    },
  },
};
</script>

<style scoped lang="scss">
header {
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
</style>
