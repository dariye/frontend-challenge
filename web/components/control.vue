<template lang="html">
  <div class="controls">
    <hr />
    <div class="uk-container">
      <div class="uk-inline" ref="filterby">
        <vk-button class="uk-float-left uk-text-uppercase
        uk-text-muted uk-border-rounded control">{{filterBy}}</vk-button>
        <vk-drop boundary="filterby" animation="slide-top-small">
          <vk-card class="uk-border-rounded">
            <ul class="uk-list uk-list-divider">
              <li><vk-button type="text" v-on:click="$emit('update:type',
              $event.target.textContent)">DATE</vk-button><vk-icon icon="check"
                                                                   v-show="filterBy === 'DATE'"></vk-icon></li>
              <li><vk-button type="text" v-on:click="$emit('update:type',
                  $event.target.textContent)">VALUE</vk-button><vk-icon icon="check"
                                                                        v-show="filterBy === 'VALUE'"></vk-icon></li>
            </ul>
          </vk-card>
        </vk-drop>
      </div>
      <div class="uk-inline" ref="orderby">
        <vk-button class="uk-float-left uk-text-uppercase uk-text-muted
        uk-border-rounded control">{{orderBy}}</vk-button>
        <vk-drop boundary="orderby" anomation="slide-top-small">
          <vk-card class="uk-border-rounded">
            <ul class="uk-list uk-list-divider">
              <li><vk-button type="text" v-on:click="$emit('update:order',
                  $event.target.textContent)">ASCENDING</vk-button><vk-icon icon="check"
                                                                            v-show="orderBy === 'ASCENDING'"></vk-icon></li>
              <li><vk-button type="text" v-on:click="$emit('update:order',
                  $event.target.textContent)">DESCENDING</vk-button><vk-icon icon="check"
                                                                             v-show="orderBy === 'DESCENDING'"></vk-icon></li>
            </ul>
          </vk-card>
        </vk-drop>
      </div>
    </div>
    <hr />
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'Control',
  props: {
    orderBy: {
      type: String,
      required: true,
      default: 'ASCENDING'
    },
    filterBy: {
      type: String,
      required: true,
      default: 'DATE'
    },
  },
  data: function () {
    return {
      type: this.filterBy,
      order: this.orderBy
    }
  }
}
</script>
<style scoped>
.control {
  background: #fff;
}
</style>
