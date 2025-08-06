'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getToken } from '@/config/utils';
import React from 'react';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const token =
    typeof window !== 'undefined'
      ? localStorage.getItem('wittur_gatepass_token')
      : null;
  if (!token) {
    return (
      <div className='flex items-center justify-center h-screen flex-col'>
        <Card>
          <CardContent>
            <p>Please log in to access this page.</p>
            <Button className='my-4'>
              <a href='/login'>Go to Login</a>
            </Button>
            <p className='text-sm text-gray-500 mt-2'>
              If you don't have an account, please contact your administrator.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return <>{children}</>;
}
