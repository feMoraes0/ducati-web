<template>
  <section>
      <div v-for="item in infos" :key="item.id" >
        <list-title :text="item.title" />
        <list-info :text="item.info" />
      </div>
  </section>
</template>

<script>
import ListTitle from './ListTitle.vue';
import ListInfo from './ListInfo.vue';

export default {
  name: 'TableData',
  components: {
    ListTitle,
    ListInfo,
  },
  props: {
    infos: Object,
  },
};
</script>
