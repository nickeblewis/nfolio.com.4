<template>
  <!-- <section>
    <div>
      <h1 class="title">
        Categories
      </h1>
      <ul class="categories">
        <li
          v-for="category in this.$store.state.globalData.categories"
          :key="category._id"
        >
          <router-link
            v-if="category.slug"
            :to="'/category/' + category.slug.current"
          >
            {{ category.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </section>-->
  <section class="container">
    <h4 class="is-size-4 has-text-centered is-uppercase has-text-weight-bold">
      Categories
    </h4>
    <div class="sc-htpNat QGUha"></div>

    <ul class="categories columns is-multiline">
      <li
        v-for="category in this.$store.state.globalData.categories"
        :key="category._id"
        class="column is-one-quarter"
      >
        <router-link
          v-if="category.slug"
          :to="'/category/' + category.slug.current"
          >{{ category.title }}</router-link
        >
      </li>
    </ul>
  </section>
</template>

<style scoped>
a {
  padding: 1em;
  display: block;
  font-size: 1em;
  text-decoration: none;
  text-align: center;
}

@media only screen and (min-width: 500px) {
  ul {
    grid-template-columns: repeat(3, 1fr);
  }

  a {
    font-size: 2em;
  }
}
</style>
