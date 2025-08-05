import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const FormElementControlsImage = ({
  formDetails,
  setFormDetails,
}: {
  formDetails: any[];
  setFormDetails: (type: any) => void;
}) => {
  const [formValues, setFormValues] = React.useState({
    id: uuidv4(),
    formElementType: 'image',
    label: '',
    placeholder: '',
    required: 'no',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('formValues :>> ', formValues);

    setFormDetails((prev: any) => [...prev, formValues]);
    setFormValues({
      id: uuidv4(),
      formElementType: 'image',
      label: '',
      placeholder: '',
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
          <label className='text-[10px] font-bold'>Placeholder</label>
          <br />
          <Input
            type='text'
            required
            name='placeholder'
            value={formValues.placeholder}
            onChange={handleChange}
          />
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

export default FormElementControlsImage;
