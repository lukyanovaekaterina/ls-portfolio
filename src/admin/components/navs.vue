<template lang="pug">
  .header__bottom
    .navs-container
      ul.navs
        li.navs__item(v-for="nav in navs")
          router-link(
            :data-text="nav.title"
            :to="nav.href"
            exact-active-class="active"
            ).navs__link  
</template> 

<script>
export default {
  data() {
    return {
      navs: [
        { title: "Обо мне", href: "/" },
        { title: "Работы", href: "/reviews" },
        { title: "Отзывы", href: "/work" }
      ]
    };
  }
};
</script>

<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";

.navs-container {
  background: #fff;
}
.navs {
  display: flex;
  height: 77px;
  width: 1200px;
  margin: 0 auto;

  @include phones {
    height: 87px;
  }
}
.navs__item {
  height: 100%;
  margin-right: 30px;
  list-style-type: none;

  @include phones {
    margin-right: 3px;
  }
  &:last-child {
    margin-right: 0;
  }
}
.navs__link {
  vertical-align: middle;
  white-space: nowrap;
  display: flex;
  height: 100%;
  align-items: center;
  cursor: pointer;
  width: 125px;
  justify-content: center;
  border-bottom: 3px solid transparent;
  text-decoration: none;

  @include phones {
    width: 100px;
  }
  &:before {
    content: attr(data-text);
  }
  &:hover,
  &.active {
    color: #383bcf;
    font-weight: 600;
    border-color: currentColor;
  }
}

</style>