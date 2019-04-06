<template>
  <section>
    <div>
      <h1>Products</h1>
      <div v-show="products">
        <h3>Products</h3>
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
    "products": *[_type == "product"]
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
