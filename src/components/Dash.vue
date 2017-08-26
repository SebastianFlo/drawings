<template>
  <div>
    <md-button @click="showImage = !showImage; fadeLoader = !showImage" class="md-raised">
        {{ showImage ? 'Hide' : 'Show '}}
    </md-button>
    <div class="drawing-container">
      <div v-if="showImage" v-bind:class="{ invisible: fadeLoader }" v-bind:is="currentImage"></div>
      <intersect v-if="showImage" @enter="logIntersectedTrue" @leave="logIntersectedFalse">
        <img v-bind:class="{ invisible: !fadeLoader }" src="../assets/image-cat.jpg" class="dash-image">
      </intersect>
    </div>
  </div>
</template>

<script>
  import Intersect from 'vue-intersect';
  import imageCat from './images/cat';

  export default {
    name: 'dash',
    data() {
      return {
        fadeLoader: false,
        showImage: true
      };
    },
    props: ['currentImage'],
    components: {
      imageCat,
      Intersect
    },
    methods: {
      logIntersectedTrue: function () {
        this.$emit('draw');
        setTimeout(() => {
          this.fadeImage();
        }, 500);
      },
      logIntersectedFalse: function () {
        this.$emit('reset');
        this.fadeLoader = false;
        console.log('this.fadeLoader', this.fadeLoader);
      },
      fadeImage: function () {
        setTimeout(() => {
          this.fadeLoader = true;
        }, 2000);
      }
    },
    mounted: function () {
    }
  };

</script>

<style scoped>
  .drawing-container {
    display: block;
    position: relative;
  }

  .dash-image {
    position: relative;
    width: 400px !important;
    opacity: 1;
    left: 0;
    top: 0;
    transition: all 1s ease;
  }

  .invisible {
    opacity: 0;
    transition: all 1s ease;
  }

  svg>path {
    margin: auto;
    fill-opacity: 0;
    stroke: #333333;
    stroke-width: 1;
    animation-name: draw;
    animation-duration: 3s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    animation-timing-function: linear;
  }

  svg {
    position: absolute;
    left: 5px;
    top: 0;
  }

  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }
</style>