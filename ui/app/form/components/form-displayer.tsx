'use client';

import React from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  CheckCircle2Icon,
  CircleDotIcon,
  CopyCheckIcon,
  FormInputIcon,
  ImageUpIcon,
  PaperclipIcon,
} from 'lucide-react';

const FormDisplayer = ({
  formElementSelected,
  formElementControlShow,
  setFormElementSelected,
  setFormElementControlShow,
  formDetails,
}: {
  formElementSelected: string | null;
  formElementControlShow: boolean;
  formDetails: any[];
  setFormElementSelected: (type: string | null) => void;
  setFormElementControlShow: (show: boolean) => void;
}) => {
  const data = {
    input: {
      icon: FormInputIcon,
      title: 'Text Input Field',
      subtext:
        'Enter single-line or multi-line text based on the configured field requirements.',
    },
    file: {
      icon: PaperclipIcon,
      title: 'Document Upload',
      subtext:
        'Upload documents such as PDFs, Word files, or other supported formats.',
    },
    image: {
      icon: ImageUpIcon,
      title: 'Image Upload Field',
      subtext: 'Upload supported image formats like JPG, PNG, or GIF.',
    },
    radio: {
      icon: CircleDotIcon,
      title: 'Select One Option',
      subtext: 'Choose a single option from the predefined list of choices.',
    },
    checkbox: {
      icon: CopyCheckIcon,
      title: 'Multiple Choice Options',
      subtext: 'Select one or more options from the available list.',
    },
  };

  type FormElementType = keyof typeof data;

  return (
    <div>
      <div className='grid w-full items-start gap-4'>
        {formDetails.map((detail, index) => {
          const key = detail.formElementType as FormElementType;
          const elementData = data[key];
          const excludeKeys = ['id', 'formElementType', 'label'];
          return (
            <Alert key={index}>
              <elementData.icon size={20} />
              <AlertTitle>
                <span className='text-blue-800 pe-1'>{detail.label} -</span>
                {elementData.title}
              </AlertTitle>
              <AlertDescription>
                <p>{elementData.subtext}</p>
                <ul className='list-inside list-disc text-sm'>
                  {Object.entries(detail)
                    .filter(([key]) => !excludeKeys.includes(key))
                    .map(([key, value]) => (
                      <li key={key}>
                        <span className='capitalize font-medium'>
                          {key.replace(/([A-Z])/g, ' $1')}:
                        </span>{' '}
                        {String(value)}
                      </li>
                    ))}
                </ul>
              </AlertDescription>
              <AlertDescription className='flex items-center gap-2 mt-2'>
                <CheckCircle2Icon className='text-green-500' size={16} />
                <span className='text-xs text-gray-500'>
                  Form Element ID: {detail.id}
                </span>
              </AlertDescription>
            </Alert>
          );
        })}
      </div>
    </div>
  );
};

export default FormDisplayer;
