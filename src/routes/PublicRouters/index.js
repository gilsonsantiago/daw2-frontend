
import PaginaLogin from "../../pages/PaginaLogin";
import PaginaCadastroUsuario from "../../pages/PaginaCadastroUsuario";

const PublicRoutes = {
    path: '/',
    children: [
        {
            path: '',
            element: <PaginaLogin />
        },
        {
            path: 'usuario',
            element: <PaginaCadastroUsuario />
        }
    ]
}

export default PublicRoutes;