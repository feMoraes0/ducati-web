<template>
  <section>
    <div
      v-for="option in options"
      class="colour-box"
      :key="option.id"
      :style="{ backgroundColor: option.colour }"
    />
  </section>
</template>

<script>
export default {
  name: 'ColourSelector',
  data() {
    return {
      options: [
        {
          id: 1,
          colour: '#DF1F26',
        },
        {
          id: 2,
          colour: '#141414',
        },
        {
          id: 3,
          colour: '#E4E4E4',
        },
      ],
    };
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
    }
  }
</style>
