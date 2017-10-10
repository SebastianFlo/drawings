<template>
    <div class="shop-container">
        <md-layout md-align="center" class="flex-vert">
            {{ greeting }}
        </md-layout>
    </div>
</template>

<script>
    export default {
        name: 'thea-shop',
        data() {
            return {
                greeting: 'Welcome To Thea\'s shop Page'
            };
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