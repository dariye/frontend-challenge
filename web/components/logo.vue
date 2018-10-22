<template>
  <a class="uk-logo" href="https://pleo.io" v-bind:style="styleObject" v-once>
    <svg xmlns="http://www.w3.org/2000/svg" width="151" height="63">
      <title>
        Pleo.io Logo
      </title>
      <desc>
        We make doing expenses a thing of the past.
      </desc>
      <g>
        <path d="M8.1 44.2c3.3 2.9 7.6 4.7 12.4 4.7 10.3 0 18.7-8.4 18.7-18.7 0-10.3-8.4-18.7-18.7-18.7-10.3 0-18.7 8.5-18.7 18.8v32.5M149.5 30.3c0 10.3-8.4 18.7-18.7 18.7-10.3 0-18.7-8.4-18.7-18.7 0-10.3 8.4-18.7 18.7-18.7 10.3 0 18.7 8.4 18.7 18.7zM99.2 40.9c-3.4 4.8-9 8-15.3 8-10.3 0-18.7-8.4-18.7-18.7 0-10.3 8.4-18.7 18.7-18.7 10.3 0 18.7 8.4 18.7 18.7H78.9M51.3.6v39s-.2 7.9 7.7 9.4"/>
      </g>
    </svg>
  </a>
</template>
<script>
export default {
  name: 'Logo',
  props: {
    color: {
      type: String,
      required: true,
      default: '#D90378'
    },
    size: {
      type: String,
      required: true,
      default: '9.3125'
    },
    type: {
      type: String,
      required: true,
      default: 'default'
    }
  },
  computed: {
    styleObject: function () {
      return {
        color: `${this.color};`,
        width: `${this.size}em;`
      }
    }
  }
}
</script>
<style scoped>
svg {
  fill: none;
}
svg g {
  fill: none;
  fill-rule: evenodd;
  stroke: currentColor;
  stroke-width: 3;
}
</style>
