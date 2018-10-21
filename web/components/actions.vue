<template lang="html">
  <div class="uk-width-auto" ref="actions">
    <comment-container :id="id" :data="comment" />
    <receipt :data="receipts" />
  </div>
</template>
<script type="text/javascript">
import commentContainer from '~/containers/comment-container'
import receipt from '~/components/receipt'

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
    commentContainer,
    receipt
  }
}
</script>
<style scoped>
</style>
