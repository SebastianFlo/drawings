<template>
    <div class="home-container">
        <md-layout md-align="center" class="flex-vert">
            <img src="../../static/9f1c8022086211.5630c61ba00f1.jpg" alt="">
        </md-layout>
    </div>
</template>

<script>
    export default {
        name: 'thea-home',
        data() {
            return {
                greeting: 'Welcome To Thea\'s Home Page'
            };
        },
        components: {
        }
    };

</script>

<!-- Add "scoped " attribute to limit CSS to this component only -->
<style scoped>
    .home-container {
        display: flex;
        flex-direction: column;
    }
</style>