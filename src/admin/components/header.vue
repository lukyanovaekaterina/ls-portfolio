<template lang="pug">
  .header__container
    .header__content
      .header__overhead-fon
        .header__overhead
          .header__user
            .header__user-avatar
              img(src="/src/images/content/user.jpg", alt="", class="avatar__pic") 
            .header__username Лукьянова Екатерина
          .header__link
            li.header__item-link Панель администрирования
            li.header__item-link Выйти    
           
</template>


<script>

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

.header{
   &__container{
    background-color: #43436b;
    justify-content: center;
  }
  
  &__content{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  }
&__overhead{
  width: 90%;
  margin: 0 auto;
  height: 58px;
  display: flex;
  justify-content: space-between;
  color: #ffffff;
 }
 &__overhead-fon{
   width: 100%;
   background-color: #43436b;
   align-items: center;
   justify-content: center;
 }
&__user{
  display: flex;
  align-items: center;
 }
&__username{
  margin: 0 20px;
  font-size: 18px;
 }
&__link{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 75%;
 }
&__bottom{
  width: 90%;
  margin: 0 auto; 
  background: #ffffff;
 }
}

.avatar__pic{
  display: block;
  width: 45px;
  height: 45px;
  overflow: hidden;
  border-radius:50%;
  object-fit: cover;
}
</style>