<template>
 <div class="about">
    <h1>This is an signup page</h1>
    <div class="container">
        <div class="row">
            <div class="col-sm"></div>
            <div class="col-sm">
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" v-model="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted" >We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword2">Repeat password</label>
                        <input type="password" v-model="passwordRepeat" class="form-control" id="exampleInputPassword2" placeholder="Password" />
                    </div>
                    
                    <button type="button" @click="signup" class="btn btn-primary">Submit</button>
                </form>
            </div>
            <div class="col-sm"></div>
        </div>
    </div>
 </div>
</template>

<script>
import { firebase } from "@/firebase";

export default {
    name: "Signup",
    data () {
        return {
            username: "",
            password: "",
            passwordRepeat: "",
        };
    },
    methods: {
        signup() {
             if (this.password == this.passwordRepeat)
                alert("Ista lozinka");
            else    
                alert("Nije ista lozinka. Ponovi lozinku");
            firebase.auth().createUserWithEmailAndPassword(this.username, this.password).then(
                function () {
                    console.log("Uspješna registracija");
                    alert ("Uspješna registracija");
                }
            ).catch (function(error) {
                console.error("Došlo je do greške", error)
                alert(error);
            });
            console.log("Nastavak"); 
        },
    },
};
</script>
