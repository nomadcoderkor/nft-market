/* eslint-disable global-require */
<template>
  <q-page class="q-pa-sm">
    <div>
      <q-card class="no-border no-shadow bg-transparent">
        <q-card-section class="q-pa-sm">
          <q-input
            v-model="search"
            rounded
            outlined
            placeholder="Search Product"
          >
            <template #append>
              <q-icon
                v-if="search === ''"
                name="search"
              />
              <q-icon
                v-else
                name="clear"
                class="cursor-pointer"
                @click="search = ''"
              />
            </template>
          </q-input>
        </q-card-section>
      </q-card>
    </div>
    <div class="row q-col-gutter-sm ">
      <div
        v-for="item, item_index in data"
        :key="item_index"
        class="col-md-4 col-lg-4 col-sm-12 col-xs-12"
      >
        <card-product :data="item" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent, ref } from 'vue';

const data = [
  {
    title: 'Our Changing Planet',
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rating: 2,
    amount: '$30',
    // eslint-disable-next-line global-require
    img: require('../assets/products/c-d-x-PDX_a_82obo-unsplash.jpg'),
    chip: 'Discount 90%',
    chip_color: 'grey-4',
    chip_class: 'text-blue absolute-top-right',
  },
  {
    title: 'Our Changing Planet',
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rating: 4,
    amount: '$15',
    // eslint-disable-next-line global-require
    img: require('../assets/products/frankie-valentine-VghbBAYqUJ0-unsplash.jpg'),
  },
  {
    title: 'Our Changing Planet',
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rating: 1,
    amount: '$50',
    // eslint-disable-next-line global-require
    img: require('../assets/products/giorgio-trovato-K62u25Jk6vo-unsplash.jpg'),
    chip: 'Sold Out',
    chip_color: 'grey-8',
    chip_class: 'text-white absolute-top-right',
  },
  {
    title: 'Our Changing Planet',
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rating: 5,
    amount: '$70',
    // eslint-disable-next-line global-require
    img: require('../assets/products/jeroen-den-otter-iKmm0okt6Q4-unsplash.jpg'),
    chip: 'Discount 50%',
    chip_color: 'grey-4',
    chip_class: 'text-blue absolute-top-right',
  },
  {
    title: 'Our Changing Planet',
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rating: 2,
    amount: '$50',
    // eslint-disable-next-line global-require
    img: require('../assets/products/john-fornander-m2WpKnlLcEc-unsplash .jpg'),
  },
  {
    title: 'Our Changing Planet',
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rating: 4,
    amount: '$30',
    // eslint-disable-next-line global-require
    img: require('../assets/products/marek-szturc-0iIV1goIodE-unsplash.jpg'),
  },
];

export default defineComponent({
  name: 'ProductCatalogues',
  components: { CardProduct: defineAsyncComponent(() => import('components/cards/CardProduct')) },
  setup() {
    const search = ref('');
    return {
      search,
      data,
    };
  },
});
</script>

<style scoped>

</style>
