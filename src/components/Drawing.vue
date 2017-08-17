<template>
  <div>
    <md-layout md-align="center th-box20" md-flex-xsmall="100" md-flex-small="50" md-flex-medium="33">
        <md-card class="md-primary th-flex--fullwidth">
          <md-card-header>
            <div class="md-title">{{ cardData.title }}</div>
            <div class="md-subhead">{{ cardData.subtitle }}</div>
          </md-card-header>

          <md-card-media class="th-box20">
            <md-layout md-align="center">
              <!-- <img class="ths-card-image" src="../assets/logo.png" alt="People"> -->
              <dash></dash>
            </md-layout>
          </md-card-media>

          <md-card-content>{{ cardData.description }}</md-card-content>

          <md-ink-ripple></md-ink-ripple>

          <md-card-actions>
            <md-layout class="th-box20">
              <md-button class="md-icon-button md-raised">
                <md-icon>keyboard_arrow_left</md-icon>
              </md-button>
            </md-layout>
            <!-- <md-layout md-align="center">
              <md-rating-bar v-model="rating" class="md-accent" md-theme="default"></md-rating-bar>
            </md-layout> -->
            <md-layout class="th-box20"md-align="end">
              <md-button class="md-icon-button md-raised">
                <md-icon>keyboard_arrow_right</md-icon>
              </md-button>
            </md-layout>
          </md-card-actions>


        </md-card>
    </md-layout>
</div>
</template>

<script>
  import Dash from '@/components/Dash';
  
  export default {
    name: 'drawing',
    data() {
      return {
        rating: 4,
        cardData: {
          title: 'Penguin',
          subtitle: 'A simple day',
          description: 'I just don\'t know that to do today',
        },
      };
    },
    components: {
      Dash
    }
  };

</script>

<!-- Add "scoped " attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .ths-card-image {
    display: block;
    max-width: 500px;
    max-height: 500px;
    width: auto !important;
    height: auto;
  }
</style>
