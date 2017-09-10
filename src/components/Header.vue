<template>
    <div>
        <h3>{{ message }} ({{ imageCount }})</h3>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'thea-header',
        data() {
            return {
                message: 'This is a header',
            };
        },
        computed: {
            ...mapGetters([
                'imageCount'
            ])
        }
    };

</script>

<!-- Add "scoped " attribute to limit CSS to this component only -->
<style scoped>

</style>