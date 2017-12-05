<template>
    <div id="thea-app">
        <md-theme md-name="default">
            <md-toolbar class="md-transparent">
                <h2 class="md-title" style="flex: 1">Thea's Website</h2>
            </md-toolbar>
            
            <md-layout md-align="center">
                <md-layout>   
                    <router-link to="/">Go to Home</router-link>
                </md-layout>
                <md-layout>   
                    <router-link to="/contact">Go to Contact</router-link>
                </md-layout>
                <md-layout>   
                    <router-link to="/shop">Go to Shop</router-link>
                </md-layout>
                <md-layout>   
                    <router-link to="/admin">Admin</router-link>
                </md-layout>
            </md-layout>

            <md-layout md-align="center">
                <router-view class="main-content md-flex"></router-view>
            </md-layout>

            <thea-footer></thea-footer>
        </md-theme>
    </div>
</template>

<script>
    import TheaHeader from '@/components/Header';
    import TheaFooter from '@/components/Footer';

    export default {
        name: 'thea-app',
        components: {
            TheaHeader,
            TheaFooter
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

    .bounce {
        animation-duration: 3s;
        animation-name: bounce;
    }

    .md-layout {
        border: 1px solid cornflowerblue;
    }

    .flex-vert {
        flex: 1 0 auto;
    }
</style>
