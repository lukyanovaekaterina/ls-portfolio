
export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {},
  actions: {
    async addCategory(store, title) {
      const responce = await this.$axios.post("/categories", { title });      
   }
  }
};
