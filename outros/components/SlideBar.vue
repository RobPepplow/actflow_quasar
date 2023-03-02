<template>
  <div class="min-h-screen flex relative lg:static surface-ground">   
    <!-- Sidebar Menu -->
    <div
      id="sidebar"
      class="
        bg-gray-100
        h-screen
        hidden
        lg:block
        flex-shrink-0
        absolute
        lg:static
        left-0
        top-0
        z-1
        select-none
      "
      style="width: 210px"
    >
      <div class="flex flex-column h-full">
        <!-- Logo Menu -->
        <div
          class="
            flex
            justify-content-center
            align-items-center
            p-4
            bg-gray-200
            flex-shrink-0
          "
          style="height: 60px"
        >
          <img src="images/blocks/logos/logo_h.svg" alt="Image" height="40" />
        </div>
        <!-- Items Menu -->
        <div class="overflow-y-auto">
          <ul class="list-none p-1 m-0">           
              <!-- PAINEL -->
            <li>
              <div
                v-ripple
                class="p-3 flex align-items-center justify-content-between text-600 cursor-pointer p-ripple"
                v-styleclass="{selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }"
              >
                <span class="font-medium">PAINEL</span>
                <i class="pi pi-chevron-down"></i>
              </div>
              <ul class="list-none p-0 m-0 overflow-hidden">
                <MenuItemCMP icon="pi-chart-line" link="/dashboard" name="Painel de Controle" />
                <MenuItemCMP icon="pi-cog" link="/dispatcher" name="Automações" />                 
                <MenuItemCMP icon="pi-shopping-bag" link="/menssagem" name="Serviços" />
              </ul>
            </li>
            <!-- FIM PAINEL -->
             <!-- ADMINISTRAÇÃO -->
            <li>
              <div
                v-ripple
                class="p-3 flex align-items-center justify-content-between text-600 cursor-pointer p-ripple"
                v-styleclass="{selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup',}"
              >
                <span class="font-medium">ADMINISTRAÇÃO</span>
                <i class="pi pi-chevron-down"></i>
              </div>
              <ul class="list-none p-0 m-0 overflow-hidden">
                <MenuItemCMP icon="pi-building" link="/escritorio" name="Escritório" />                               
              </ul>
            </li>
              <!-- FIM ADMINISTRAÇÃO -->
          </ul>
        </div>
      </div>
    </div>
    <!-- TopBar -->
    <div class="min-h-screen flex flex-column relative flex-auto">
      <div
        class="
          flex
          justify-content-between
          align-items-center
          px-5
          surface-section
          shadow-none
          relative
          lg:static
          border-bottom-1
          surface-border
        "
        style="height: 60px"
      >
        <div class="flex">
          <a
            v-ripple
            class="cursor-pointer block lg:hidden text-700 mr-3 mt-1 p-ripple"
            v-styleclass="{selector: '#sidebar',
              enterClass: 'hidden',
              enterActiveClass: 'fadeinleft',
              leaveToClass: 'hidden',
              leaveActiveClass: 'fadeoutleft',
              hideOnOutsideClick: true,
            }"
          >
            <i class="pi pi-bars text-4xl"></i>
          </a>
          <span class="p-input-icon-left">
            <i class="pi pi-search"></i>
            <InputText
              type="text"
              class="border-none w-10rem sm:w-20rem"
              placeholder="Buscar"
            />
          </span>
        </div>
        <a
          v-ripple
          class="cursor-pointer block lg:hidden text-700 p-ripple"
          v-styleclass="{
            selector: '@next',
            enterClass: 'hidden',
            enterActiveClass: 'fadein',
            leaveToClass: 'hidden',
            leaveActiveClass: 'fadeout',
            hideOnOutsideClick: true,
          }"
        >
          <i class="pi pi-ellipsis-v text-2xl"></i>
        </a>
        <ul
          class="
            list-none
            p-0
            m-0
            hidden
            lg:flex lg:align-items-center
            select-none
            lg:flex-row
            surface-section
            border-1
            lg:border-none
            surface-border
            right-0
            top-100
            z-1
            shadow-none
            lg:shadow-none
            absolute
            lg:static
          "
        >
          <li>
            <router-link to="/dispatcher">
              <a
                v-ripple
                class="
                  flex
                  p-3
                  lg:px-3 lg:py-2
                  align-items-center
                  text-600
                  hover:text-900 hover:surface-100
                  font-medium
                  border-round
                  cursor-pointer
                  transition-duration-150 transition-colors
                  p-ripple
                "
              >
                <i
                  class="pi pi-cog text-base lg:text-2xl mr-2 lg:mr-0"
                ></i>
                <span class="block lg:hidden font-medium">Settings</span>
              </a>
            </router-link>
          </li>
          
         <!-- <li>
            <a>
                <Button
                  label="Sair"
                  icon="pi pi-sign-out"
                  class="w-full bg-orange-500 border-red-900"
                  type="submit"
                  @click="Logout"
                ></Button>
            </a>
          </li>-->
        </ul>
      </div>
      <!-- ContentPage -->
      <ContentCMP />
    </div>
  </div>
</template>

<script>
import ContentCMP from "../components/home/ContentCMP.vue";
import MenuItemCMP from "../components/home/MenuItemCMP.vue";


export default {
  name: "HomePage",
  components: { 
    ContentCMP, 
    MenuItemCMP  
  },  
  data(){
    return {
      visibleLeft: false
    }
  },
};
</script>

<style>
#app {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>