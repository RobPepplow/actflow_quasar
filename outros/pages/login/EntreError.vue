<template>
     <div>
          <h5>Help Text</h5>
        <div class="field">
            <label for="username1">Username</label>
            <InputText id="username1" type="username" aria-describedby="username1-help" />
            <small id="username1-help">Enter your username to reset your password.</small>
        </div>

        <h5>Invalid</h5>
        <div class="field">
            <label for="username2">Username</label>
            <InputText id="username2" type="username" aria-describedby="username2-help" class="p-invalid" />
            <small id="username2-help" class="p-error">Username is not available.</small>
        </div>
        <div>
          <div class="field col-12 md:col-4">
                <Calendar id="calendar" v-model="value3" placeholder="Calendar" class="p-invalid" :showIcon="true" />
          </div>
          <div class="field col-12 md:col-4">
                <Chips id="chips" v-model="value4" placeholder="Chips" class="p-invalid" />
            </div>
            <div class="field col-12 md:col-4">
                <InputMask id="inputmask" v-model="value5" mask="99/99/9999" slotChar="mm/dd/yyyy" placeholder="InputMask" class="p-invalid" />
            </div>
            <div class="field col-12 md:col-4">
                <InputNumber id="inputnumber" v-model="value6" placeholder="InputNumber" class="p-invalid" />
            </div>
            <div>
              <RadioButton name="city" value="Chicago" v-model="city" />
              <RadioButton name="city" value="Los Angeles" v-model="city" />
            </div>
            <div>
              <InputText placeholder="Username" class="p-invalid" />
              <InlineMessage>Field is required</InlineMessage>
            </div>
            <div>
              <Message severity="success" :closable="false">Order Submitted</Message>
            </div>
            <div>
              <Message severity="warn" :life="5000" :sticky="false">This message will hide in 5 seconds.</Message>
            </div>
            <div>
              <Message severity="success" :closable="false">Order Submitted</Message>
            </div>
            <div>
              <Message>Welcome to PrimeVue</Message>
            </div>
            <div>
              <Message v-for="msg of messages" :severity="msg.severity" :key="msg.content">{{msg.content}}</Message>
            </div>
        </div>
        </div>
</template>

<script>



export default {

  name:"EntreErrorPage",


  data() {
    return {
      city: null,

      messages: [
			{severity: 'info', content: 'Dynamic Info Message'},
			{severity: 'success', content: 'Dynamic Success Message'},
			{severity: 'warn', content: 'Dynamic Warning Message'}
		]
    }
    
  },
  

 
    
   
  


}
</script>

<style>
#welcome{
  font-size: 80px;
  background-color: rgb(236, 247, 245);

}
</style>