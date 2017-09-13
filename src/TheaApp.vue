<template>
    <div id="thea-app">
        <thea-attention show-sectors="true"></thea-attention>
        <svg-circle></svg-circle>
        <md-theme md-name="default">
            <md-toolbar class="md-transparent">
                <h2 class="md-title" style="flex: 1">Thea's Website</h2>
            </md-toolbar>

            <thea-sector>
                <thea-header id="thea-header"></thea-header>
            </thea-sector>

            <md-layout md-align="center">
                <router-view class="main-content perspective md-flex"></router-view>
            </md-layout>

            <thea-footer></thea-footer>
        </md-theme>
    </div>
</template>

<script>
    import SvgCircle from '@/components/images/circle';
    import TheaAttention from '@/components/Attention';
    import TheaHeader from '@/components/Header';
    import TheaFooter from '@/components/Footer';
    import TheaSector from '@/components/Sector';

    export default {
        name: 'thea-app',
        components: {
            SvgCircle,
            TheaAttention,
            TheaHeader,
            TheaFooter,
            TheaSector
        }
    };

</script>

<style>
    #thea-app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    .th-flex--fullwidth {
        flex: 0 0 100%;
    }

    .th-box5 {
        padding: 5px;
    }

    .th-box20 {
        padding: 20px;
    }

    .md-button.md-fab {
        border-radius: 10px 0px 10px 0px;
    }

    .perspective {
        perspective: 500px;
    }

    .perspective-layer-1 {
        transform: translateZ(-50px);
        z-index: 5;
        border: 1px solid red;
    }

    .perspective-layer-2 {
        transform: translateZ(-100px);
        z-index: 4;
        border: 1px solid darkred;
    }

    .perspective-layer-3 {
        transform: translateZ(-150px);
        z-index: 3;
        border: 1px solid crimson;
    }

    .perspective-layer-4 {
        z-index: 2;
        transform: translateZ(-200px);
    }

    .md-layout {
        border: 1px solid cornflowerblue;
    }
</style>