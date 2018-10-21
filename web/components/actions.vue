<template lang="html">
  <div class="uk-width-auto" ref="actions">
    <comment :data="comment" />
    <receipt :data="receipts" />
  </div>
</template>
<script type="text/javascript">
import comment from '~/components/comment'
import receipt from '~/components/receipt'

export default {
  name: 'Actions',
  props: {
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
