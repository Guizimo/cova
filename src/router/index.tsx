import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense, type ReactNode } from 'react';
import { Loader2 } from 'lucide-react';

const Home = lazy(() => import('@/pages/home'));
const Generator = lazy(() => import('@/pages/generator'));
const Features = lazy(() => import('@/pages/features'));
const Contact = lazy(() => import('@/pages/contact'));
const FAQ = lazy(() => import('@/pages/faq'));
const About = lazy(() => import('@/pages/about'));
const NotFound = lazy(() => import('@/pages/not-found'));

const pageFallback = (
  <div className="flex h-screen w-full items-center justify-center bg-black">
    <Loader2 className="h-8 w-8 animate-spin text-white/60" />
  </div>
);

const withSuspense = (node: ReactNode): ReactNode => <Suspense fallback={pageFallback}>{node}</Suspense>;

export const router = createBrowserRouter([
  {
    path: '/',
    element: withSuspense(<Home />)
  },
  {
    path: '/features',
    element: withSuspense(<Features />)
  },
  {
    path: '/about',
    element: withSuspense(<About />)
  },
  {
    path: '/faq',
    element: withSuspense(<FAQ />)
  },
  {
    path: '/generator',
    element: withSuspense(<Generator />)
  },
  {
    path: '/contact',
    element: withSuspense(<Contact />)
  },
  {
    path: '*',
    element: withSuspense(<NotFound />)
  }
]);
