import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./components/layouts/mainLayout";
import Todos from "./components/pages/Todos";
import Todo from "./components/pages/Todo";

const router = createBrowserRouter(createRoutesFromElements(<Route path ="/" element={MainLayout}>
  <Route index element={Todos} />
  <Route path = "/todo/:id" element={Todo}/>
</Route>)
);


const App = () => {
  return <RouterProvider router =  {router}/>;
};

export default App;
