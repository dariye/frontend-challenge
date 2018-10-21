<template lang="html">
  <div class="uk-width-auto" ref="user">
    <div class="user">
      <div class="uk-border-circle uk-inline" width="29">
        <vk-icon icon="user" reset></vk-icon>
      </div>
      <span class="uk-text-meta uk-inline uk-text-middle"
        >{{data.first}}</span>
    </div>
    <vk-drop boundary="user">
      <vk-card class="uk-border-rounded">
        <p class="uk-text-meta">{{data.first}} {{data.last}}</p>
        <a class="uk-text-meta"
            :href="`mailto:${data.email}?subject=expense&body=expense`">
          {{data.email}}</a>
      </vk-card>
    </vk-drop>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'User',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>
<style scoped>
</style>
