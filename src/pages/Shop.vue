<template>
    <div class="shop-container">
        <md-layout>
            <shop-item v-for="image in images" v-bind:image-data="image"></shop-item>
            <md-button @click="getPage(currentIndex--)" class="md-icon-button md-raised">
                <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
            <md-button @click="getPage(currentIndex++)" class="md-icon-button md-raised">
                <md-icon>keyboard_arrow_right</md-icon>
            </md-button>
        </md-layout>
    </div>
</template>

<script>
    import ShopItem from '@/modules/shop/components/ShopItem';
    import ImageService from '../services/image.service';

    export default {
        name: 'thea-shop',
        data() {
            return {
                greeting: 'Welcome To Thea\'s shop Page',
                currentImages: ['image-cat', 'logo'],
                currentImage: 'image-cat',
                currentIndex: 1,
                images: []
            };
        },
        components: {
            ShopItem
        },
        mounted() {
            this.getPage(this.currentIndex);
        },
        methods: {
            getPage(number) {
                return ImageService.getPage(number).then(data => {
                    this.images = data;
                });
            }
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