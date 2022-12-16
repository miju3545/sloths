import React from 'react';
import { Outlet } from 'react-router-dom';

const DynamicIndex = React.lazy(() => import('./pages/index'));
const DynamicLayouts = React.lazy(() => import('./pages/_layouts'));
const DynamicFoliagesIndex = React.lazy(() => import('./pages/foliages/index'));
const DynamicSlothsIndex = React.lazy(() => import('./pages/sloths/index'));
const DynamicFoliagesId = React.lazy(() => import('./pages/foliages/[id]'));
const DynamicSlothsId = React.lazy(() => import('./pages/sloths/[id]'));

export const routes = [
  {
    path: '/',
    element: <Outlet />,
    children: [
      { path: '/', element: <DynamicIndex />, index: true },
      { path: '/_layouts', element: <DynamicLayouts /> },
      { path: '/foliages', element: <DynamicFoliagesIndex />, index: true },
      { path: '/sloths', element: <DynamicSlothsIndex />, index: true },
      { path: '/foliages/:id', element: <DynamicFoliagesId /> },
      { path: '/sloths/:id', element: <DynamicSlothsId /> },
    ],
  },
];

export const pages = [
  { route: '/' },
  { route: '/_layouts' },
  { route: '/foliages' },
  { route: '/sloths' },
  { route: '/foliages/:id' },
  { route: '/sloths/:id' },
];
