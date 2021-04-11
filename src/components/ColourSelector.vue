<template>
  <section>
    <div
      v-for="item in colours"
      class="colour-box"
      v-on:click="selectColour(item.id)"
      :key="item.id"
      :class="{ active: (item.id === activated)}"
      :style="{ backgroundColor: item.colour }"
    />
  </section>
</template>

<script>
export default {
  name: 'ColourSelector',
  props: {
    colours: Object,
    activated: Number,
  },
  methods: {
    selectColour(id) {
      console.log(id);
      this.$emit('selectByColour', id);
    },
  },
};
</script>

<style scoped lang="scss">
  section {
    display: flex;
    flex-direction: row;

    .colour-box {
      border-radius: 16px;
      cursor: pointer;
      width: 6.6vh;
      height: 6.6vh;
      margin-left: 4.37vw;

      &:first-child {
        margin-left: 12.93vw;
      }

      &.active {
        filter: drop-shadow(0px 4px 32px rgba(0, 0, 0, 0.6))
      }
    }
  }
</style>
