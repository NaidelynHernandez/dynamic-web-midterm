import './App.css';
import {createBrowserRouter, RouterProvider, Route} from "react-router-dom";
import Home from "./pages/Home"; 
import     from "./pages/";
import     from "./pages/";




const router = createBrowserRouter([
  {
    path: "/",
    element: <List/>,
  },
  {
    path: "/article/:id",
    element: <Article/>,
  }, 
]);


function App() {
  return (
     <div className="App">
            <RouterProvider router={router} />

     
     </div>
  );
}


export default App;
