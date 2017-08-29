<template>
  <div>
    <md-card class="md-primary th-flex--fullwidth">
        <md-card-header>
          <div class="md-title">{{ currentCard.title }}</div>
          <div class="md-subhead">{{ currentCard.subtitle }}</div>
        </md-card-header>

        <md-card-media class="th-box20">
          Image goes here
        </md-card-media>

        <md-card-content>{{ currentCard.description }}</md-card-content>

        <md-card-actions>
          <md-layout class="th-box20">
            <md-button @click="prevImage" class="md-icon-button md-raised">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </md-layout>
          <md-layout class="th-box20" md-align="end">
            <md-button @click="nextImage" class="md-icon-button md-raised">
              <md-icon>keyboard_arrow_right</md-icon>
            </md-button>
          </md-layout>
        </md-card-actions>
      </md-card>
  </div>
</template>

<script>
  import data from '../assets/data';

  export default {
    name: 'thea-carrousel',
    data() {
      return {
        greeting: 'This is the carrousel',
        currentIndex: 0
      };
    },
    methods: {
      nextImage: function () {
        if (this.currentIndex === this.cards.length - 1) {
          this.currentIndex = 0;
          return;
        }
        ++this.currentIndex;
        console.log('this.currentIndex', this.currentIndex);
      },
      prevImage: function () {
        if (this.currentIndex === 0) {
          this.currentIndex = this.cards.length - 1;
          return;
        }
        --this.currentIndex;
        console.log('this.currentIndex', this.currentIndex);
      }
    },
    computed: {
      cards () {
        return Object.values(data.images);
      },
      currentCard () {
        return this.cards[this.currentIndex];
      }
    }
  };
</script>

<!-- Add "scoped " attribute to limit CSS to this component only -->
<style scoped>

</style>
