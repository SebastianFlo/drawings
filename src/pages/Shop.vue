<template>
    <div class="shop-container">
        <md-layout md-align="center">
            <shop-item></shop-item>
            <shop-item></shop-item>
            <shop-item></shop-item>
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
                currentIndex: 0,
                data: undefined
            };
        },
        components: {
            ShopItem
        },
        mounted() {
            this.getData();
        },
        methods: {
            getData() {
                return ImageService.getAll().then(data => this.data = data);
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