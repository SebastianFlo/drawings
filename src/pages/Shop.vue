<template>
    <div class="shop-container">
        <md-layout>
            <shop-item v-for="image in images" v-bind:image-data="image"></shop-item>
            <md-button v-if="currentPage > 1" @click="$store.commit('prevPage'); getPage()" class="md-icon-button md-raised">
                <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
            <h3>{{ currentPage }}</h3>
            <md-button @click="$store.commit('nextPage'); getPage()" class="md-icon-button md-raised">
                <md-icon>keyboard_arrow_right</md-icon>
            </md-button>
        </md-layout>
    </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex';

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
            this.getPage();
        },
        methods: {
            getPage() {
                return ImageService.getPage(this.currentPage).then(data => {
                    this.images = data;
                });
            }
        },
        computed: {
            ...mapState([
                'currentPage'
            ])
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