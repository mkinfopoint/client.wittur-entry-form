import { AppProviders } from '@/components/app-provider';
import React from 'react';

const AppLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <AppProviders>{children}</AppProviders>;
};

export default AppLayout;
