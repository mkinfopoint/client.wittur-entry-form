import EntryView from '@/components/entry-view';
import React from 'react';

const Page = () => {
  return (
    <div>
      <div className='flex flex-1 flex-col gap-4 p-4 max-w-4xl mx-auto'>
        <h1 className='text-2xl font-bold'>Gate Pass Entry</h1>
        <p className='text-gray-600'>
          Please fill out the form below to create a gate pass.
        </p>
        {/* Gate Pass Form Component can be added here */}
        <EntryView />
      </div>
    </div>
  );
};

export default Page;
