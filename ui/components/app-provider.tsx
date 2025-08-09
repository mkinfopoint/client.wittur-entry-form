'use client';

import { store } from '@/redux/store';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Provider store={store}>{children}</Provider>
      <Toaster position='top-left' reverseOrder={false} gutter={8} />
    </>
  );
}
