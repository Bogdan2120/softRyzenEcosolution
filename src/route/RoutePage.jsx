import { lazy, Suspense } from 'react';

const Header = lazy(() => import('../modules/Header/Header'));
const Hero = lazy(() => import('../modules/Hero/Hero'));
const Main = lazy(() => import('../modules/Main/Main'));
const About = lazy(() => import('../modules/About/About'));
const Electricity = lazy(() => import('../modules/Electricity/Electricity'));
const Cases = lazy(() => import('../modules/Cases/Cases'));
const Faq = lazy(() => import('../modules/Faq/Faq'));
const Contacts = lazy(() => import('../modules/Contacts/Contacts'));
const Footer = lazy(() => import('../modules/Footer/Footer'));

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
      <Footer />
    </Suspense>
  );
};

export default RoutePage;
