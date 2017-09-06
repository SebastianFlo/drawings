<template>
  <svg version="1.1" width="1000" height="500" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="1">
    <circle cx="35" cy="35" r="10" style="fill: white;">
      <animate
        attributeName="cx"
        from="35"
        to="950" 
        repeatCount="indefinite"
        dur="6s"
        fill="freeze"/>
      <animate
        attributeName="cy"
        from="35"
        to="200" 
        repeatCount="indefinite"
        dur="6s"
        fill="freeze"/>
      <animate
        attributeType="CSS" attributeName="opacity" 
        from="1" to="0" dur="6s" repeatCount="indefinite"/>
      <animate
        attributeType="CSS" attributeName="opacity" 
        from="0" to="1" dur="1s"/>

      </circle>
    </svg>
</template>

<script>
  export default {
    name: 'svgCircle',
    data() {
      return {
      };
    }
  };

</script>

<style scoped>
 svg {
   position: absolute;
 }

 circle {
   opacity: 0;
 }
</style>