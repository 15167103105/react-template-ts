import React, { Suspense } from 'react';

export default function lazyLoading(children) {
  return (
    <Suspense fallback={<div>加载中</div>}>
      {children}
    </Suspense>
  );
}
