<template>
  <div id="thea-app">
    <md-theme md-name="default">
      <md-toolbar class="md-transparent">
        <h2 class="md-title" style="flex: 1">Thea's Website</h2>
      </md-toolbar>

      <md-speed-dial md-open="hover" md-direction="right" class="md-fab-top-left" md-theme="bw">
        <md-button class="md-fab" md-fab-trigger>
          <md-icon md-icon-morph>list</md-icon>
          <md-icon>menu</md-icon>
        </md-button>
        
        <md-button class="md-fab md-primary md-mini md-clean">
          <md-icon>note_add</md-icon>
        </md-button>
        
        <md-button class="md-fab md-primary md-mini md-clean">
          <md-icon>alarm_add</md-icon>
        </md-button>
      </md-speed-dial>
      
      <md-layout md-align="center">
        <router-view class="main-content"></router-view>
      </md-layout>
    </md-theme>
  </div>
</template>

<script>
  export default {
    name: 'thea-app',
  };

</script>

<style>
  #thea-app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .th-flex--fullwidth {
    flex: 0 0 100%;
  }

  .th-box5 {
    padding: 5px;
  }

  .th-box20 {
    padding: 20px;
  }

  .md-button.md-fab {
    border-radius: 10px 0px 10px 0px;
  }

  .md-layout {
    border: 1px solid cornflowerblue;
  }
</style>
