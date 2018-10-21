<template>
  <div class="uk-container">
    <appnavbar />
    <main>
      <nuxt />
    </main>
    <appfooter />
  </div>
</template>
<script>
import appnavbar from '~/components/navbar'
import appfooter from '~/components/footer'

export default {
  components: {
    appnavbar,
    appfooter
  }
}
</script>
<style scoped>
body, .uk-container {
  background: #F0F4F6;
}
</style>
