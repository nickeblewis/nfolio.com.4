<template>
  <section :key="product._id" class="column">
    <h4 class="is-size-4 has-text-centered is-uppercase has-text-weight-bold">
      {{ product.title }}
    </h4>
    <div class="sc-htpNat QGUha"></div>
    <ImageViewer
      :images="product.defaultProductVariant.images"
      class="image-viewer"
    />

    <div class="columns">
      <div class="column">
        <p v-if="product.blurb" class="blurb">{{ product.blurb }}</p>
        <div class="body" v-html="bodyHtml" />
      </div>
      <div class="sidebar column">
        <div class="sub-head">
          <div class="price-and-button">
            <button
              :data-item-name="product.title"
              data-item-price="40.00"
              :data-item-id="'01A4' + product.defaultProductVariant.sku"
              type="button"
              class="snipcart-add-item"
              :data-item-url="generateUrl"
            >
              Add to cart
            </button>
            <div class="price">A4 / £40</div>
          </div>
          <div class="price-and-button">
            <button
              :data-item-name="product.title"
              data-item-price="50.00"
              :data-item-id="'01A3' + product.defaultProductVariant.sku"
              type="button"
              class="snipcart-add-item"
              :data-item-url="generateUrl"
            >
              Add to cart
            </button>
            <div class="price">A3 / £50</div>
          </div>
          <div class="price-and-button">
            <button
              :data-item-name="product.title"
              data-item-price="65.00"
              :data-item-id="'01A2' + product.defaultProductVariant.sku"
              type="button"
              class="snipcart-add-item"
              :data-item-url="generateUrl"
            >
              Add to cart
            </button>
            <div class="price">A2 / £65</div>
          </div>
        </div>
        <div>
          All prints are produced on high quality acid-free photographic paper
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import sanity from '~/sanity.js'
import localize from '~/utils/localize'
import blocksToHtml from '@sanity/block-content-to-html'
import ImageViewer from '~/components/ImageViewer'
import numeral from 'numeral'

const query = `
  *[_type == "product" && slug.current == $product][0] {
    ...,
    categories[]->,
    vendor->
  }
`

export default {
  components: {
    // SanityImage,
    ImageViewer
  },
  data: function() {
    return {
      blurb: 'No blurb text to show',
      body: false
    }
  },
  computed: {
    productSKU: function(prefix) {
      return prefix + this.product._id
    },
    generateUrl: function() {
      return 'https://nfolio.com/product/' + this.product.slug.current
    },
    formattedPrice: function() {
      return numeral(this.product.defaultProductVariant.price).format('$0.00')
    },
    bodyHtml: function() {
      if (!this.product || !this.product.body) {
        return '…'
      }
      return blocksToHtml({
        blocks: this.product.body,
        dataset: sanity.clientConfig.dataset,
        projectId: sanity.clientConfig.projectId
      })
    }
  },
  asyncData(context) {
    return sanity
      .fetch(query, context.route.params)
      .then(data => ({ product: localize(data) }))
  }
}
</script>

<style scoped>
.price {
  line-height: 1.5em;
}

@media only screen and (min-width: 500px) {
  .container {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
  }
}

@media only screen and (max-width: 1000px) {
  .container {
    flex-direction: column;
  }
  .sidebar {
    display: flex;
  }
}

@media only screen and (min-width: 500px) {
  .price {
    display: block;
    font-size: 2em;
    margin-right: 2rem;
  }

  .snipcart-add-item {
    font-size: 2em;
  }

  .image-viewer {
    min-width: 60vw;
    max-width: 60rem;
    align-content: center;
  }

  .sidebar {
    margin: 1em 0;
  }
}

.blurb {
  font-size: 1.5em;
  margin: 1em 0;
}

.price-and-button {
  display: flex;
  align-items: center;
}

.categories {
  margin: 0;
  display: flex;
  align-items: center;
  padding: 0;
}

.categories :global(li) {
  display: block;
  margin-right: 0.5em;
  padding: 0;
  font-weight: 600;
}

.categories :global(a) {
  text-decoration: none;
  display: block;
  padding: 1em 0;
}

.categories :global(img) {
  display: block;
}

.snipcart-add-item {
  border: none;
  color: #fff;
  background-color: rgb(73, 219, 129);
  border: 2px solid #000;
  padding: 0.5em;
  font-size: 1.2em;
  margin-right: 1em;
  outline: none;
}

.snipcart-add-item:active {
  background-color: #000;
  color: #fff;
}

.links {
  padding-top: 15px;
}

.vendor {
  display: inline-block;
}

.vendorLogo {
  display: inline-block;
  margin: 0 auto;
  max-height: 1.5em;
  max-width: 8em;
}

.body {
  margin: 1em 0;
  font-size: 1em;
  line-height: 1.3em;
  max-width: 40em;
}
</style>
