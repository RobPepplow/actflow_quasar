<template>    
    <form id="Contabilidade-form" method="POST" @submit="createUsuario">
        <div class="surface-ground px-2 py-4 md:px-4 lg:px-4">
            <div class="text-900 font-medium text-xl mb-3">Usuários</div>
            <div class="surface-card p-4 shadow-2 border-round p-fluid">
                <div class="grid formgrid p-fluid">
                    <div class="field mb-4 col-8 md:col-6">
                        <label for="usuario" class="font-medium text-900">Login Usuário</label>
                        <InputText id="usuario" type="text" 
                        placeholder="Login"
                        autocomplete="off" 
                        v-model="usuario"
                        />
                    </div>
                    <div class="field mb-4 col-12 md:col-6">
                        <label for="password" class="font-medium text-900">Senha</label>
                        <InputText id="password" type="password"
                        placeholder="Password"
                        autocomplete="off"                          
                        v-model="password" 
                        />
                    </div>
                    <div class="field mb-4 col-12 md:col-8">
                        <label for="nome_usuario" class="font-medium text-900">Nome Usuário</label>
                        <InputText id="nome_usuario" type="text"
                        placeholder="Digite o Nome Completo do Usuário"                       
                        autocomplete="off" 
                        v-model="userName" 
                        />
                    </div>
                    <div class="field mb-4 col-12 md:col-6">
                        <label for="fone_contato" class="font-medium text-900">Fone/Celular/Whats</label>
                        <InputText id="fone_contato" type="phone" 
                        placeholder="Digite o Telefone do Usuário"
                        autocomplete="off"
                        v-model="fone_usuario"
                        oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');" 
                        
                        />
                    </div>
                    <div class="field mb-4 col-12 md:col-6">
                        <label for="email" class="font-medium text-900">E-mail Usuário</label>
                        <InputText id="email" type="text"
                        placeholder="Digite o Email do Usuário"
                        autocomplete="off"
                        v-model="email_usuario" 
                        />
                    </div>
                    <div class="field mb-4 col-12 md:col-6">
                        <label for="tipoEmpresa">Tipo Usuário:  </label><br>
                        <select name="tipoEmpresa" id="tipoEmpresa" v-model="tipoUsuario">
                            <option value="" class="field mb-2 col-12 md:col-6">Selecione o tipo de Usuário</option>
                            <option value="Administrador" class="field mb-2 col-12 md:col-6">Administrador</option>
                            <option value="Gerente" class="field mb-2 col-12 md:col-6">Gerente</option>
                            <option value="Colaborador" class="field mb-2 col-12 md:col-6">Colaborador</option>                            
                        </select>
                    </div>
                    <Button
                    label="Salvar"            
                    class="w-full bg-green-500 border-red-900"                    
                    type="submit" 
                    value="Criar_form_usuario"
                    ></Button> 

                </div>
            </div>
        </div>
    </form>
    <div>
         <Message :msg="msg" v-show="msg" />
    </div>     
</template>

<script>

export default {
    name: "ContabilidadePage",
    data() {
        return {

            usuario: null,
            password: null,
            userName: null,
            fone_usuario: null,
            email_usuario: null,
            msg: null,

        }
    },

    methods: {
        async createUsuario(e) {
            e.preventDefault();

            const data = {
                usuario: this.usuario,
                password: this.password,
                userName: this.userName,
                fone_usuario: this.fone_usuario,
                email_usuario: this.email_usuario,
            }

            const dataJson = JSON.stringify(data) 

            
            const req = await fetch("http://localhost:3000/usuario", {
                method: "POST",
                headers: { "Content-Type" : "application/json" },
                body: dataJson
            });

            const res = await req.json()

            console.log(res)

            this.msg = "Cadastro Usuário Salvo"

            // clear message
            setTimeout(() => this.msg = "", 3000)
            // limpar campos
            this.usuario = ''
            this.password = ''
            this.userName = ''
            this.fone_usuario = ''
            this.email_usuario = '' 
        }
    }
 }
</script>

<style>

</style>