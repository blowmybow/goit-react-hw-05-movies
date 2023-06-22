import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Header from 'components/Header/Header.jsx';
import Footer from 'components/Footer/Footer.jsx';
import ToastWrapper from 'components/ToastContainer/ToastContainer';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
      <ToastWrapper />
    </>
  );
};

export default Layout;
