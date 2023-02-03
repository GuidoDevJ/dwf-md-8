import React,{Suspense} from 'react'

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import {
    RecoilRoot,
  } from 'recoil';
import { CreateUser } from '../pages/CreateUser';
import { EditPet } from '../pages/EditPet';
import { FormLoginUser } from '../pages/FormLoginUser';
import { Home } from '../pages/Home';
import { MisDatos } from '../pages/MisDatos';
import { PetsReported } from '../pages/PetsReported';
import { Report } from '../pages/Report';
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