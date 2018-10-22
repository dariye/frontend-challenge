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
<style scoped>
body, .wrapper {
  background: #F0F4F6;
}
.wrapper {
  padding: 0;
  margin: 0;
}
</style>
