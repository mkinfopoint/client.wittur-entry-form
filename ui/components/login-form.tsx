'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const [formValues, setFormValues] = useState({
    emp_code: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    if (formValues.emp_code && formValues.password) {
      toast.success('Login successful!');
    }

    const existing_empCode = '12345';
    const existing_password = 'password';

    if (
      formValues.emp_code === existing_empCode &&
      formValues.password === existing_password
    ) {
      localStorage.setItem('wittur_gatepass_token', formValues.emp_code);
      window.location.href = '/gate-pass-entry';
      setFormValues({
        emp_code: '',
        password: '',
      });
    } else {
      toast.error('Invalid Employee ID or Password. Please try again.');
      setFormValues({
        emp_code: '',
        password: '',
      });
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('wittur_gatepass_token');
    if (token) {
      window.location.href = '/gate-pass-entry';
    }
  }, []);

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader className='text-center'>
          <CardTitle className='text-xl'>Welcome back</CardTitle>
          <CardDescription>
            Login with your Employee ID and Password
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className='grid gap-6'>
              <div className='grid gap-6'>
                <div className='grid gap-3'>
                  <Label htmlFor='emp_code'>Emp Id</Label>
                  <Input
                    id='emp_code'
                    type='emp_code'
                    placeholder='Enter your Employee ID'
                    autoFocus
                    autoComplete='emp_code'
                    name='emp_code'
                    required
                    value={formValues.emp_code}
                    onChange={handleChange}
                  />
                </div>
                <div className='grid gap-3'>
                  <div className='flex items-center'>
                    <Label htmlFor='password'>Password</Label>
                  </div>
                  <Input
                    id='password'
                    type='password'
                    required
                    placeholder='Enter your Password'
                    name='password'
                    value={formValues.password}
                    onChange={handleChange}
                  />
                </div>
                <Button type='submit' className='w-full'>
                  Login
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
