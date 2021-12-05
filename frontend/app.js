import Navigo from 'navigo';
import { Home } from "./views/home"

const router = new Navigo('/');

router
    .on("/", Home)
    // .on("/login", Login)
    // .on("/signup", Signup)
    .resolve()

export { router } 