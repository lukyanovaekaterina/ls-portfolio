<template lang="pug">
  div
    section.about
      .container.about__container
        header.header
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
                  .header__bottom
                    nav.nav
                      - var menu = ['Обо мне', 'Работы', 'Отзвы']
                      ul.nav__list
                        each item in menu
                          li.nav__item
                            a(href="").nav__link #{item}
        .about__content
          .about__title
            .about__name Блок "Обо мне"
            .about__append Добавить группу
          .about__form
            - var aboutinfo = [['Название новой группы', "", "V", "X"],['', "", "", ""],['', "", "", ""],['', "", "", ""],["", "", "", ""],["","","",""],['Новый навык', "100 %", "", ""],];
            table.about__table
              each item in aboutinfo
                tr
                  th(cosplan="2").about__table-title #{item[0]}
                  td.about__table-content #{item[1]}
                  td.about__table-content #{item[2]}
                  td.about__table-content #{item[3]}
                
            - var aboutinfo = [['Название новой группы', "", "V", "X"],['Git', "100 %", "", ""],['Terminal', "90 %", "", ""],['Gulp', "80 %", "", ""],["Webpack", "85 %", "", ""],["","","",""],['Новый навык', "100 %", "", ""],];
            table.about__table
              each item in aboutinfo
                tr
                  th(cosplan="2").about__table-title #{item[0]}
                  td.about__table-content #{item[1]}
                  td.about__table-content #{item[2]}
                  td.about__table-content #{item[3]}
    section.work
      .container.work__container
        .work__title Блок "Работы"
          .work__form
            h3.work__form-title Редактирование работы
            .work__content
              .work__form-download
                form.work__download-form
                  p.form__title-file Перетащите или загрузите <br/> для загрузки изображения
                  label.form__label-file(for="fileField") Загрузить
                    input.form__input(type="file" name="fileField" id="fileField" class="inputField")
              .form__work-content
                label.form__label(for="name")
                  h6.form__label-title Название
                  input.form__input(type="text" name="name" id="name")
                label.form__label(for="link")
                  h6.form__label-title Ссылка
                  input.form__input(type="text" name="link" id="link")
                label.form__label(for="comment")
                  h6.form__label-title Описание
                  textarea.form__input.form__textarea(name="comment" id="comment")
                label.form__label(for="tags")
                  h6.form__label-title Добавление тэга
                  input.form__input(type="text" name="tags" id="tags")
                .form__work-btn
                  button.work__button-reset(type="reset") Отмена
                  button.work__button(type="button") Сохранить
        .work__sample
          .work__sample-content
            form.work__sample-form
              svg(viewBox="0 0 200 200" preserveAspectRatio="none").sample__shape
                circle(r="70" cx="100" cy="100").sample__circle
              label.form__label-sample(for="fileField") Добавить <br/> работу
                input.form__input-sample(type="file" name="fileField" id="fileField")
            form.work__card
              img.work__card-pic(src="./slider-1.jpg" alt="")
              label.form__card(for="commentCard")
                h6.form__card-title Новая работа
                textarea.form__input.form__textarea-card(name="commentCard" id="commentCard" placeholder="Описание этой работы")
              label.form__card(for="linkCard")
                input.form__input(type="text" name="linkCard" id="linkCard")
              .form__card-btn
                button.card__button-reset(type="reset") Править
                button.card__button(type="button") Удалить
    section.reviews
      .container.reviews__container
        .reviews__content
          p.reviews__title Блок "Отзывы"
          .form__content-review
            p.form__title-review Новый отзыв
            form.form__review(action="", id="FormReview")
              .form__review-foto
                .review__user
                label.form__label-foto(for="fileFoto") Добавить фото
                  input.form__input(type="file" name="fileFoto" id="fileFoto" class="inputFoto")
              .form__review-body
                .form__review-data
                  label.form__label-review(for="name")
                    h6.form__label-title Имя автора
                    input.form__input.form__input-review(type="text" name="name" id="name")
                  label.form__label-review(for="titul")
                    h6.form__label-title Титул автора
                    input.form__input.form__input-review(type="text" name="titul" id="titul")
                .form__review-comment
                  label.form__label(for="comment")
                    h6.form__label-title Отзыв
                    textarea.form__input.form__textarea(name="comment", id="comment")
            .form__review-btn
              button.work__button-reset(type="reset") Отмена
              button.work__button(type="button") Сохранить
        .review__sample
          .review__sample-content
            form.review__sample-form
              svg(viewBox="0 0 200 200" preserveAspectRatio="none").sample__shape
                circle(r="70" cx="100" cy="100").sample__circle
              label.form__label-sample(for="fileField") Добавить <br/> отзыв
                input.form__input-sample(type="file" name="fileField" id="fileField")
            form.review__card
              .review__card-content
                label.form__pic(for="reviewPic")
                  img.review__card-pic(src="./Sabancev.jpg" alt="")
                  input.form__input.form__input-user(type="text" name="name" id="name")
                label.form__card(for="review")
                  textarea.form__input.form__textarea-card(name="commentCard" id="review")
                .form__card-btn
                  button.card__button-reset(type="reset") Править
                  button.card__button(type="button") Удалить



</template>

<style lang="postcss" scoped>

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
   display: flex;
   align-items: center;
   justify-content: space-between;

