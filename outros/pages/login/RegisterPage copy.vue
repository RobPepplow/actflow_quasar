<template>
  <div
    class="
      px-2
      py-4
      md:px-6
      lg:px-8
      flex
      align-items-center
      justify-content-center
    "
  >
    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
      <div class="text-center mb-5">
        
        <img
          src="../../assets/logo_actflow.png"
          alt="Image"
          height="70  "
          class="mb-3"
        />
        
        <h2>REGISTRAR-SE</h2>
              
      </div>

      <div>
        <label for="email1" class="block text-900 font-medium mb-2">Email</label>
        <InputText id="email1" type="email" class="w-full mb-3" 
        placeholder="Digite Seu Email"
        autocomplete="off"
        v-model="email"
        />

        <label for="password1" class="block text-900 font-medium mb-2">Senha</label>
        <InputText id="password1" type="password" class="w-full mb-3" 
        placeholder="Digite sua Senha"
        autocomplete="off"
        v-model="password"
        />
         <label for="password1" class="block text-900 font-medium mb-2">Confirme Senha</label>
        <InputText id="password1" type="password" class="w-full mb-3" 
        placeholder="Digite sua Senha Novamente"
        autocomplete="off"
        v-model="confirmePassword"
        />         

        <Button
          label="Registrar-se"
          icon="pi pi-user-plus"
          class="w-full bg-green-500 border-red-900"
          type="submit"
          @click="Register"
        ></Button>
        <br>
        <P></P>
        <span class="text-600 font-medium line-height-3">Ja tem Cadastro?</span>      
        <br>
        <P></P>
        <Button
          label="Voltar"
          icon="pi pi-undo"
          class="w-full bg-orange-500 border-red-900"
          type="submit"
          @click="voltar"
        ></Button>

      </div>
    </div>
  </div>
</template>

<script>

import { ref } from 'vue'
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import { useRouter } from 'vue-router';

export default {
  name: "RegisterPage",

  setup() {

    const email = ref('');
    const password = ref('');
    const auth = getAuth();
    const isAuthenticated = ref(false);
    const user = ref("");
    const router = useRouter();
    


    const Register = async () => {
      await createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((Credentials) => {
        console.log('sucesso')
        if( Credentials.user) {
          isAuthenticated.value = true;
          user.value = Credentials.user.email
          console.log(user.value, isAuthenticated.value)
        }
        alert('cadastro realizado')
        router.replace('home')
      })
      .catch((error) => {
        console.log('error.code')
        alert(error)
      })
    }


    return {
      email,
      auth,
      password,
      Register,
      user,
      isAuthenticated,
      router
    }    
  },

  methods: {
    voltar: function (){ 
      this.$router.replace('login')
    }
  } 
}
</script>


