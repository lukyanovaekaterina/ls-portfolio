
export default {
  namespaced: true,
  state: {
    categories: []
  },
  data: () => ({
    user: {
      id: ""
    }
  }),
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
   },

   async fetchCategories(store){
     try {
       const response = await this.$axios.get("/categories/", this.user);
       
     } catch (error) {
       
     }
   }
  }
};
