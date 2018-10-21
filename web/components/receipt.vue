<template lang="html">
  <div class="uk-inline">
    <vk-icon icon="file" v-if="data.length === 0"></vk-icon>
    <vk-icon icon="file-edit" v-else></vk-icon>
    <vk-drop boundary="actions" position="bottom-right">
      <vk-card class="uk-border-rounded">
        <ul class="uk-list uk-list-divider" v-if="data.length
          !== 0">
          <li class="uk-text-meta uk-text-muted" v-for="(receipt, index) in
                                                 data"><a class="uk-link-muted"
                                                                   href="#">{{receipt.name}}</a></li>
        </ul>
        <span class="uk-text-meta" v-else>No receipts for expense</span>
        <div class="uk-inline uk-margin-top js-upload" uk-form-custom>
          <input type="file" multiple id="receipt">
          <vk-button type="text" tabindex="-1"><vk-icon
                icon="upload" class="uk-margin-right"></vk-icon>Upload receipts</vk-button>
        </div>
      </vk-card>
    </vk-drop>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'Receipt',
  props: {
    data: {
      type: Array,
      required: true,
      default: []
    },
  }
}
</script>
<style scoped>
#receipt {
  display: none;
}
</style>
