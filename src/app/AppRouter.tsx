import React from 'react';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Dashboard } from './layout/Dashboard';

export default function AppRouter() {
  const LoadingMessage = () => <div>Loading..,</div>;

  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingMessage />}>
        <Dashboard />
      </Suspense>
    </BrowserRouter>
  );
}
