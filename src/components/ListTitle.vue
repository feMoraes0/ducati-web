<template>
  <p>{{text}}</p>
</template>

<script>
export default {
  name: 'ListTitle',
  props: {
    text: String,
  },
};
</script>

<style scoped lang="scss">
p {
  color: #181818;
  font-size: 0.75rem;
  font-weight: 300;
  line-height: 0.875rem;
}
</style>
