<template>
  <div id="app">
    <MainSidebar id="main" class="section" />
    <InfoBar id="info" class="section" />
    
    <div id="tabs" class="section">
      <div id="nav" class="d-flex">
        <router-link to="/">
          <span>Experience</span>
        </router-link>
        <router-link to="/education">
          <span>Education</span>
        </router-link>
        <router-link to="/skills">
          <span>Skills</span>
        </router-link>
        <router-link to="/portfolio">
          <span>Portfolio</span>
        </router-link>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import MainSidebar from '@/components/MainSidebar.vue'
import InfoBar from '@/components/InfoBar.vue'

export default {
  name: 'App',
  components: {
    MainSidebar,
    InfoBar
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/styles.scss';
</style>
