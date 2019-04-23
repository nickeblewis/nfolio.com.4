<template>
  <!-- prettier-ignore -->
  <img :src="imageUrl" :alt="alt">
</template>

<script>
import imageUrlBuilder from '@sanity/image-url'
import sanity from '../sanity'
const builder = imageUrlBuilder(sanity)

export default {
  props: {
    image: {
      type: Object,
      required: true
    },
    alt: {
      type: String,
      default: 'Missing caption'
    },
    width: {
      default: 274,
      type: Number
    }
  },
  computed: {
    imageUrl: function() {
      return builder.image(this.image).width(900)
    }
  }
}
</script>
