<template>
  <section>
      <div v-for="item in data" :key="item.id" >
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
  data() {
    return {
      data: [
        {
          id: 1,
          title: 'Displacement',
          info: '803cc',
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
    };
  },
};
</script>
