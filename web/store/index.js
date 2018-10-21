import Vuex from 'vuex'
import expense from './modules/expense'

const store = () => new Vuex
  .Store({
    modules: {
      expense,
    },
    actions: {
      async nuxtServerInit ({ state, commit, dispatch },
        { app: { $axios }, error, store, env: { api } }) {
        try {
          const { data } = await $axios.get(`${api}/expenses`)
          if (data) {
            const { total, expense } = data
            store.dispatch('expense/SET_TOTAL', data.total)
            store.dispatch('expense/SET_EXPENSES', data.expenses)
          }
        } catch (err) {
          error({ message: err.message, statusCode: 500 })
        }
      }
    },
  })


export default store
