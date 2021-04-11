<template>
  <section>
    <img v-on:click="goNext('left')" src="../assets/icons/arrow-left.svg" alt="Arrow Left" />
    <img
      class="motorcycle"
      :src="image"
      alt="Motorcycle"
    />
    <img v-on:click="goNext('right')" src="../assets/icons/arrow-right.svg" alt="Arrow Right" />
  </section>
</template>

<script>
export default {
  name: 'FrontLayer',
  props: {
    image: String,
  },
  methods: {
    goNext(direction) {
      this.$emit('goNext', direction);
    },
  },
};
</script>

<style scoped lang="scss">
  section {
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 65.6vh;
    justify-content: space-between;
    margin-top: 17vh;
    padding: 0 10vw;
    position: absolute;
    width: 100vw;

    img {
      max-height: 5.8vh;
      max-width: 4.37vw;

      &:first-child, &:last-child {
        cursor: pointer;
        margin-bottom: 1.58vh;
      }
    }

    img.motorcycle {
      margin-bottom: 4vh;
      max-height: 54.1vh;
      max-width: 65.6vw;
    }
  }
</style>
