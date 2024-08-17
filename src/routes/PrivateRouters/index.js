import PaginaCadastro from "../../pages/PaginaCadastro";
import PaginaTarefa from "../../pages/PaginaTarefa";

const PrivateRoutes = {
    path : '/',
    children: [
        {
           path: 'tarefa',
           element: <PaginaTarefa />
        },
        {
            path: 'cadastro',
            element: <PaginaCadastro />
         }
    ]
}

export default PrivateRoutes;