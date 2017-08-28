<template>
    <div>
        <md-layout md-align="center">
                {{ greeting }}
        </md-layout>
        <md-layout md-align="center">
            <thea-carrousel></thea-carrousel>
        </md-layout>
        <md-layout md-align="center">
            Footer goes here
        </md-layout>
    </div>
</template>

<script>
    import TheaCarrousel from '@/components/Carrousel';

    export default {
        name: 'thea-home',
        data() {
            return {
                greeting: 'Welcome To Thea\'s Home Page',
            };
        },
        components: {
            TheaCarrousel
        }
    };

</script>

<!-- Add "scoped " attribute to limit CSS to this component only -->
<style scoped>
    
</style>