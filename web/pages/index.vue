<template lang="html">
  <div>
    <div class="uk-container">
      <h1 class="uk-heading-primary">Your expenses ({{total}})</h1>
    </div>
    <expenses></expenses>
  </div>
</template>
<script type="text/javascript">
import { mapState } from 'vuex'

import expenses from '~/containers/expenses'
export default {
  name: 'IndexPage',
  scrollToTop: true,
  computed: {
    ...mapState('expense', ['total'])
  },
  components: {
    expenses
  }
}
</script>
