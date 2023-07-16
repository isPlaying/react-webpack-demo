import React, { FC, lazy, Suspense } from 'react';

interface ILazyWrapperProps {
  path: string;
}

const LazyWrapper: FC<ILazyWrapperProps> = ({ path }) => {
  const LazyComponent = lazy(() => import(/* webpackChunkName: "[request]" */ `@/components${path}`));
  return (
    <Suspense fallback={<div>loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
};

export default LazyWrapper;
