<template>
  <section>
    <img v-on:click="goNext('left')" src="../assets/icons/arrow-left.svg" alt="Arrow Left" />
    <transition name="fade" @after-leave="afterLeaveControlAnimation">
      <img
        v-if="hasChanged"
        class="motorcycle"
        :src="image"
        alt="Motorcycle"
      />
    </transition>
    <img v-on:click="goNext('right')" src="../assets/icons/arrow-right.svg" alt="Arrow Right" />
  </section>
</template>

<script>
export default {
  name: 'FrontLayer',
  data() {
    return {
      hasChanged: true,
    };
  },
  props: {
    image: String,
  },
  watch: {
    image() {
      this.hasChanged = !this.hasChanged;
    },
  },
  methods: {
    goNext(direction) {
      this.$emit('goNext', direction);
    },
    afterLeaveControlAnimation() {
      this.hasChanged = !this.hasChanged;
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

    .fade-enter-to {
      transform: translateX(0);
      transition-property: transform;
      transition-duration: 0.25s;
      transition-timing-function: ease-in;
    }
    .fade-enter-from {
      transform: translateX(-140vh);
      transition-property: transform;
      transition-duration: 0.25s;
      transition-timing-function: ease-out;
    }
    .fade-leave-from {
      transform: translateX(0vh);
      transition-property: transform;
      transition-duration: 0.25s;
      transition-timing-function: ease-in;
    }
    .fade-leave-to {
      transform: translateX(140vh);
      transition-property: transform;
      transition-duration: 0.25s;
      transition-timing-function: ease-out;
    }

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
