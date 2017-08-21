<template>
  <div>
    <div class="drawing-container">
      <div v-bind:class="{ invisible: fadeLoader }" v-bind:is="currentImage"></div>
      <img v-bind:class="{ invisible: !fadeLoader }" src="../assets/image-cat.jpg" class="dash-image">
    </div>
  </div>
</template>

<script>
  import imageCat from './images/cat';

  export default {
    name: 'dash',
    data() {
      return {
        fadeLoader: false
      };
    },
    props: ['currentImage'],
    components: {
      imageCat
    },
    methods: {
    },
    mounted: function () {
      const path = document.querySelectorAll('svg path');
      path.forEach(pathy => {
        console.log(`${pathy.id} - ${pathy.getTotalLength()}`);
        const totalPathLength = pathy.getTotalLength();
        // add style to each path;
        pathy.style['stroke-dasharray'] = `${totalPathLength}px`;
        pathy.style['stroke-dashoffset'] = `${totalPathLength}px`;
      });

      setTimeout(() => {
        this.fadeLoader = true;
      }, 2000);
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