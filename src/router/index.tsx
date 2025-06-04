import { createBrowserRouter } from 'react-router-dom';
import Home from '@/pages/home';
import Generator from '@/pages/generator';
import Features from '@/pages/features';
import Contact from '@/pages/contact';
import FAQ from '@/pages/faq';
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
    path: '/template',
    element: <div>Template</div>
  },
  {
    path: '/docs',
    element: <div>Docs</div>
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
    path: '/about',
    element: <div>About</div>
  },
  {
    path: '*',
    element: <NotFound />
  }
]);
