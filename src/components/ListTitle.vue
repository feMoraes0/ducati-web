<template>
  <p>{{title}}</p>
</template>

<script>
export default {
  name: 'ListTitle',
  props: {
    title: String,
  },
};
</script>

<style lang="scss">
p {
  color: #181818;
  font-size: 0.75rem;
  font-weight: 300;
  line-height: 0.875rem;
}
</style>
