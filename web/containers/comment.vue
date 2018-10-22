<template lang="html">
  <div class="uk-inline">
    <comment :comment.sync="comment"></comment>
  </div>
</template>
<script type="text/javascript">
import debounce from 'lodash.debounce'
import comment from '~/components/comment'

export default {
  name: 'CommentContainer',
  props: {
    id: {
      type: String,
      required: true
    },
    data: {
      type: String,
      required: true,
      default: ''
    }
  },
  data: function () {
    return {
      comment: this.data
    }
  },
  watch: {
    comment: debounce(function (val, oldVal) {
      if (val !== oldVal && val !== null) {
        this.$store.dispatch('expense/postComment', { id: this.id, comment: val })
      }
    }, 500)
  },
  components: {
    comment
  }
}
</script>
<style scoped>
</style>