&__content{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  }
&__overhead{
  width: 90%;
  margin: 0 auto;
  height: 58px;
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  background-color: #43436b;
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

.nav{
  &__item {
  margin-right: 52px;
  &:last-child {
    margin-right: 0;
  }
}
&__link{
  text-decoration:none;
  color: #414c63;
  }

 }
.nav__list {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 0;
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

.work__container{
  display: flex;
  flex-direction: column;
}
.work{
  background-color: #f9fbfe;
  width: 1200px;
  margin: 0 auto;
  
  &__title{
    margin: 60px 0;
    font-size: 21px;
    width: 100%;
  }
  &__form{
    background-color: #ffffff;
    width: 100%;
  }
  &__content{
    display: flex;
    flex-direction: row;
    margin: 30px;
  }
  &__form-title{
    margin: 30px;
  }
  &__form-download{
    width: 50%;
  }
}
.work__container{
  width: 90%;
  margin: 0 auto;
  display: flex;
}

.form{
  &__work-content{
    width: 46%;
    margin: 0 auto;
  }
  &__input{
  width: 100%;
  background-color: transparent;
  border-style: none none solid none;
  border-color: #414c63;
  padding: 8px;
  border-width: 1px;
  }
  &__textarea{
    min-height: 140px;
    border-style: solid;
  }
  &__label-title{
    color:#414c63;
    opacity: 0.6;
  }
  &__work-btn{
    display: flex;
    justify-content: flex-end;
    margin-top: 40px;
    margin-bottom: 30px;
  }
}

.work__button-reset{
  color: #383bcf;
  font-size: 16px;
  background-color: transparent;
  border: none;
}

.work__button{
 background-color: #383bcf;
 color:#ffffff;
 text-transform: uppercase;
 font-weight: bold;
 border-color: #383bcf;
 width: 180px;
 height: 60px;
 border-radius: 30px;
 margin-left: 60px;
}

.work__download-form{
  width: 500px;
  height: 280px;
  background-color: #dee4ed;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.inputField{
 appearance: none;
 -webkit-appearance: none;
 width: 0.1px;
 height: 0.1px;
 opacity: 0;
 overflow: hidden;
 position: absolute;
 z-index: -1;
}

.form__label-file{
  background-color: #383bcf;
 color:#ffffff;
 text-transform: uppercase;
 font-weight: bold;
 border-color: #383bcf;
 width: 180px;
 height: 60px;
 border-radius: 30px;
 cursor: pointer;
 text-align: center;
 padding-top: 20px;
}

.form__title-file{
  display: flex;
  align-items: center;
  justify-content: center;
  color: #414c63;
  opacity: 0.6;
}

.work{

  &__sample-content{
    display: flex;
  }
  &__sample-form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: calc(100%/3-15px);
    height: 560px;
    margin-right: 30px;
    background-color: #383bcf;
  }
  &__card{
    width: calc(100%/3-15px);
    height: 560px;
    background: #ffffff;
  }
  &__card-pic{
    width: 340px;
    height: 200px;
    object-fit: cover;
  }
}

.form__card-title{
  margin-left: 30px;
}
.form__textarea-card{
  border: none;
  padding-left: 30px;
  padding-right: 30px;
}

.form__input-sample{
  appearance: none;
 -webkit-appearance: none;
 width: 0.1px;
 height: 0.1px;
 opacity: 0;
 overflow: hidden;
 position: absolute;
 z-index: -1;
}
.sample__shape{
  width: 150px;
  height: 150px;
  fill: transparent;
}
.sample__circle{
  stroke:#ffffff;
  stroke-width: 4px;
}
.form__label-sample{
  color: #ffffff;
  font-size: 18px;
  text-align: center;
  font-weight: 900;
  line-height: 1.67;
}

.reviews{
  background-color: #f7f9fe;
  &__container{
    width: 1200px;
  }
  &__title{
    font-size: 21px;
    font-weight: bold;
    padding:60px 0px;
  }
}

.form{

&__content-review{
  background-color: #ffffff;
}
&__title-review{
  font-size: 21px;
  font-weight: bold;
  padding: 60px;
}
&__review{
  display: flex;
}
&__review-foto{
  display: flex;
  justify-content: center;
  width: 30%;
  align-items: center;
}
&__label-foto{
  color: #383bcf;
}
&__review-body{
  width: 58%;
}
&__review-data{
  display: flex;
  width: 100%;
  justify-content: space-between;
}
&__label-review{
  width: calc(100%/2-10px);
}
&__input-review{
  border-color: #414c63;
}
&__review-btn{
  width: 77%;
  display: flex;
  justify-content: flex-end;
  margin: 30px auto;
}

}

.review{
&__sample{
  width: 1200px;
}
&__sample-content{
  display: flex;
}
&__sample-form{
  width: calc(100%/3 - 10px);
  height: 370px;
  background-color: #383bcf;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
&__card{
  width: calc(100%/3 - 10px);
  background-color: #ffffff;
  margin-left: 20px;
}
&__card-pic{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}
&__card-content{
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;
}

}

.inputFoto{
  appearance: none;
 -webkit-appearance: none;
 width: 0.1px;
 height: 0.1px;
 opacity: 0;
 overflow: hidden;
 position: absolute;
 z-index: -1;
}





</style>