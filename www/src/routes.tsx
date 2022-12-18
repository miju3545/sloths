import React from 'react';
import { Outlet } from 'react-router-dom';
import Index from './pages/index';
import Layouts from './pages';
import PortfoliosIndex from './pages/portfolios/index';
import SlothsIndex from './pages/sloths/index';
import PortfoliosId from './pages/portfolios/[id]';
import SlothsId from './pages/sloths/[id]';

export const routes = [
  {
    path: '/',
    element: <Outlet />,
    children: [
      { path: '/', element: <Index />, index: true },
      { path: '/_layouts', element: <Layouts /> },
      // { path: '/bags', element: <BagsIndex />, index: true },
      { path: '/portfolios', element: <PortfoliosIndex />, index: true },
      { path: '/sloths', element: <SlothsIndex />, index: true },
      { path: '/portfolios/:id', element: <PortfoliosId /> },
      { path: '/sloths/:id', element: <SlothsId /> },
    ],
  },
];

export const pages = [
  { route: '/' },
  { route: '/_layouts' },
  { route: '/bags' },
  { route: '/portfolios' },
  { route: '/sloths' },
  { route: '/portfolios/:id' },
  { route: '/sloths/:id' },
];
