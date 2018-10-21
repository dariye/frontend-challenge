<template lang="html">
  <div class="uk-inline">
    <vk-icon icon="comment" reset v-if="data.length == 0"></vk-icon>
    <vk-icon icon="comments" reset v-else></vk-icon>
    <vk-drop boundary="actions" position="bottom-right">
      <vk-card class="uk-border-rounded">
        <form class="uk-margin uk-comment uk-form-horizontal">
          <textarea class="uk-textarea uk-child-width-auto uk-form-blank" rows="5"
                                                                          v-model="data"
                  placeholder="Enter a comment for this expense"
                  type="textarea" tabindex="-1"></textarea>
        </form>
      </vk-card>
    </vk-drop>
  </div>
</template>
<script type="text/javascript">
export default {
  props: {
    data: {
      type: String,
      required: true,
      default: ''
    },
  },
}
</script>
<style scoped>
</style>
