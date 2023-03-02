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
        <div class="text-900 text-3xl font-medium mb-3">Digite seu Email Para Redefinir a sua Senha</div>
        
        <span class="text-600 font-medium line-height-3">                  
          <router-link to="/login">
            Voltar 
          </router-link>
        </span>       
      </div>

      <div>
        <label for="email1" class="block text-900 font-medium mb-2">Email</label>
        <InputText id="email1" type="text" class="w-full mb-3" 
        placeholder="Digite Seu Email"
        autocomplete="off"        
        v-model="email"
        />
        <Button
          label="Enviar Email"
          icon="pi pi-email"
          class="w-full bg-green-500 border-red-900"
          @click="EnviarRedefinir"
        ></Button>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, sendPasswordResetEmail} from "firebase/auth";


export default {
  name: "EsqueceuSenha",


  data() {
    return {
    email: '',    
    }
  }, 

  methods: {  

      EnviarRedefinir: 
      async function() {
         const auth = getAuth();
        await sendPasswordResetEmail(auth, this.email)
        .then(() =>{
          alert("Email Enviado com Sucesso")
          this.$router.replace('login')
        }).catch (error =>{
          if(error.code == "auth/missing-email"){
              alert("Por favor digite seu Email") 
          } else if(error.code == "auth/user-not-found"){
            alert("Este Endereço de Email não existe ou não está Cadastrado")
          } else {
            alert(`Email não cadastrado` + error.message)
          }
        })
      } 
  }
}  

</script>





