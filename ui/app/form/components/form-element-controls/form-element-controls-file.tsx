import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';

const FormElementControlsFile = ({
  formDetails,
  setFormDetails,
}: {
  formDetails: any[];
  setFormDetails: (type: any) => void;
}) => {
  const [formValues, setFormValues] = React.useState({
    id: uuidv4(),
    formElementType: 'file',
    label: '',
    maxFileSize: '',
    accepts: '',
    required: 'no',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormValues((prev) => {
      const accepts = prev.accepts.split(',').filter(Boolean);
      if (checked) {
        accepts.push(value);
      } else {
        const index = accepts.indexOf(value);
        if (index > -1) {
          accepts.splice(index, 1);
        }
      }
      return { ...prev, accepts: accepts.join(',') };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('formValues :>> ', formValues);

    setFormDetails((prev: any) => [...prev, formValues]);
    setFormValues({
      id: uuidv4(),
      formElementType: 'file',
      label: '',
      maxFileSize: '',
      accepts: '',
      required: 'no',
    });
  };

  return (
    <div>
      {' '}
      <form onSubmit={handleSubmit}>
        <div>
          <label className='text-[10px] font-bold'>Label</label>
          <br />
          <Input
            type='text'
            required
            name='label'
            value={formValues.label}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className='text-[10px] font-bold'>Maximum File Size</label>
          <br />
          <Input
            type='number'
            name='maxFileSize'
            value={formValues.maxFileSize}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className='text-[10px] font-bold'>Accepts</label>
          <div className='flex'>
            <label className='text-[10px] mr-1 font-semibold'>
              <input
                type='checkbox'
                value={'jpg'}
                className=' h-[10px] mr-[1px]'
                checked={formValues.accepts.includes('jpg')}
                onChange={handleRadioChange}
              />
              JPG
            </label>
            <label className='text-[10px] mr-1 font-semibold'>
              <input
                type='checkbox'
                value={'png'}
                className=' h-[10px] mr-[1px]'
                checked={formValues.accepts.includes('png')}
                onChange={handleRadioChange}
              />
              PNG
            </label>
            <label className='text-[10px] mr-1 font-semibold'>
              <input
                type='checkbox'
                value={'pdf'}
                className=' h-[10px] mr-[1px]'
                checked={formValues.accepts.includes('pdf')}
                onChange={handleRadioChange}
              />
              PDF
            </label>
            <label className='text-[10px] mr-1 font-semibold'>
              <input
                type='checkbox'
                value={'xlsx'}
                className=' h-[10px] mr-[1px]'
                checked={formValues.accepts.includes('xlsx')}
                onChange={handleRadioChange}
              />
              XLSX
            </label>
            <label className='text-[10px] mr-1 font-semibold'>
              <input
                type='checkbox'
                value={'docx'}
                className=' h-[10px] mr-[1px]'
                checked={formValues.accepts.includes('docx')}
                onChange={handleRadioChange}
              />
              DOCX
            </label>
          </div>
        </div>
        <div>
          <label className='text-[10px] font-bold'>Required</label>
          <RadioGroup
            defaultValue='no'
            onValueChange={(value) =>
              setFormValues((prev) => ({ ...prev, required: value }))
            }>
            <div className='flex items-center space-x-2'>
              <RadioGroupItem value='yes' id='yes' />
              <Label htmlFor='yes' className='text-[10px]'>
                Yes
              </Label>
            </div>
            <div className='flex items-center space-x-2'>
              <RadioGroupItem value='no' id='no' />
              <Label htmlFor='no' className='text-[10px]'>
                No
              </Label>
            </div>
          </RadioGroup>
        </div>

        <Button
          variant={'default'}
          size={'sm'}
          type='submit'
          className='mt-5 w-full'>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default FormElementControlsFile;
