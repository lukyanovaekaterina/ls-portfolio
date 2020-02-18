<template lang="pug">
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
              img.review__card-pic(src="../../Sabancev.jpg" alt="")
              input.form__input.form__input-user(type="text" name="name" id="name")
            label.form__card(for="review")
              textarea.form__input.form__textarea-card(name="commentCard" id="review")
            .form__card-btn
              button.card__button-reset(type="reset") Править
              button.card__button(type="button") Удалить
</template>

<style lang="postcss" scoped>
@import "normalize.css";
@import "../../../styles/mixins.pcss";

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

.reviews{
  background-color: #f7f9fe;

  &__content{
    width: 90%;
    margin: 0 auto;
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
  width: 90%;
  margin: 0 auto;
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

.work__button-reset{
  color: #383bcf;
  font-size: 16px;
  background-color: transparent;
  border: none;
}

.form{
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

.form__card-title{
  margin-left: 30px;
}
.form__textarea-card{
  border: none;
  padding-left: 30px;
  padding-right: 30px;
}
</style>