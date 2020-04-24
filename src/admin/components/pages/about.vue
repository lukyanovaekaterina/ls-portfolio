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
          li.skill-list__item(v-for="category in categories" :key="category.id")
            skills-group(
              :category="category")
   
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  components: {
    skillsGroup: () => import("./../skills-group.vue")
  },
  data: () => ({
    title: ""
  }),
  computed: {
    ...mapState("categories", {
      categories: state => state.categories
    })
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    ...mapActions("categories", ["addCategory", "fetchCategories"]),
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
@import "./../../../styles/mixins.pcss";

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
    align-items: center;
    margin-bottom: 60px;
  }

  &__name {
    margin-bottom: 0;
    margin-right: 60px;
    @include phones {
      margin-bottom: 28px;
    }
  }
  &__append{
    color: $links-color;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  &:before {
    content: "+";
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-image: linear-gradient(to right, #006aed, #3f35cb);
    line-height: 20px;
    color: #fff;
    margin-right: 13px;
    flex-shrink: 0;
    flex-basis: 20px;
  }
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

.skill-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -30px;
  @include phones {
    margin-left: 0;
  }
}
.skill-list__item {
  width: calc(100% / 2 - 30px);
  margin-left: 30px;
  margin-bottom: 30px;
  &.loading {
    opacity: 0.5;
    pointer-events: none;
    filter: grayscale(100%);
  }
  @include phones {
    width: 100%;
    margin-left: 0;
    margin-bottom: 12px;
  }
}
</style>