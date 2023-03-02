import React,{Suspense,lazy} from 'react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import {
    RecoilRoot,
  } from 'recoil';
import { FormLoginUser } from '../pages/FormLoginUser';
const CreateUser = lazy(()=>import('../pages/CreateUser'))
const Home = lazy(() => import("../pages/Home"));
const EditPet = lazy(()=>import("../pages/EditPet"))
const MisDatos = lazy(()=>import('../pages/MisDatos'))
const PetsReported = lazy(()=>import('../pages/PetsReported'))
const Report = lazy(()=>import('../pages/Report'))
const routes = createBrowserRouter([
    {
        path:"/",
        element:<FormLoginUser/>
    },
    {
        path:"/create",
        element:<CreateUser/>
    },
    {
        path:"/home",
        element:<Home/>
    },
    {
        path:"/report",
        element:<Report/>
    },
    {
        path:"/misdatos",
        element:<MisDatos/>
    },
    {
        path:"/petsreported",
        element:<PetsReported/>
    },
    {
        path:"/editpet/:id",
        element:<EditPet/>
    },
])


const Routes = () => {
  return (
    <RecoilRoot>
        <Suspense fallback={<div>Loading...</div>}>
            <RouterProvider router={routes}/>
        </Suspense>
    </RecoilRoot>
  )
}

export default Routes