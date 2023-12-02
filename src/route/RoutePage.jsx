import { lazy, Suspense } from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';

const Header = lazy(() => import('../modules/Header/Header'));
const Hero = lazy(() => import('../modules/Hero/Hero'));
const Main = lazy(() => import('../modules/Main/Main'));
const About = lazy(() => import('../modules/About/About'));
const Electricity = lazy(() => import('../modules/Electricity/Electricity'));
const Cases = lazy(() => import('../modules/Cases/Cases'));
const Faq = lazy(() => import('../modules/Faq/Faq'));
const Contacts = lazy(() => import('../modules/Contacts/Contacts'));
// const Footer = lazy(() => import('../modules/Footer/Footer'));

const RoutePage = () => {
  return (
    <Suspense fallback={<p>...loading</p>}>
      <Header />
      <Hero />
      <Main />
      <About />
      <Electricity />
      <Cases />
      <Faq />
      <Contacts />
      {/* 
      
      <Footer /> */}
      {/* <Routes>
        <Route path="/#main" />
      </Routes> */}
    </Suspense>
  );
};

export default RoutePage;
