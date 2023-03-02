<template>
  <div class="surface-ground px-2 py-4 md:px-4 lg:px-4" @submit="createDpto">
    <div class="text-900 font-medium text-xl mb-3">Departamentos</div>
    <div class="surface-card p-4 shadow-2 border-round p-fluid">
        <div class="grid formgrid p-fluid">
            <div class="field mb-4 col-12 md:col-6">
                <label for="cnpj" class="font-medium text-900">Nome</label>
                <InputText id="cnpj" type="text" 
                v-model="nome_dpto"
                autocomplete="off"
                placeholder="Digite o Nome"
                />
            </div>
            <div class="field mb-4 col-12 md:col-6">
                <label for="razao_social" class="font-medium text-900">Responsável</label>
                <InputText id="razao_social" type="text" 
                v-model="responsavel_dpto" 
                autocomplete="off"
                placeholder="Digite o Responsável"                
                />
            </div>
            <Button
            label="Salvar"            
            class="w-full bg-green-500 border-red-900"
            type="submit"
            value="Criar_form_dpto"            
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
            nome_dpto: null,
            responsavel_dpto: null,
            msg: null,  
        }
    },

    methods: {
        async createCont(e) {
            e.preventDefault();

            const data = {
                nome_dpto: this.nome_dpto,
                responsavel_dpto: this.responsavel_dpto,
                
            }

            const dataJson = JSON.stringify(data) 

            
            const req = await fetch("http://localhost:3000/departamento", {
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
            this.nome_dpto = ''
            this.responsavel_dpto = ''
            
        }
    }
}
</script>

<style>

</style>