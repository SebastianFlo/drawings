<template>
    <div class="shop-item">
        <md-card class="th-card md-primary" md-flex-xsmall="100" md-flex-small="50">
            <md-card-header>
              <div class="md-title">{{ imageData.name }}</div>
            </md-card-header>
        
            <md-card-media class="th-box20">
                <img v-bind:src="imageData.url" alt="">
            </md-card-media>
          </md-card>
    </div>
</template>

<script>
    export default {
        name: 'shop-item',
        props: ['image-data'],
        data() {
            return {
                name: 'Cat'
            };
        }
    };

</script>

<style scoped>
    .shop-item {
        width: 300px;
        height: 300px;
        border: 1px solid cornflowerblue;
        margin: 4px;
        padding: 4px;
    }
</style>