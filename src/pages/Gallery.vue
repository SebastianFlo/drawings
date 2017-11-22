<template>
    <div class="gallery-container">
        <md-layout md-align="center" class="flex-vert">
            {{ greeting }}
            <!-- TODO: Add file uploader -->
        </md-layout>
    </div>
</template>

<script>
    export default {
        name: 'thea-gallery',
        data() {
            return {
                greeting: 'Welcome To Thea\'s Gallery Page'
            };
        },
        components: {
        },
        mounted () {
            // check if logged in
        }
    };
</script>

<!-- Add "scoped " attribute to limit CSS to this component only -->
<style scoped>
    .gallery-container {
        display: flex;
        flex-direction: column;
    }

    .flex-vert {
        flex: 1 0 auto;
    }
</style>