import Vue from 'vue';
import SimpleVueValidation, { Validator } from 'simple-vue-validator';

Vue.use(SimpleVueValidation);

new Vue({
  el: "#slider-form",
  template: "#form-container",
  mixins: [require('simple-vue-validator').mixin],
  
  validators: {
    'name'(value) {
      return Validator.value(value).required('Поле не должно быть пустым');
    },
    'email'(value) {
      return Validator.value(value).required('Не корректный email').email();
    },
    'comment'(value){
      return Validator.value(value).required('Поле не должно быть пустым');
    }
  },

  data() {
    return {
      name: "",
      email: "",
      comment: ""
    };
  },
});