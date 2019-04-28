<template>
  <!-- prettier-ignore -->
  <div class="root">
    <div class="container">
      <div class="civocy is-fixed-top">
        <div class="columns is-fixed-top">
          <div class="column is-hidden-mobile">
            <section class="level socialIcons">
              <div class="level-item">
                <a
                  to="https://www.facebook.com/nfoliophoto"
                  target="_blank"
                  href="https://www.facebook.com/nfoliophoto"
                >
                  <svg
                    class="svg-inline--fa fa-facebook-square fa-w-14"
                    aria-hidden="true"
                    data-prefix="fab"
                    data-icon="facebook-square"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    data-fa-i2svg
                  >
                    <path
                      fill="currentColor"
                      d="M448 80v352c0 26.5-21.5 48-48 48h-85.3V302.8h60.6l8.7-67.6h-69.3V192c0-19.6 5.4-32.9 33.5-32.9H384V98.7c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9H184v67.6h60.9V480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z"
                    ></path>
                  </svg>
                  <!-- <i class="fab fa-facebook-square"></i> -->
                </a>
              </div>
              <div class="level-item">
                <a
                  to="https://twitter.com/nfoliophoto"
                  target="_blank"
                  href="https://twitter.com/nfoliophoto"
                >
                  <svg
                    class="svg-inline--fa fa-twitter-square fa-w-14"
                    aria-hidden="true"
                    data-prefix="fab"
                    data-icon="twitter-square"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    data-fa-i2svg
                  >
                    <path
                      fill="currentColor"
                      d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"
                    ></path>
                  </svg>
                  <!-- <i class="fab fa-twitter-square"></i> -->
                </a>
              </div>
              <div class="level-item">
                <a
                  to="https://www.instagram.com/nfoliophoto/"
                  target="_blank"
                  href="https://www.instagram.com/nfoliophoto/"
                >
                  <svg
                    class="svg-inline--fa fa-instagram fa-w-14"
                    aria-hidden="true"
                    data-prefix="fab"
                    data-icon="instagram"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    data-fa-i2svg
                  >
                    <path
                      fill="currentColor"
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    ></path>
                  </svg>
                  <!-- <i class="fab fa-instagram"></i> -->
                </a>
              </div>
            </section>
          </div>
          <div class="column has-text-centered">
            <a href="/">
              <img src="/nfolio.png" alt="Nfolio logo">
            </a>
          </div>
          <!-- prettier-ignore -->
          <div class="column has-text-right has-text-weight-semibold is-hidden-mobile">
            <p>
              <a
                to="mailto:nick.lewis@nfolio.com"
                href="mailto:nick.lewis@nfolio.com"
              >nick.lewis@nfolio.com</a>
              |
              <a
                to="tel:+44 (0)1252 757213"
                href="tel:+44 (0)1252 757213"
              >+44 (0)1252 757213</a>
            </p>

            <div ref="cart" class="cart">
              <a href="#" class="snipcart-checkout">
                <div class="snipcart-summary">
                  🛒
                  <span class="snipcart-total-items"/> items
                  <span class="snipcart-total-price"/>
                </div>
              </a>
            </div>
          </div>
          <!-- prettier-ignore -->
          <div class="column has-text-centered has-text-weight-semibold is-hidden-widescreen">
            <p>
              <a
                to="mailto:nick.lewis@nfolio.com"
                href="mailto:nick.lewis@nfolio.com"
              >nick.lewis@nfolio.com</a>
              |
              <a
                to="tel:+44 (0)1252 757213"
                href="tel:+44 (0)1252 757213"
              >+44 (0)1252 757213</a>
            </p>

            <div ref="cart" class="cart">
              <a href="#" class="snipcart-checkout">
                <div class="snipcart-summary">
                  🛒
                  <span class="snipcart-total-items"/> items
                  <span class="snipcart-total-price"/>
                </div>
              </a>
            </div>
          </div>
        </div>
        <nav
          class="navbar has-background-white-ter is-hidden-mobile"
          role="navigation"
          aria-label="main navigation"
        >
          <div class="navbar-menu is-uppercase has-text-weight-bold">
            <router-link class="navbar-item is-hoverable" :to="'/'">Home</router-link>
            <router-link class="navbar-item is-hoverable" :to="'/category'">Categories</router-link>
            <router-link class="navbar-item is-hoverable" :to="'/vendor'">Photographers</router-link>
            <router-link class="navbar-item is-hoverable" :to="'/contact'">Contact</router-link>
            <!--<a class="navbar-item" href="/coupons">Coupons</a>
          <a class="navbar-item" href="/blog">Blog</a>
          <a class="navbar-item" href="/page/about">About</a>
            <a class="navbar-item" href="/contact">Contact</a>-->
          </div>
        </nav>
      </div>
      <div class="columns dIlvFm">
        <div class="column is-one-fifth is-hidden-mobile">
          <aside class="menu">
            <h4 class="is-size-4 has-text-centered is-uppercase has-text-weight-bold">Categories</h4>
            <div class="sc-htpNat QGUha"></div>
            <ul class="menu-list is-centered">
              <li
                v-for="category in this.$store.state.globalData.categoryTree"
                :key="category._id"
                class="menu-label"
              >
                <router-link :to="'/category/' + category.slug.current">
                  {{
                  category.title
                  }}
                </router-link>
                <ul v-if="category.children" class="sub-categories">
                  <li
                    v-for="subCategory in category.children"
                    :key="category._id + subCategory._id"
                  >
                    <router-link
                      :to="'/category/' + subCategory.slug.current"
                    >{{ subCategory.title }}</router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </aside>
        </div>

        <!-- <section class="container"> -->
        <nuxt/>
        <!-- </section> -->
      </div>
      <!--<section class="section sc-bZQynM iMWVsx">
        <h4
          class="is-size-4 has-text-centered is-uppercase has-text-weight-bold"
        >
          Who we are
        </h4>
        <div class="sc-htpNat QGUha"></div>
        <div class="has-text-centered">
          <p>
            NEW: If you would like to purchase any of the images you see on this
            site as a print, please get in contact with me. We are now able to
            produce our own prints from A4 to A2 in size! We will be setting up
            a proper on-line store in the future but for now I can send you the
            details over via email (old skool I know!!!)
          </p>
        </div>
      </section>-->
    </div>
    <footer class="sc-iwsKbI gApMHF">
      <div class="section container is-hidden-mobile">
        <div class="columns is-multiline">
          <div class="column has-text-white">
            <p class="is-uppercase is-size-5 sc-gZMcBi cttAZQ">Menu</p>
            <ul>
              <li>
                <a class="has-text-white" href="/contact">Contact Us</a>
              </li>
              <!--<li>
                <a class="has-text-white" href="/page/about">About us</a>
              </li>-->
            </ul>
          </div>
          <!-- <div class="column has-text-white">
            <p class="is-uppercase is-size-5 sc-gZMcBi cttAZQ">Subscribe</p>
            <p>Receive updates by signing up to our mailing list</p>
            <form class="sc-htoDjs byAGbu">
              <div class="field">
                <div class="control">
                  <input class="input is-shadowless" name="email" value placeholder="Your email">
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <button type="submit" class="button is-light">Subscribe</button>
                </div>
              </div>
            </form>
          </div>-->
          <!--<div class="column has-text-white">
            <p class="is-uppercase is-size-5 sc-gZMcBi cttAZQ">Social Media</p>
            <section class="level sc-bwzfXH iimpzS">
              <div class="level-item">
                <a
                  to="https://www.facebook.com/nfoliophoto"
                  target="_blank"
                  href="https://www.facebook.com/nfoliophoto"
                >
                  <svg
                    class="svg-inline--fa fa-facebook-square fa-w-14"
                    aria-hidden="true"
                    data-prefix="fab"
                    data-icon="facebook-square"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    data-fa-i2svg
                  >
                    <path
                      fill="currentColor"
                      d="M448 80v352c0 26.5-21.5 48-48 48h-85.3V302.8h60.6l8.7-67.6h-69.3V192c0-19.6 5.4-32.9 33.5-32.9H384V98.7c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9H184v67.6h60.9V480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z"
                    ></path>
                  </svg>
                  
                </a>
              </div>
              <div class="level-item">
                <a
                  to="https://twitter.com/nfoliophoto"
                  target="_blank"
                  href="https://twitter.com/nfoliophoto"
                >
                  <svg
                    class="svg-inline--fa fa-twitter-square fa-w-14"
                    aria-hidden="true"
                    data-prefix="fab"
                    data-icon="twitter-square"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    data-fa-i2svg
                  >
                    <path
                      fill="currentColor"
                      d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"
                    ></path>
                  </svg>
                  
                </a>
              </div>
              <div class="level-item">
                <a
                  to="https://www.instagram.com/nfoliophoto/"
                  target="_blank"
                  href="https://www.instagram.com/nfoliophoto/"
                >
                  <svg
                    class="svg-inline--fa fa-instagram fa-w-14"
                    aria-hidden="true"
                    data-prefix="fab"
                    data-icon="instagram"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    data-fa-i2svg
                  >
                    <path
                      fill="currentColor"
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    ></path>
                  </svg>
                  
                </a>
              </div>
            </section>
          </div>-->
        </div>
      </div>
    </footer>
    <div class="sc-gqjmRU eRrL">
      <div class="section container">
        <div class="columns has-text-white">
          <div class="column">
            <p>
              Copyright © 2019 -
              <!-- -->
              Nfolio
            </p>
          </div>
          <div class="column has-text-right is-hidden-mobile">
            <img src="/images/payment-strip.png" style="height:26px" alt="payments cards">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
  // components: {
  //   Logo
  // },
  mounted() {
    if (!window.Snipcart) {
      throw new Error(
        'Snipcart not found. Make sure snipcart is loaded on page. For more info, see https://docs.snipcart.com/getting-started/installation'
      )
    }
    const cart = this.$refs.cart
    let timeoutId
    window.Snipcart.subscribe('item.adding', () => {
      cart.classList.add('pop')
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        cart.classList.remove('pop')
      }, 220)
    })
  }
}
</script>

