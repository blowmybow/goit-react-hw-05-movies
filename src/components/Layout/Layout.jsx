import React from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader/Loader';
import Header from 'components/Header/Header.jsx';
import Footer from 'components/Footer/Footer.jsx';
import ToastWrapper from 'components/ToastContainer/ToastContainer';

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
