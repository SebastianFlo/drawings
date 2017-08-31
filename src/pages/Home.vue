<template>
    <div class="home-container">
        <md-layout md-align="center" class="flex-vert">
            {{ greeting }}
        </md-layout>
        <md-layout md-align="center" class="flex-vert">
            <thea-carrousel></thea-carrousel>
        </md-layout>
        <md-layout md-align="center" class="flex-vert">
            Footer goes here
        </md-layout>
    </div>
</template>

<script>
    import TheaCarrousel from '@/components/Carrousel';

    export default {
        name: 'thea-home',
        data() {
            return {
                greeting: 'Welcome To Thea\'s Home Page'
            };
        },
        components: {
            TheaCarrousel
        }
    };

</script>

<!-- Add "scoped " attribute to limit CSS to this component only -->
<style scoped>
    .home-container {
        display: flex;
        flex-direction: column;
    }

    .flex-vert {
        flex: 1 0 auto;
    }
</style>