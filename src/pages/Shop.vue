<template>
    <div class="shop-container">
        <md-layout md-align="center">
                <thea-drawing></thea-drawing>
        </md-layout>
    </div>
</template>

<script>
    import TheaDrawing from '@/components/Drawing';

    export default {
        name: 'thea-shop',
        data() {
            return {
                greeting: 'Welcome To Thea\'s shop Page'
            };
        },
        components: {
            TheaDrawing
        }
    };

</script>

<!-- Add "scoped " attribute to limit CSS to this component only -->
<style scoped>
    .shop-container {
        display: flex;
        flex-direction: column;
    }

    .flex-vert {
        flex: 1 0 auto;
    }
</style>