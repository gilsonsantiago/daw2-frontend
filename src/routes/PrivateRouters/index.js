import PaginaCadastro from "../../pages/PaginaCadastro";
import PaginaTarefa from "../../pages/PaginaTarefa";

import ProtecterRouter from '../../security/ProtecterRouter';

const PrivateRoutes = {
    path: '/private/',
    children: [
        {
            path: 'tarefa',
            element: <ProtecterRouter element={<PaginaTarefa />} />
        },
        {
            path: 'cadastro',
            element: <ProtecterRouter element={<PaginaCadastro />} />
        }
    ]
}

export default PrivateRoutes;