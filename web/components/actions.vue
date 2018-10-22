<template lang="html">
  <div class="uk-width-auto" ref="actions">
    <comment :id="id" :data="comment" />
    <receipt :id="id" :data="receipts" />
  </div>
</template>
<script type="text/javascript">
import comment from '~/containers/comment'
import receipt from '~/containers/receipt'

export default {
  name: 'Actions',
  props: {
    id: {
      type: String,
      required: true
    },
    comment: {
      type: String,
      required: true,
      default: ''
    },
    receipts: {
      type: Array,
      required: true,
      default: []
    }
  },
  components: {
    comment,
    receipt
  }
}
</script>
<style scoped>
</style>
