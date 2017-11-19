<template>
    <div>
        <md-layout v-if="isAuthenticated"
            md-align="center">
            {{ greeting }}
        </md-layout>
        <md-layout v-if="!isAuthenticated"
            md-align="center">
            <form name="adminLogin"
                v-bind:ref="'adminLogin'">
                <md-layout md-align="center">
                    <label for="email">Email</label>
                    <input type="email"
                        name="email"
                        required
                        v-model="user.email">
                </md-layout>
                <md-layout md-align="center">
                    <label for="password">Password</label>
                    <input type="password"
                        name="password"
                        required
                        v-model="user.password">
                </md-layout>
                <md-layout md-align="center">
                    <md-button @click="login()"
                        :disabled="!form.checkValidity()"
                        type="submit"
                        class="md-raised">Send {{ form.checkValidity() }}</md-button>
                </md-layout>
            </form>
        </md-layout>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'thea-admin-login',
        data() {
            return {
                greeting: 'Admin Login',
                user: {},
                mounted: false,
                form: {
                    checkValidity() {
                        return false;
                    }
                }
            };
        },
        mounted() {
            this.mounted = true;
            this.form = this.$refs.adminLogin;
        },
        methods: {
            login() {
                this.$store.commit('login', {
                    user: this.user,
                    requestOptions: this.requestOptions
                });
            }
        },
        computed: {
            ...mapGetters([
                'isAuthenticated'
            ])
        }
    };

</script>

<!-- Add "scoped " attribute to limit CSS to this component only -->
<style scoped>
</style>