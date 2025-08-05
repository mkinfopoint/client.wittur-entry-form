'use client';

import React from 'react';
import Sidebar from './components/sidebar';
import FormDisplayer from './components/form-displayer';

const Page = () => {
  const [formElementSelected, setFormElementSelected] = React.useState<
    string | null
  >(null);

  const [formElementControlShow, setFormElementControlShow] =
    React.useState<boolean>(false);

  const [formDetails, setFormDetails] = React.useState<any[]>([
    {
      id: '64c76485-4cb3-48ab-ba1b-d0e5f82a1ca8',
      formElementType: 'image',
      label: 'df',
      placeholder: 'fd',
      required: 'yes',
    },
    {
      id: 'a1f77f16-94bf-41a4-97ef-25e99ce16d95',
      formElementType: 'input',
      label: 'Name',
      placeholder: 'Enter your Name',
      required: 'yes',
      type: 'text',
    },
    {
      id: 'e46d3910-cb50-4a5d-b10c-8ecdfdfdf65c',
      formElementType: 'input',
      label: 'Email',
      placeholder: 'Enter your Email Address',
      required: 'no',
      type: 'email',
    },
    {
      id: '10b39e9b-4ea4-4545-8b3e-8eb53e2ecd7e',
      formElementType: 'image',
      label: 'Passport Size Photo',
      placeholder: 'Upload your photo here',
      required: 'no',
    },
    {
      id: '7db6bdf8-dd05-4039-a75c-c1ed219d6ffe',
      formElementType: 'file',
      label: 'Resume',
      maxFileSize: '5',
      accepts: 'pdf,jpg,png',
      required: 'yes',
    },
    {
      id: 'f4c4656f-6628-426f-9038-f4eff0fae7a3',
      formElementType: 'checkbox',
      label: 'Gender',
      options: 'Male | Female | Others',
    },
    {
      id: '699cff98-881d-4399-b139-0f66b445c641',
      formElementType: 'checkbox',
      label: 'Lanugages Known',
      options: 'Tamil | English | Hindi | Telugu | Malayalam',
    },
  ]);

  return (
    <div className='min-h-screen flex flex-row  bg-gray-100'>
      {/* sidebar */}
      <div className='w-64 bg-white shadow-md'>
        <Sidebar
          formElementSelected={formElementSelected}
          formElementControlShow={formElementControlShow}
          setFormElementSelected={setFormElementSelected}
          setFormElementControlShow={setFormElementControlShow}
          setFormDetails={setFormDetails}
          formDetails={formDetails}
        />
      </div>
      <div className='flex-1 p-4'>
        <FormDisplayer
          formElementSelected={formElementSelected}
          formElementControlShow={formElementControlShow}
          setFormElementSelected={setFormElementSelected}
          setFormElementControlShow={setFormElementControlShow}
          formDetails={formDetails}
        />
      </div>
    </div>
  );
};

export default Page;
