import React, { Suspense } from 'react';

export default function lazyLoading(children) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {children}
    </Suspense>
  );
}
