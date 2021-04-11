<template>
  <p>{{text}}</p>
</template>

<script>
export default {
  name: 'ListInfo',
  props: {
    text: String,
  },
};
</script>

<style scoped lang="scss">
p {
  color: #181818;
  font-size: 1.5rem;
  font-weight: 900;
  line-height: 1.875rem;
  letter-spacing: 0.095rem;
  margin-bottom: 0.687vh;
}
</style>
