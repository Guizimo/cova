import { createBrowserRouter } from 'react-router-dom';
import Home from '@/pages/home';
import Generator from '@/pages/generator';
import Features from '@/pages/features';
import Contact from '@/pages/contact';
import FAQ from '@/pages/faq';
import About from '@/pages/about';
import NotFound from '@/pages/not-found';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/features',
    element: <Features />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/faq',
    element: <FAQ />
  },
  {
    path: '/generator',
    element: <Generator />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '*',
    element: <NotFound />
  }
]);
