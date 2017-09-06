<template>
  <div>
    <md-layout :md-gutter="40" md-align="center">
      <!-- <md-layout>
        <carrousel-item @click="prevImage" :card-data="cards[prevIndex]" class="perspective-layer-4 th-carrousel-secondary"></carrousel-item>
      </md-layout> -->
      <md-layout>
        <carrousel-item :card-data="cards[currentIndex]" class="perspective-layer-1"></carrousel-item>
      </md-layout>
      <!-- <md-layout>
        <carrousel-item :card-data="cards[nextIndex]" class="perspective-layer-4 th-carrousel-secondary"></carrousel-item>
      </md-layout> -->
    </md-layout>

    <md-layout>
      <md-layout>
        <md-button @click="prevImage" class="md-icon-button md-raised">
          <md-icon>keyboard_arrow_left</md-icon>
        </md-button>
      </md-layout>
      <md-layout md-align="end">
        <md-button @click="nextImage" class="md-icon-button md-raised">
          <md-icon>keyboard_arrow_right</md-icon>
        </md-button>
      </md-layout>
    </md-layout>
  </div>
</template>

<script>
  import CarrouselItem from '@/components/CarrouselItem';
  import data from '../assets/data';

  export default {
    name: 'thea-carrousel',
    data() {
      return {
        greeting: 'This is the carrousel',
        cards: Object.values(data.images),
        currentIndex: 0
      };
    },
    components: {
      CarrouselItem
    },
    methods: {
      nextImage: function () {
        if (this.currentIndex === this.cards.length - 1) {
          this.currentIndex = 0;
          return;
        }
        ++this.currentIndex;
      },
      prevImage: function () {
        if (this.currentIndex === 0) {
          this.currentIndex = this.cards.length - 1;
          return;
        }
        --this.currentIndex;
      }
    },
    computed: {
      nextIndex () {
        if (this.currentIndex === this.cards.length - 1) {
          return 0;
        }
        return this.currentIndex + 1;
      },
      prevIndex () {
        if (this.currentIndex === 0) {
          return this.cards.length - 1;
        }
        return this.currentIndex - 1;
      }
    }
  };

</script>

<!-- Add "scoped " attribute to limit CSS to this component only -->
<style scoped>
  .th-carrousel-secondary {
    filter: blur(2px);
  }
</style>