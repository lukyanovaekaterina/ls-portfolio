<template lang="pug">
  div
    
    header.header-container
      appHeader
    
    section.navs-container
      navs
      
    section.about
      about

    section.work
      work

    section.reviews
      reviews
      
</template>

<script>
import appHeader from '../admin/components/header';
import navs from '../admin/components/navs';
 import about from '../admin/components/about';
 import work from '../admin/components/work';
 import reviews from '../admin/components/reviews';

 export default {
   name: 'app',
   components: {
     appHeader, navs, about, work, reviews
   },
   data() {
     return {

     }
   }
 }
</script>

<style lang="postcss" scoped>
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";

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


  .about{
    background-color: #f8f9fe;
  }

.work{
   background-color: #f8f9fe;
}

.reviews{
   background-color: #f8f9fe;

}
</style>