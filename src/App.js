import './App.css';
import { router } from '../src/routes/Routing'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { testrouter } from '../src/routes/TestRouting'

import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  )
}

export default App;
