<template>
    <div class="admin-container">
        <md-layout md-align="center" class="flex-vert">
            {{ greeting }}
        </md-layout>
        <admin-login></admin-login>
    </div>
</template>

<script>
    import AdminLogin from '@/modules/admin/components/AdminLogin';

    export default {
        name: 'thea-admin',
        data() {
            return {
                greeting: 'Welcome To Thea\'s Admin Page'
            };
        },
        components: {
            AdminLogin
        }
    };
</script>

<!-- Add "scoped " attribute to limit CSS to this component only -->
<style scoped>
    .admin-container {
        display: flex;
        flex-direction: column;
    }

    .flex-vert {
        flex: 1 0 auto;
    }
</style>