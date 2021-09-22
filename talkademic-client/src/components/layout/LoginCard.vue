<template>
    <v-form>
        <v-card>
        <v-container fluid>
            <v-row justify="center" no-gutters>
            <v-card-title primary-title >
                <h3 class="headline">Log into your account</h3>
            </v-card-title>
            </v-row>

            <v-row no-gutters>
            <v-text-field v-model="username" tabindex="1"
                label="Username" required>
            </v-text-field>
            </v-row>

            <v-row no-gutters>
            <v-text-field v-model="password" type="password" tabindex="2"
                label="Password" required>
            </v-text-field>
            </v-row>

            <v-row no-gutters>
            <a @click.prevent="goToPasswordReset">Forgot your password?</a>
            </v-row>

        </v-container>

        <v-row justify="center" no-gutters>
            <v-card-actions class="mb-2">
            <v-btn tabindex="3" depressed color="primary" @click="login">Login</v-btn>
            </v-card-actions>
        </v-row>

        <v-divider ></v-divider>
        <v-row justify="center" no-gutters>
            <v-card-title primary-title>
            <h3 class="headline">Or sign up</h3>
            </v-card-title>
        </v-row>

        <v-row justify="center" no-gutters>
            <v-card-actions>
            <v-btn tabindex="4" depressed @click="goToSignup">Go to signup</v-btn>
            </v-card-actions>
        </v-row>

        </v-card>
    </v-form>
</template>

<script>
export default {
    data(){
        return {
            username : "",
            password : "",
            alert: false,
            alertMessage: ''
        }
    },
}
</script>
