<template>
  <main class="login">
    <section class="forms">
      <form class="login" @submit.prevent="login">
        <div class="px-2 py-4 md:px-6 lg:px-8 flex align-items-center justify-content-center">
          <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
            <div class="text-center mb-5">
              <img src="../../assets/logo_actflow.png" alt="Image" height="70  " class="mb-1" />        
              <h2>LOGIN</h2>             
                <div>         
                  <label for="email1" class="block text-900 font-medium mb-2">Email</label>
                  <InputText id="email1" type="email" class="w-full mb-3" placeholder="Digite Seu Email" autocomplete="off"
                    v-model="login_form.email" />

                  <label for="password1" class="block text-900 font-medium mb-2">Senha</label>
                  <InputText id="password1" type="password" class="w-full mb-3" placeholder="Digite Seu password" autocomplete="off"
                    v-model="login_form.password" />

                  <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">
                    <router-link to="/esqueceusenha">Esqueceu sua senha?</router-link>
                  </a>
                  <br>
                  <p></p>
                  <Button class="w-full bg-green-500 border-red-900" label="Login" icon="pi pi-user"
                    type="submit"
                    value="Login"></Button>
                  <div>
                    <br>
                    <span class="text-600 font-medium line-height-3">
                  Ainda não tem Login?
                  </span>
                  <br>
                  <p></p>
                  <Button class="w-full bg-orange-500 border-red-900" label="Registrar-se" icon="pi pi-user-plus"
                    type="submit"
                    @click="seRegistrar  "></Button>
                  </div>
                </div>      
            </div>      
          </div>
        </div>
      </form>
    </section>
  </main>
</template>

<script>

import { ref } from 'vue'
import { useStore } from 'vuex'


export default {
  name: "LoginPage",

  setup() {
    const login_form = ref({});
    const store = useStore();

    const login =  () => {
      store.dispatch('login', login_form.value)
    }
    

    return {
      login_form,
      login
      
    }
    
  }
}

</script>






