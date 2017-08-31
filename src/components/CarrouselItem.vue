<template>
  <md-card class="th-card md-primary" md-flex-xsmall="100" md-flex-small="50">
    <md-card-header>
      <div class="md-title">{{ cardData.title }}</div>
      <div class="md-subhead">{{ cardData.subtitle }}</div>
    </md-card-header>

    <md-card-media class="th-box20">
      <observer @intersect-enter="handleEnter" @intersect-exit="handleExit" :threshold="[0, 0.5, 1]">
          <span>Image goes here</span>
      </observer>
    </md-card-media>
    
    <md-card-content>{{ cardData.description }}</md-card-content>
  </md-card>
</template>

<script>
  import Observer from '@/components/Observer';

  export default {
    name: 'thea-carrousel-item',
    data() {
      return {
        greeting: 'This is the carrousel Item'
      };
    },
    props: ['cardData'],
    components: {
      Observer
    },
    methods: {
      handleEnter() {
        console.log('entering');
      },
      handleExit() {
        console.log('exiting');
      }
    }
  };

</script>

<!-- Add "scoped " attribute to limit CSS to this component only -->
<style scoped>
  .th-card {
    min-width: 300px;
  }
</style>