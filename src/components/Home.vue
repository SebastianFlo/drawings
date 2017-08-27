<template>
  <div>
    <h3> {{ greeting }} </h3>

    <drawing></drawing>
    <drawing></drawing>

</div>
</template>

<script>
  import Drawing from '@/components/Drawing';
  import Bounce from '@/components/Bounce';

  export default {
    name: 'home',
    data() {
      return {
        greeting: 'Welcome Home',
      };
    },
    components: {
      Drawing,
      Bounce
    }
  };

</script>

<!-- Add "scoped " attribute to limit CSS to this component only -->
<style scoped>

</style>
