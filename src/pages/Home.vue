<template>
    <div>
        <md-layout md-align="center">
                {{ greeting }}
        </md-layout>
        <md-layout md-align="center">
            Images go here
        </md-layout>
    </div>
</template>

<script>
    export default {
        name: 'thea-home',
        data() {
            return {
                greeting: 'Welcome To Thea\'s Home Page',
            };
        },
        components: {
        }
    };

</script>

<!-- Add "scoped " attribute to limit CSS to this component only -->
<style scoped>
    
</style>