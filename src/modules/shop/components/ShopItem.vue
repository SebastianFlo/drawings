<template>
    <div class="shop-item">
        Shop Item {{ name }}
    </div>
</template>

<script>
    export default {
        name: 'shop-item',
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