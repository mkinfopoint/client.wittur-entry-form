'use client';

import React from 'react';
import FormElementPicker from './form-element-picker';

const Sidebar = ({
  formElementSelected,
  formElementControlShow,
  setFormElementSelected,
  setFormElementControlShow,
  setFormDetails,
  formDetails,
}: {
  formElementSelected: string | null;
  formElementControlShow: boolean;
  formDetails: any[];
  setFormElementSelected: (type: string | null) => void;
  setFormDetails: (type: any) => void;
  setFormElementControlShow: (show: boolean) => void;
}) => {
  return (
    <div className='p-4'>
      <h2 className='text-lg font-semibold mb-4'>Form Elements</h2>
      <FormElementPicker
        setFormElementSelected={setFormElementSelected}
        formElementSelected={formElementSelected}
        setFormElementControlShow={setFormElementControlShow}
        formElementControlShow={formElementControlShow}
        setFormDetails={setFormDetails}
        formDetails={formDetails}
      />
    </div>
  );
};

export default Sidebar;
