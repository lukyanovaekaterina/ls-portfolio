<template lang="pug">
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
          img.work__card-pic(src="slider-1.jpg" alt="")
          label.form__card(for="commentCard")
            h6.form__card-title Новая работа
            textarea.form__input.form__textarea-card(name="commentCard" id="commentCard" placeholder="Описание этой работы")
          label.form__card(for="linkCard")
            input.form__input(type="text" name="linkCard" id="linkCard")
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

.work__container{
  display: flex;
  flex-direction: column;
}
.work{
  background-color: #f9fbfe;
  width: 1200px;
  margin: 0 auto;
  
  &__title{
    margin: 0 auto;
    margin-top: 60px;
    font-size: 21px;
    width: 90%;
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
&__container{
  width: 90%;
  margin: 0 auto;
  display: flex;
}

&__sample{
  width: 90%;
  margin: 0 auto;
}
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