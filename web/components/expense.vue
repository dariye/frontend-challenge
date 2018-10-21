<template lang="html">
  <vk-card class="uk-width-1-1@m uk-border-rounded uk-margin-bottom" hover padding>
    <div slot="header">
      <vk-grid class="uk-flex-between uk-flex-middle">
        <div class="uk-width-auto">
          <div class="uk-badge uk-text-uppercase uk-text-meta
            merchant">{{data.merchant}}</div>
        </div>
        <div class="uk-width-auto">
          <div class="uk-text-meta date">{{data.date}}</div>
        </div>
      </vk-grid>
    </div>
    <div>
      <h2 class="uk-text-lead uk-text-large">{{data.amount.value}}<span
          class="uk-text-top uk-text-meta uk-text-uppercase
          currency">{{data.amount.currency}}</span></h2>
    </div>
    <div slot="footer">
      <vk-grid class="uk-flex-between">
        <user :data="data.user" />
        <actions :id="data.id" :comment="data.comment" :receipts="data.receipts" />
      </vk-grid>
    </div>
  </vk-card>
</template>
<script type="text/javascript">
import user from '~/components/user'
import actions from '~/components/actions'

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
<style scoped>
.merchant, .date {
  font-size: 12px;
  color: #A1A7BE;
}
.currency {
  font-size: 10px;
  color: #A1A7BE;
}
.uk-text-large {
  font-size: 32px;
}
.uk-badge {
  background: transparent;
  color: #A1A7BE;
  border: 1px solid #DBE2EE;
  border-radius: 4px;
}
.uk-card-default .uk-card-header {
  border: none;
}
</style>
