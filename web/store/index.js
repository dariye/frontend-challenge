import Vuex from "vuex";
import expense from "./modules/expense";
import filter from "./modules/filter";

const store = () =>
  new Vuex.Store({
    modules: {
      expense,
      filter
    },
    actions: {
      async nuxtServerInit(
        { state, commit, dispatch },
        {
          app: { $axios },
          error,
          store,
          env: { api }
        }
      ) {
        try {
          const { data } = await $axios.get(`${api}/expenses`);
          if (data) {
            const { total, expense } = data;
            store.dispatch("expense/SET_TOTAL", data.total);
            store.dispatch("expense/SET_EXPENSES", data.expenses);
          }
        } catch (err) {
          error({ message: err.message, statusCode: 500 });
        }
      }
    }
  });

export default store;
