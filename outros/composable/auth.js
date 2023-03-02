import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { ref, onMounted } from 'vue';




const isAuthenticated = ref(false);
const usuario = ref('')

let auth
onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user, credentials) => {
        console.log(user)
        if (user, credentials.user) {
            console.log(user.email.value)
            isAuthenticated.value = true;
            usuario.value = credentials.user.email
            console.log(isAuthenticated.value)
        } else {
            isAuthenticated.value = false;
            usuario.value = 'null';
            console.log(isAuthenticated.value)
        }
    })
})

export { isAuthenticated, usuario }


