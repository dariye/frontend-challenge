<template lang="html">
  <footer class="uk-section-small">
    <p class="uk-text-small uk-text-center uk-text-muted">Copyright Pleo Inc.
    &copy; {{ year }}</p>
  </footer>
</template>
<script type="text/javascript">
export default {
  name: 'Footer',
  computed: {
    year: function () {
      return new Date().getFullYear()
    }
  }
}
</script>
