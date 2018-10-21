<template lang="html">
  <div>

  </div>
</template>
<script type="text/javascript">
import { mapState, mapGetters, mapActions } from 'vuex'

import search from '~/components/search'
import control from '~/components/control'
import expense from '~/components/expense'

export default {
  name: 'CommentContainer',
  props: {
    comment: {
      type: String,
      required: true,
      default: ''
    }
  },
  data: function () {
    return {
      comment: ''
    }
  },
  computed: {
    comment
  }
}
</script>
<style scoped>
.uk-sticky-fixed {
  background: #F0F4F6;
  width: 100% !important;
}
</style>
