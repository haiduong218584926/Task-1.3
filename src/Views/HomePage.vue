<template>
    <IntroContent/>
    <ProjectsSection/>
    <ContactMeSection/>
</template>

<script>
  import IntroContent from '../components/IntroContent.vue'
  import ProjectsSection from '../components/ProjectsSection.vue'
  import ContactMeSection from '../components/ContactMeSection.vue'

  export default {
    name: 'App',
    components : {
      IntroContent,
      ProjectsSection,
      ContactMeSection
    } 
  }
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px
  }
  </style>