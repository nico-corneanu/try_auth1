<template>
    <div>
        <h1>Sign Up</h1>
        <input type="email" placeholder="Email" v-model="email">
         <br />
        <input type="password" placeholder="Password" v-model="password">
         <br />
        <button @click="signup">Sign Up</button>
        <p>Already have an account? <router-link to="/login">Sign in!</router-link></p>
    </div>
</template>

<script>
import firebase from "firebase";

export default {
    name: "SignUp",
    data() {
        return {
        email: "",
        password: "",
        initials: "",
        }
    },
    methods: {
        signup() {
             firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                (user) => {
                console.log(user)
                },
                (err) => {
                alert(err)
                }
            );
        },
    },
};
</script>
<style>
</style>