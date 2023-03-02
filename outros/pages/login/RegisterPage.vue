<template>
  <main class="register">
    <section class="forms">
      <form class="register" @submit.prevent="register">
        <div class="px-2 py-4 md:px-6 lg:px-8 flex align-items-center justify-content-center">
          <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
            <div class="text-center mb-5">
              <img src="../../assets/logo_actflow.png" alt="Image" height="70  " class="mb-1" />        
              <h2>REGISTRAR-SE</h2>             
                <div>         
                  <label for="email1" class="block text-900 font-medium mb-2">Email</label>
                  <InputText id="email1" type="email" class="w-full mb-3" placeholder="Digite Seu Email" autocomplete="off"
                    v-model="register_form.email" />

                  <label for="password1" class="block text-900 font-medium mb-2">Senha</label>
                  <InputText id="password1" type="password" class="w-full mb-3" placeholder="Digite Seu password" autocomplete="off"
                    v-model="register_form.password" />                  
                  <br>
                  <p></p>
                  <Button class="w-full bg-green-500 border-red-900" label="register" icon="pi pi-user"
                    type="submit"
                    value="register"></Button>
                  <div>
                    <br>
                    <span class="text-600 font-medium line-height-3">
                  Já tem register?
                  </span>
                  <br>
                  <p></p>
                  <Button class="w-full bg-orange-500 border-red-900" label="Registrar-se" icon="pi pi-user-plus"
                    type="submit"
                    @click="Voltar"></Button>
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
  name: "RegisterPage",

  setup() {
    const register_form = ref({});
    const store = useStore();

    const register =  () => {
      store.dispatch('register', register_form.value)
    }
    

    return {
      register_form,
      register
      
    }
    
  }
}

</script>