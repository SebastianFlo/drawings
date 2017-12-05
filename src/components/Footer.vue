<template>
    <div>
        {{ message }}
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: 'thea-footer',
        data() {
            return {
                message: 'This is a footer'
            };
        },
        components: {
        }
    };

</script>

<!-- Add "scoped " attribute to limit CSS to this component only -->
<style scoped>
    div {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        padding: 1rem;
        background-color: #efefef;
        text-align: center;
    }
</style>