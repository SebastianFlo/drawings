<template>
    <div class="shop-item">
        <md-card class="th-card md-primary" md-flex-xsmall="100" md-flex-small="50">
            <md-card-header>
              <div class="md-title">{{ imageData.name }}</div>
            </md-card-header>
        
            <md-card-media class="th-box20">
                <img @load="loaded = true" v-bind:class="{ 'shop-image-blur': !loaded }" class="shop-image" v-bind:src="imageData.url" alt="">
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
                name: 'Cat',
                loaded: false
            };
        },

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

    .shop-image {
        transition: all 500ms;
    }

    .shop-image-blur {
        opacity: 0.3;
        filter: blur(4px);
    }
</style>