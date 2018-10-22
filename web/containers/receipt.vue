<template lang="html">
  <div class="uk-inline">
    <receipt
       :receipts="receipts"
       v-bind:receipt="receipt"
       v-on:upload:receipt="uploadReceipt"
    ></receipt>
  </div>
</template>
<script type="text/javascript">
import debounce from 'lodash.debounce'
import receipt from '~/components/receipt'

export default {
  name: 'ReceiptContainer',
  props: {
    id: {
      type: String,
      required: true
    },
    data: {
      type: Array,
      required: true,
      default: []
    }
  },
  data: function () {
    return {
      receipts: this.data,
      receipt: []
    }
  },
  methods: {
    uploadReceipt: function (event) {
      if (event.target.files.length === 0) return
      this.$store.dispatch('expense/postReceipt', {
        id: this.id,
        receipt: event.target.files[0]
      })
      const api = this.$store.app.context.env.api
      this.receipts.push({
        url: `${api}/receipts/${this.id}-${this.receipts.length}` })
    }
  },
  components: {
    receipt
  }
}
</script>
<style scoped>
</style>
