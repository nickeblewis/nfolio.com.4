<template>
  <!-- prettier-ignore -->
  <section class="container container-padding">
    <div>
      <h4 class="is-size-4 has-text-centered is-uppercase has-text-weight-bold">Contact</h4>
      <div class="sc-htpNat QGUha"></div>
      <p>
        Thanks for dropping by our website, if you have any enquiries, please drop us a line and
        Nick will get back to you as soon as he can. Provide as much information as you can, as that
        helps us handle your request more quickly. Many thanks!
      </p>
      <form name="contact" method="POST" data-netlify="true">
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text" name="name" placeholder="Your full name">
          </div>
        </div>

        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input class="input" type="text" name="email" placeholder="Email address">
          </div>
        </div>

        <div class="field">
          <label class="label">Message</label>
          <div class="control">
            <textarea
              class="textarea"
              name="message"
              placeholder="Please let us know how we can help you"
            ></textarea>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link">Submit</button>
          </div>
          <div class="control">
            <button class="button is-text">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    track() {
      this.$ga.page("/contact")
    }
  }
}
</script>

<style scoped>
.container-padding {
  padding: 12px;
}
.vendors {
  display: grid;
  margin: 0;
  padding: 0;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4em;
  margin-top: 4em;
}

.vendor {
  display: block;
  margin: 0;
  padding: 0;
}

.meta {
  padding-top: 1rem;
  text-align: center;
}

.link {
  text-decoration: none;
  display: subgrid;
  grid-template-rows: 3fr 1fr;
}

.vendorTitle {
  font-size: 1.5em;
}

.image {
  display: block;
  max-height: 5em;
  max-width: 10em;
  margin: 0 auto;
}
</style>
