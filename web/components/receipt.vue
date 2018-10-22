<template lang="html">
  <div class="uk-inline">
    <vk-icon icon="file" v-if="processed.length === 0"></vk-icon>
    <vk-icon icon="file-edit" v-else></vk-icon>
    <vk-drop boundary="actions" position="bottom-right">
      <vk-card class="uk-border-rounded">
        <ol class="uk-list uk-list-divider" v-if="processed.length
          !== 0">
          <li v-for="(receipt, index) in processed">
            <a class="uk-link-muted uk-inline" :href="receipt.url" target="_blank">{{index+1}}
              <vk-icon icon="file"></vk-icon></a></li>
        </ol>
        <span class="uk-text-meta" v-else>No receipts for expense</span>
        <div class="uk-inline uk-margin-top upload" uk-form-custom>
          <vk-button type="text" tabindex="-1"><vk-icon
                icon="upload" class="uk-margin-right upload-btn"></vk-icon>Upload receipts</vk-button>
          <input type="file" id="receipt"
            @change.stop.prevent="$emit('upload:receipt', $event)"
            ref="receipt">
        </div>
      </vk-card>
    </vk-drop>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'Receipt',
  props: {
    receipts: {
      type: Array,
      required: true,
      default: []
    },
  },
  computed: {
    processed: function () {
      const api = this.$store.app.context.env.api
      return this.receipts.map(receipt => {
          return { url: `${api}${receipt.url}`}
        })
    }
  }
}
</script>
<style scoped>
.upload {
  position: relative;
  overflow: hidden;
}

.upload input[type=file] {
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}
</style>
