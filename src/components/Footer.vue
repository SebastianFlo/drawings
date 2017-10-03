<template>
    <div>
        <thea-sector v-bind:threshold="2" @action="$store.commit('setBounce', true)">
            <h3 v-bind:class="{ 'bounce': bounce }" id="footer-message">{{ message }}</h3>
        </thea-sector>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    import TheaSector from '@/components/Sector';

    export default {
        name: 'thea-footer',
        data() {
            return {
                message: 'This is a footer'
            };
        },
        components: {
            TheaSector
        },
        computed: {
            ...mapState([
                'bounce'
            ])
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