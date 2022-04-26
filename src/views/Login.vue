<template>
    <div>
        <h1>Login</h1>
        <input id="email" type="email" placeholder="Email" v-model="email">
        <br />
        <input id="password" type="password" placeholder="Password" v-model="password">
         <br />
        <button @click="login">Login</button>
        <p>Don't have an account already? <router-link to="/signup">Sign up!</router-link></p>
    </div>
</template>

<script>
import firebase from "firebase";
export default {
    name: "Login",
    data() {
        return {
        email: "",
        password: "",
        initials: "",
        }
    },
    methods: {
        login() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
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
 input {
    margin: 10px;
    padding: 8px;
    border-radius: 5px;
    border: none;
    outline: none;
    background: rgb(179, 179, 179);
}
 button {
    margin: 10px;
    background:#9d9dff;
    padding: 18px 15px;
    outline: none;
    border: none;
    border-radius: 5px;
    color: white;
}
</style>