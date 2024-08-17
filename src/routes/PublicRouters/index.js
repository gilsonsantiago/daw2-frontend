
import PaginaLogin from "../../pages/PaginaLogin";

const PublicRoutes = {
    path : '/',
    children: [
        {
           path: 'login',
           element: <PaginaLogin />
        }
    ]
}  

export default PublicRoutes;