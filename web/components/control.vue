<template lang="html">
  <div class="controls">
    <hr />
    <div class="uk-container uk-margin-medium-left">
      <div class="uk-inline" ref="range">
        <vk-button class="uk-float-left uk-text-uppercase
          uk-text-muted uk-border-rounded control">
          <vk-icon icon="calendar" reset></vk-icon>
        </vk-button>
        <vk-drop boundary="range">
          <vk-card class="uk-border-rounded">
            <date-picker
              @selected="onDateSelected"
              i18n="EN"
              compact="true"
              ></date-picker>
          </vk-card>
        </vk-drop>
      </div>
      <div class="uk-inline" ref="filterby">
        <vk-button class="uk-float-left uk-text-uppercase
          uk-text-muted uk-border-rounded control">Date</vk-button>
        <vk-drop boundary="filterby">
          <vk-card class="uk-border-rounded">
            <ul class="uk-list uk-list-divider">
              <li><vk-button type="text">Date</vk-button></li>
              <li><vk-button type="text">Value</vk-button></li>
            </ul>
          </vk-card>
        </vk-drop>
      </div>
      <div class="uk-inline" ref="orderby">
        <vk-button class="uk-float-left uk-text-uppercase uk-text-muted
          uk-border-rounded control">Ascending</vk-button>
        <vk-drop boundary="orderby">
          <vk-card class="uk-border-rounded">
            <ul class="uk-list uk-list-divider">
              <li><vk-button type="text">Ascending</vk-button></li>
              <li><vk-button type="text">Descending</vk-button></li>
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
  data: function () {
    return {
      selectedDate: {
        start: '',
        end: ''
      },
      datePickerConfig: {
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'],
        compact: true
      }
    }
  },
  methods: {
    onDateSelected: function (daterange) {
      this.selectedDate = daterange
    }
  }
}
</script>
<style scoped>
.control {
  background: #fff;
}
</style>
