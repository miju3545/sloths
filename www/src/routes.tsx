import React from 'react';
import { Outlet } from 'react-router-dom';

const DynamicIndex = React.lazy(() => import('./pages/index'));
const DynamicLayouts = React.lazy(() => import('./pages/_layouts'));
const DynamicBagsIndex = React.lazy(() => import('./pages/bags/index'));
const DynamicPortfoliosIndex = React.lazy(
  () => import('./pages/portfolios/index'),
);
const DynamicSlothsIndex = React.lazy(() => import('./pages/sloths/index'));
const DynamicPortfoliosId = React.lazy(() => import('./pages/portfolios/[id]'));
const DynamicSlothsId = React.lazy(() => import('./pages/sloths/[id]'));

export const routes = [
  {
    path: '/',
    element: <Outlet />,
    children: [
      { path: '/', element: <DynamicIndex />, index: true },
      { path: '/_layouts', element: <DynamicLayouts /> },
      { path: '/bags', element: <DynamicBagsIndex />, index: true },
      { path: '/portfolios', element: <DynamicPortfoliosIndex />, index: true },
      { path: '/sloths', element: <DynamicSlothsIndex />, index: true },
      { path: '/portfolios/:id', element: <DynamicPortfoliosId /> },
      { path: '/sloths/:id', element: <DynamicSlothsId /> },
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
