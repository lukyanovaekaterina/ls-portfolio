import Vue from 'vue';
import Flickity from 'vue-flickity';

new Vue({
  el: "#slider-reviews",
  template: "#reviews-container",
  
  components: {
    Flickity
  },
  
  data() {
    return {
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        cellAlign: 'left',
        groupCells: 1
      },
      reviews: [{
        text: 'Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!',
        author: 'Ковальчук Дмитрий',
        prof: 'Основатель Loftschool'
      },
      {
        text: 'Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах',
        author: 'Владимир Сабанцев',
        prof: 'Преподаватель'
      },
      {
        text: 'Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!',
        author: 'Ковальчук Дмитрий',
        prof: 'Основатель Loftschool'
      },
      {
        text: 'Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах',
        author: 'Владимир Сабанцев',
        prof: 'Преподаватель'
      }
      ]
}

},

  methods: {
    next() {
      this.$refs.flickity.next();
    },
    
    previous() {
      this.$refs.flickity.previous();
    }
  }
}); 