<template>
  <div>
    <div class="drawing-container"> {{ currentImage }}
      <div v-bind:class="{ invisible: fadeLoader }" v-bind:is="currentImage"></div>
        <img v-bind:class="{ invisible: !fadeLoader }" src="../assets/image-cat.jpg" class="dash-image">
    </div>
  </div>
</template>

<script>
  import imageCat from './images/cat';
  import logo from './images/logo';

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
      logo,
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