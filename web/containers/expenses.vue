<template lang="html">
  <div class="uk-section" id="expenses">
    <vk-sticky>
      <div class="uk-container">
        <search :search.sync="search"></search>
        <control
           v-bind:filterBy="filterBy"
           v-on:update:type="filterBy = $event"
           v-bind:orderBy="orderBy"
           v-on:update:order="orderBy = $event"
        ></control>
        <div class="uk-text-meta" v-show="search">Found <span
                                class="uk-text-bold">{{filtered.length}}</span>
                                expenses matching "{{search}}"</div>
      </div>
    </vk-sticky>
    <div class="uk-section">
      <div class="uk-container">
        <div v-for="expense in filtered" v-if="filtered.length !== 0">
          <expense class="uk-animation-toggle" :data="expense" :key="expense.id"></expense>
        </div>
          <mugen-scroll
            scroll-container="'expenses'"
            :handler="fetchExpenses"
            :should-handle="!loading">
              <vk-spinner ratio></vk-spinner>
          </mugen-scroll>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import { mapState, mapGetters, mapActions } from 'vuex'
import fz from 'fuzzaldrin-plus'
import debounce from 'lodash.debounce'
import search from '~/components/search'
import control from '~/components/control'
import expense from '~/components/expense'

export default {
  name: 'Expenses',
  components: {
    search,
    control,
    expense
  },
  data: function () {
    return {
      search: this.query,
      filterBy: this.type,
      orderBy: this.order,
    }
  },
  watch: {
    search: debounce(function (val, oldVal) {
      if (val !== oldVal && val !== null) {
        this.$store.dispatch('filter/SET_QUERY', val)
      }
    }, 500),
    filterBy: function (val, oldVal) {
      this.$store.dispatch('filter/SET_TYPE', val)
    },
    orderBy: function (val, oldVal) {
      this.$store.dispatch('filter/SET_ORDER', val)
    }
  },
  computed: {
    ...mapState('filter', ['query', 'order', 'type']),
    ...mapState('expense', ['loading']),
    ...mapGetters('expense', ['expenses', 'pages', 'current']),
    filteredByQuery: function () {
      const preparedQuery = fz.prepareQuery(this.search)
      const scores = {}
      return this.expenses
        .map((expense, index) => {
          const fields = [
            expense.id,
            expense.amount.value,
            expense.merchant,
            expense.user.first,
            expense.user.last,
            expense.user.email,
          ].map(score => fz.score(score, this.search, { preparedQuery }))

          scores[expense.id] = Math.max(...fields)
          return expense
        })
        .filter(expense => scores[expense.id] > 1)
        .sort((a, b) => scores[b.id] - scores[a.id])
    },
    filtered: function () {
      if (this.search) {
        return this.filteredByQuery
      }
      return this.expenses
    }
  },
  methods: {
    fetchExpenses: function () {
      this.$store.dispatch('expense/SET_LOADING', true)
      this.$store.dispatch('expense/INCREMENT_PAGE')
      this.$store.dispatch('expense/fetchExpenses')
    }
  }
}
</script>
<style scoped>
.uk-sticky-fixed {
  background: #F0F4F6;
  width: 100% !important;
}

.mugen-scroll {
  text-align: center;
}

.uk-spinner {
  color: #D90378;
}
</style>
