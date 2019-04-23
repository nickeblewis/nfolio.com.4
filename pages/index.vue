<template>
  <section class="container container-padding">
    <div>
      <div v-show="products">
        <h4
          class="is-size-4 has-text-centered is-uppercase has-text-weight-bold"
        >
          Latest Images
        </h4>
        <div class="sc-htpNat QGUha"></div>

        <ProductList :products="products" />
      </div>
    </div>
  </section>
</template>

<script>
import sanity from '~/sanity.js'
import localize from '~/utils/localize'
import ProductList from '~/components/ProductList'

const query = `
  {
    "products": *[_type == "product"] | order(_createdAt desc)[0..11]
  }
`

export default {
  components: {
    ProductList
  },
  asyncData() {
    return sanity.fetch(query).then(data => localize(data, ['en', 'nb']))
  }
}
</script>

<style>
.container-padding {
  padding: 12px;
}
</style>
