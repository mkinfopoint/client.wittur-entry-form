'use client';
import React from 'react';
import FormElementControlsFile from './form-element-controls/form-element-controls-file';
import FormElementControlsInput from './form-element-controls/form-element-controls-input';
import FormElementControlsImage from './form-element-controls/form-element-controls-image';
import FormElementControlsRadio from './form-element-controls/form-element-controls-radio';
import FormElementControlsCheckbox from './form-element-controls/form-element-controls-checkbox';
import { Button } from '@/components/ui/button';
import {
  CircleDotIcon,
  CopyCheckIcon,
  FileInputIcon,
  FormInputIcon,
  ImageIcon,
  ImageUpIcon,
  PaperclipIcon,
  RadioIcon,
} from 'lucide-react';

const FormElementPicker = ({
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
  const handleFormElementSelect = (type: string) => {
    setFormElementSelected(type);
    setFormElementControlShow(true);
  };

  return (
    <div>
      {/* picker for text input, image, file input , radio input, checkbox input */}
      {!formElementControlShow && (
        <div>
          <h3 className='text-lg font-semibold mb-4'>Select Form Element</h3>
          <ul className='space-y-2'>
            <li
              className='p-2 bg-white shadow rounded cursor-pointer hover:bg-gray-100 text-xs flex items-center gap-x-2 '
              onClick={() => handleFormElementSelect('input')}>
              <FormInputIcon size={14} />
              Input
            </li>
            <li
              className='p-2 bg-white shadow rounded cursor-pointer hover:bg-gray-100 text-xs flex items-center gap-x-2 '
              onClick={() => handleFormElementSelect('image')}>
              <ImageUpIcon size={14} />
              Image Input
            </li>
            <li
              className='p-2 bg-white shadow rounded cursor-pointer hover:bg-gray-100 text-xs flex items-center gap-x-2 '
              onClick={() => handleFormElementSelect('file')}>
              <PaperclipIcon size={14} />
              File Upload
            </li>
            <li
              className='p-2 bg-white shadow rounded cursor-pointer hover:bg-gray-100 text-xs flex items-center gap-x-2 '
              onClick={() => handleFormElementSelect('radio')}>
              <CircleDotIcon size={14} />
              Radio Input
            </li>
            <li
              className='p-2 bg-white shadow rounded cursor-pointer hover:bg-gray-100 text-xs flex items-center gap-x-2 '
              onClick={() => handleFormElementSelect('checkbox')}>
              <CopyCheckIcon size={14} />
              Checkbox Input
            </li>
          </ul>
        </div>
      )}

      {formElementControlShow && (
        <div className='mt-4'>
          <h3 className='text-lg font-semibold mb-4'>
            Selected Element: {formElementSelected}
          </h3>

          {formElementSelected === 'input' && (
            <FormElementControlsInput
              setFormDetails={setFormDetails}
              formDetails={formDetails}
            />
          )}
          {formElementSelected === 'image' && (
            <FormElementControlsImage
              setFormDetails={setFormDetails}
              formDetails={formDetails}
            />
          )}
          {formElementSelected === 'file' && (
            <FormElementControlsFile
              setFormDetails={setFormDetails}
              formDetails={formDetails}
            />
          )}
          {formElementSelected === 'radio' && (
            <FormElementControlsRadio
              setFormDetails={setFormDetails}
              formDetails={formDetails}
            />
          )}
          {formElementSelected === 'checkbox' && (
            <FormElementControlsCheckbox
              setFormDetails={setFormDetails}
              formDetails={formDetails}
            />
          )}

          {/* Here you can add controls for the selected form element */}
          <Button
            variant={'ghost'}
            size={'sm'}
            className='mt-2 w-full'
            onClick={() => setFormElementControlShow(false)}>
            Cancel
          </Button>
        </div>
      )}
    </div>
  );
};

export default FormElementPicker;
