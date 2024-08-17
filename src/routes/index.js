import { useRoutes } from "react-router-dom";

import PrivateRoutes from "./PrivateRouters";
import PublicRoutes  from "./PublicRouters";

export default function Routes(){
    return useRoutes([PrivateRoutes, PublicRoutes]);
}