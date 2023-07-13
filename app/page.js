import Comments from '@/components/Comments';
import Fallback from '@/components/Fallback';
import Posts from '@/components/Posts';
import Spinner from '@/components/Spinner';
import Users from '@/components/Users';
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const page = () => {
  return (
    <>
      <div className="container mx-auto mt-10">
        <div className="feed-all grid grid-cols-12 gap-5">
          <div className="left col-span-8 shadow-2xl p-5 rounded-xl">
            <ErrorBoundary FallbackComponent={Fallback}>
              <Suspense fallback={<Spinner></Spinner>}>
                <Posts></Posts>
              </Suspense>
            </ErrorBoundary>


          </div>
          <div className="right col-span-4 shadow-2xl p-5 rounded-xl">
            <ErrorBoundary FallbackComponent={Fallback}>
              <Suspense fallback={<Spinner></Spinner>}>
                <Users></Users>
              </Suspense>
            </ErrorBoundary>

          </div>
        </div>

        <div className="comments mt-10">
          <ErrorBoundary FallbackComponent={Fallback}>
            <Suspense fallback={<Spinner></Spinner>}>
              <Comments></Comments>
            </Suspense>
          </ErrorBoundary>


        </div>

      </div>
    </>
  );
};

export default page;