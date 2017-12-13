<template>
    <div class="home-container">
        <md-layout md-align="center" class="flex-vert">
            <img src="../../static/cat_day.jpg" alt="">
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
    img {
        max-width: none;
        margin-top: -350px;
    }

    .home-container {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
</style>