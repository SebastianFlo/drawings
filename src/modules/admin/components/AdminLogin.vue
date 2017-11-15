<template>
    <div>
        <md-layout md-align="center">
            {{ greeting }}
        </md-layout>
        <form name="adminLogin" v-bind:ref="'adminLogin'">
            <md-layout md-align="center">
                <label for="email">Email</label>
                <input type="email" name="email" required v-model="email">
            </md-layout>
            <md-layout md-align="center">
                <label for="password">Password</label>
                <input type="password" name="password" required v-model="password">
            </md-layout>
            <md-layout md-align="center">
                <md-button :disabled="!form.checkValidity()" type="submit" class="md-raised">Send {{ form.checkValidity() }}</md-button>
            </md-layout>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'thea-admin-login',
        data() {
            return {
                greeting: 'Admin Login',
                email: '',
                password: '',
                mounted: false,
                form: {
                    checkValidity () {
                        return false;
                    }
                }
            };
        },
        mounted () {
            this.mounted = true;
            this.form = this.$refs.adminLogin;
        },
        methods: {
            submit () {
                console.log('Submitted');
            }
        }
    };

</script>

<!-- Add "scoped " attribute to limit CSS to this component only -->
<style scoped>

</style>