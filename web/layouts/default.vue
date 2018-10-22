<template>
  <div class="wrapper">
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
<style>
body {
  background: #F0F4F6 !important;
}
.wrapper {
  padding: 0;
  margin: 0 auto;
  max-width: 800px;
}
</style>
