<template lang="pug">
  .container.about__container 
    .about__content
      .about__title
        h1.about__name Блок "Обо мне"
        button.about__append() Добавить группу

      .about-form__content
        .container.container--mobile-wide
        form(@submit.prevent="addNewCategory").categories-form
          input(type="text" v-model="title")
          input(type="submit" value="Добавить")
          ul.skill-list
            li.skill-list__item()
   

</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    title: ""
  }),
  methods: {
    ...mapActions("categories", ["addCategory"]),
    async addNewCategory(){
      try {

       await this.addCategory(this.title); 
      } catch (error) {
        alert(error.message);
      }
      
    }
  }
};
</script>

<style lang="postcss" scoped>
@import "normalize.css";
@import "../../styles/mixins.pcss";

li{
  text-decoration: none;
  list-style: none;
  margin: 0;
  padding: 0;
}
body {
    font-family: "Open Sans", OpenSans, sans-serif;
    font-size: 16px;
    line-height: 1.42;
    -webkit-font-smoothing: antialiased;
    font-weight: 300;
    background-color: #f8f9fe;
    overflow: hidden;
  }
  
  .container {
    width: 1200px;
    margin: 0 auto;
  }

  .maincontent{
    background-color: #f9fbfe;
  }

   * {
    box-sizing: border-box;
  }

.about__container{
  background-color: #f8f9fe;
}

.about{
  &__content{
    width: 90%;
    margin:0 auto;
  }
  &__form{
    display: flex;
    justify-content: space-between;
  }
  &__title{
    display: flex;
    width: 40%;
    justify-content: space-between;
    margin:60px 0;
  }
  &__append{
    color: #383bcf;
  }
  &__table{
    width: 524px;
    background-color: #ffffff;
  }
  &__table-content{
    height: 60px;
  }
  &__table-title{
    text-align: left;
    color: #414c63;
    font-weight: 300;
    opacity: 0.8;
    padding-left: 26px;
  }  
}

</style>