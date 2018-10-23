<template lang="html">
  <div>
    <div class="uk-container">
      <h1 class="uk-heading-primary">Your expenses</h1>
    </div>
    <expenses></expenses>
  </div>
</template>
<script type="text/javascript">
import expenses from '~/containers/expenses'
export default {
  name: 'IndexPage',
  scrollToTop: true,
  components: {
    expenses
  }
}
</script>
