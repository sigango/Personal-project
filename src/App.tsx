import React, { useEffect } from 'react';
import './App.scss';
import './configs/antd/customized.scss';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';
import Login from './pages/Login';

//import AppRoute from './routes/routes';

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
      <Login />
      {/* <AppRoute /> */}

    </>
  );
}

export default App;
