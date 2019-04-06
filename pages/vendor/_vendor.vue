<template>
  <section class="container">
    <h4 class="is-size-4 has-text-centered is-uppercase has-text-weight-bold">
      {{ title }}
    </h4>
    <div class="sc-htpNat QGUha"></div>

    <div>
      <div class="body blockContent" v-html="bodyHtml" />
      <ProductList v-if="products" :products="products" />
    </div>
  </section>
</template>

<script>
import sanity from '~/sanity.js'
import localize from '~/utils/localize'
import blocksToHtml from '@sanity/block-content-to-html'
import ImageViewer from '~/components/ImageViewer'
import Price from '~/components/Price'
import ProductList from '~/components/ProductList'

const query = `
  *[_type == "vendor" && slug.current == $vendor] {
    _id,
    title,
    logo,
    description,
    "products": *[_type == "product" && references(^._id)]
  }[0]
`

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    ImageViewer,
    // eslint-disable-next-line vue/no-unused-components
    Price,
    ProductList
  },
  asyncData(context) {
    return sanity
      .fetch(query, context.route.params)
      .then(data => ({
        ...data,
        bodyHtml:
          data.description &&
          blocksToHtml({
            blocks: data.description,
            dataset: sanity.clientConfig.dataset,
            projectId: sanity.clientConfig.projectId
          })
      }))
      .then(data => localize(data, ['nb', 'en']))
  }
}
</script>
