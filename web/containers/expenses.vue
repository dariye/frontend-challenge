<template lang="html">
  <div class="uk-section">
    <vk-sticky>
      <div class="uk-container">
        <search />
        <control />
      </div>
    </vk-sticky>
    <div class="uk-section">
      <div class="uk-container uk-margin-medium-left">
        <div v-for="expense in filtered">
          <expense :data="expense" :key="expense.id"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import { mapState, mapGetters, mapActions } from 'vuex'

import search from '~/components/search'
import control from '~/components/control'
import expense from '~/components/expense'

export default {
  name: 'Expenses',
  components: {
    search,
    control,
    expense
  },
  data: function () {
    return {
      query: null,
      range: null,
      sortBy: 'date',
      orderBy: 'asc',
      sorted: false
    }
  },
  computed: {
    ...mapState('expense', ['total']),
    ...mapGetters('expense', ['expenses', 'pages', 'current']),
    filtered: function () {
      return this.expenses
    }
  }
}
</script>
<style scoped>
.uk-sticky-fixed {
  background: #F0F4F6;
  width: 100% !important;
}
</style>
