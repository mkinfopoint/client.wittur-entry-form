'use client';
import React, { useState } from 'react';
import { useGetEntryQuery } from '@/redux/slices/entry-slice';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from './ui/input';
import { Button } from './ui/button';
import EntryAdd from './entry-add';

const EntryView = () => {
  const { data, isLoading, isError, error } = useGetEntryQuery('entry');

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {JSON.stringify(error)}</div>;
  }

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Department</TableHead>
            <TableHead className='text-right'></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((entry: any) => (
            <TableRow key={entry.id}>
              <TableCell className='font-medium'>{entry.name}</TableCell>
              <TableCell>{entry.email}</TableCell>
              <TableCell>{entry.phone}</TableCell>
              <TableCell>{entry.age}</TableCell>
              <TableCell>{entry.department}</TableCell>
              <TableCell className='text-right'></TableCell>
            </TableRow>
          ))}
        </TableBody>
        <EntryAdd />
      </Table>
    </div>
  );
};

export default EntryView;
