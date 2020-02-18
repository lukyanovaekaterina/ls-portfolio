<template lang="pug">
  .header__bottom
    .nav-container
      ul.navs
        li.navs__item(v-for="nav in navs")
          router-link(
            :data-text="nav.title"
            :to="tab.href"
            exact-active-class="active"
            ).navs__link  
</template> 

<script>
export default {
  data(){
    return {
      navs: [
        { title: "Обо мне", href: "/"},
        { title: "Работы", href: "/reviews" },
        { title: "Отзывы", href: "/work"}
      ]
    };
  }
};
</script>

<style lang="postcss" scoped>
.navs{
  &__item {
  margin-right: 52px;
  &:last-child {
    margin-right: 0;
  }
}
  &__link{
  text-decoration:none;
  color: #414c63;
  &:hover{
    color: #383bcf;
    text-decoration: underline;
  }
  }

&__list {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 0;
}
}
</style>