import React, { useState } from 'react';
import { TableCell, TableFooter, TableRow } from '@/components/ui/table';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useAddEntryMutation } from '@/redux/slices/entry-slice';
import toast from 'react-hot-toast';

const EntryAdd = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    department: '',
  });

  const [addEntry] = useAddEntryMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formValues);
    if (
      formValues.name &&
      formValues.email &&
      formValues.phone &&
      formValues.age &&
      formValues.department
    ) {
      try {
        await addEntry(formValues).unwrap();
        setFormValues({
          name: '',
          email: '',
          phone: '',
          age: '',
          department: '',
        });
        toast.success('Entry created successfully!');
      } catch (error) {
        console.log('error :>> ', error);
      }
    } else {
      toast.error('Please fill all fields before submitting.');
    }
  };

  return (
    <TableFooter>
      <TableRow>
        <TableCell>
          <Input
            type='text'
            placeholder='Enter name'
            className='w-full'
            name='name'
            value={formValues.name}
            onChange={handleChange}
          />
        </TableCell>
        <TableCell>
          <Input
            type='email'
            placeholder='Enter Email'
            className='w-full'
            name='email'
            value={formValues.email}
            onChange={handleChange}
          />
        </TableCell>
        <TableCell>
          <Input
            type='text'
            placeholder='Enter Phone'
            className='w-full'
            name='phone'
            value={formValues.phone}
            onChange={handleChange}
          />
        </TableCell>
        <TableCell>
          <Input
            type='number'
            placeholder='Enter Age'
            className='w-full'
            name='age'
            value={formValues.age}
            onChange={handleChange}
          />
        </TableCell>
        <TableCell>
          <Input
            type='text'
            placeholder='Enter Department'
            className='w-full'
            name='department'
            value={formValues.department}
            onChange={handleChange}
          />
        </TableCell>
        <TableCell className='text-right'>
          <Button variant={'default'} type='button' onClick={handleSubmit}>
            Save
          </Button>
        </TableCell>
      </TableRow>
    </TableFooter>
  );
};

export default EntryAdd;
