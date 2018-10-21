<template>
  <div class="uk-container">
    <h1 class="uk-heading-primary uk-margin-medium-left">Your expenses ({{total}})</h1>
    <expenses />
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
