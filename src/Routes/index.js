import { useRoutes } from "react-router-dom";
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import { useSelector } from "react-redux";
import AppHeader from "../Components/Layout/Header";

export function AppRoute() {
    const {isAuth} = useSelector((state)=>{
        return{
            isAuth: state.auth?.isAuth
        }
    })
    let allRoutes = PublicRoutes;
    if(isAuth?.token){
        allRoutes = PrivateRoutes;
    }
    let element = useRoutes(allRoutes)
    return isAuth ? (
        <AppHeader>
            {element}
        </AppHeader>) : element
}