<template lang="html">
  <expense>
</template>
<script type="text/javascript">
import user from '~/components/user'
import actions from '~/components/actions'
import expense from '~/components/expense'

export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  components: {
    user,
    actions
  }
}
</script>
