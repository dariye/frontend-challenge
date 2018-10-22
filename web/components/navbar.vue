<template lang="html">
  <vk-navbar class="uk-margin-large-bottom" transparent>
    <vk-navbar-nav>
      <div class="uk-container">
        <vk-navbar-logo><logo size="9.125" type="default" color="#D90378"></logo></vk-navbar-logo>
      </div>
    </vk-navbar-nav>
  </vk-navbar>
</template>
<script type="text/javascript">
import logo from '~/components/logo'

export default {
  name: 'Navbar',
  components: {
    logo
  }
}
</script>
<style scoped>
hr, .uk-hr {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}
<style>
