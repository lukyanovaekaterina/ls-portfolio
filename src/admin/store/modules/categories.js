
export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {},
  actions: {
      async addCategory(store, title) {
        try {
          const responce = await this.$axios.post("/categories", { title });
        } catch (error) {
          throw new Error(
            error.response.data.error || error.response.data.message 
          );
        }     
   }
  }
};
