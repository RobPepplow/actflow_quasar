<template>
  <div class="surface-ground px-2 py-4 md:px-4 lg:px-4" @submit="createPerm">
    <div class="text-900 font-medium text-xl mb-3">Permissões</div>
    <div class="surface-card p-4 shadow-2 border-round p-fluid">
        <div class="grid formgrid p-fluid">
            <div class="field mb-4 col-12 md:col-6">
                <label for="funcionalidade" class="font-medium text-900">Funcionalidade</label>
                <InputText id="funcionalidade" type="text" 
                v-model="funcionalidade"
                autocomplete="off"
                placeholder="Digite o Funcionalidade"
                />
            </div>
            <div class="field mb-4 col-12 md:col-6">
                <label for="departamento" class="font-medium text-900">Departamento</label>
                <InputText id="departamento" type="text" 
                v-model="departamento" 
                autocomplete="off"
                placeholder="Digite o Departamento"                
                />
            </div>
            <div class="field mb-4 col-12 md:col-6">
                <label for="ativGeral" class="font-medium text-900">Atividade em Geral</label>
                <InputText id="ativGeral" type="text" 
                v-model="ativGeral" 
                autocomplete="off"
                placeholder="Digite a Atividade em Geral"                
                />
            </div>
            <Button
            label="Salvar"            
            class="w-full bg-green-500 border-red-900"
            type="submit"
            value="Criar_form_Perm"            
            ></Button>           
            
        </div>
    </div>
  </div>
</template>

<script>

export default {
    name: "DepartamentosPage",

    data() {
        return {
            funcionalidade: null,
            departamento: null,
            ativGeral: null,
            msg: null,  
        }
    },

    methods: {
        async createPerm(e) {
            e.preventDefault();

            const data = {
                funcionalidade: this.funcionalidade,
                departamento: this.departamento,
                ativGeral: this.ativGeral,
                
            }

            const dataJson = JSON.stringify(data) 

            
            const req = await fetch("http://localhost:3000/permissoes", {
                method: "POST",
                headers: { "Content-Type" : "application/json" },
                body: dataJson
            });

            const res = await req.json()

            console.log(res)

            this.msg = "Cadastro Salvo"

            // clear message
            setTimeout(() => this.msg = "", 3000)
            // limpar campos
            this.funcionalidade = ''
            this.departamento = ''
            this.ativGeral = ''
            
        }
    }
}
</script>

<style>

</style>