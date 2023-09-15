// Created by Vite Router https://www.npmjs.com/package/vite-plugin-router
  // @ts-nocheck
  // prettier-ignore
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const File1 = lazy(() => import('./app/index'));



function Error404() {
  return <div>404</div>;
}

function Loading() {
  return <div>Loading...</div>;
}

interface IAppRoutesProps {
  custom404?: React.ReactNode;
  customLoading?: React.ReactNode;
}

export function AppRoutes({ custom404: Custom404, customLoading: CustomLoading }: IAppRoutesProps) {
  return (
    <BrowserRouter>
      <Suspense fallback={CustomLoading || <Loading />}>
        <Routes>
          
          <Route 
            element={<File1 />} 
            path="/" 
            key="/"  
          />
          <Route
            path="*"
            element={Custom404 || <Error404 />}
          />
        </Routes>
      </Suspense> 
    </BrowserRouter>
  );
}
