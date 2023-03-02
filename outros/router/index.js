import { createRouter, createWebHashHistory } from "vue-router";
import { getAuth } from "@firebase/auth";

const auth = getAuth()

const routes = [


  { path: "/home", component: () => ('../pages/HomePage'), meta: { requiresAuth: true } },
  { path: "/dashboard", name: "dashboard", component: () => ('../pages/DashboardPage.vue'), meta: { requiresAuth: true } },
  { path: "/dispatcher", name: "dispatcher", component: () => ('../pages/DispatcherPage.vue'), meta: { requiresAuth: true } },
  { path: "/menssagem", name: "menssagem", component: () => ('../pages/MenssagemPage.vue'), meta: { requiresAuth: true } },
  { path: "/escritorio", name: "escritorio", component: () => ('../pages/EscritorioPage.vue'), meta: { requiresAuth: true } },
  { path: "/escritorio/contabilidade", name: "contabilidade", component: () => ('../pages/escritorio/ContabilidadePage.vue'), meta: { requiresAuth: true } },
  { path: "/escritorio/empresas", name: "empresas", component: () => ('../pages/escritorio/EmpresasPage.vue'), meta: { requiresAuth: true } },
  { path: "/escritorio/departamentos", name: "departamentos", component: () => ('../pages/escritorio/DepartamentosPage.vue'), meta: { requiresAuth: true } },
  { path: "/escritorio/usuarios", name: "usuarios", component: () => ('../pages/escritorio/UsuariosPage.vue'), meta: { requiresAuth: true } },
  { path: "/escritorio/permissoes", name: "permissoes", component: () => ('../pages/escritorio/PermissoesPage.vue'), meta: { requiresAuth: true } },




  { path: "/login", component: () => ('../pages/login/LoginPage.vue') },
  { path: "/register", name: "register", component: () => ('../pages/login/RegisterPage.vue') },
  { path: "/esqueceusenha", name: "esqueceusenha", component: () => ('../pages/login/EsqueceuSenhaPage.vue') },


];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    else return { left: 0, top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  if (to.path === '/login' && auth.currentUser) {
    next('/home')
    return;
  }

  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
    next('/login')
    return;
  }

  next();
})

export default router;