<style>
body {
  font-family: 'Muli', sans-serif !important;

  color: #4a4a4a;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
}
.socialIcons {
  width: 120px;
  min-height: 26px;
}

.socialIcons svg {
  color: #000000;
  font-size: 1.5rem;
}

.civocy {
  margin-top: 0.6rem;
}

.civocy .navbar-menu {
  -webkit-box-flex: unset;
  flex-grow: unset;
  margin: 0px auto;
}
.civocy a {
  color: rgb(74, 74, 74);
}
.iTQJPW {
  color: rgb(255, 255, 255);
  margin-top: 1rem;
  font-size: 1.2rem;
  width: 80px;
  float: right;
  position: relative;
}
.iTQJPW span {
  font-weight: 700;
  padding: 0px 0.1rem 0px 0.5rem;
}
.iTQJPW a {
  color: rgb(74, 74, 74) !important;
}

.kVItf {
  color: black;
}

.QGUha {
  height: 3px;
  width: 50px;
  background-color: rgb(239, 69, 102);
  margin: 0.6rem auto 3rem;
}

.dIlvFm {
  margin-top: 3rem;
}

.svg-inline--fa.fa-w-18 {
  width: 1.125em;
}
.svg-inline--fa {
  display: inline-block;
  font-size: inherit;
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.gApMHF {
  padding-bottom: 80px;
  background-color: rgb(47, 47, 47);
  position: relative;
  margin-top: 6rem;
}
.SRsjn {
  position: absolute;
  float: right;
  bottom: 8rem;
  right: 2rem;
}

.eRrL {
  background-color: rgb(0, 0, 0);
  width: 100%;
  bottom: 0px;
}
.eRrL > .section {
  padding: 1.4rem 1.5rem;
}
.iimpzS svg {
  color: rgb(255, 255, 255);
  font-size: 1.6rem;
}

.iimpzS .level-item {
  margin-right: 0.3rem;
}
.iimpzS .level-item a {
  padding: 0px !important;
}
.cttAZQ {
  margin-bottom: 1rem;
}
.category .nuxt-link-active {
  font-weight: 700;
}
</style>
