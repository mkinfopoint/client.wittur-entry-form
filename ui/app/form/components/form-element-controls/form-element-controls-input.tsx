import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const FormElementControlsInput = ({
  formDetails,
  setFormDetails,
}: {
  formDetails: any[];
  setFormDetails: (type: any) => void;
}) => {
  const [formValues, setFormValues] = React.useState({
    id: uuidv4(),
    formElementType: 'input',
    label: '',
    placeholder: '',
    required: 'no',
    type: 'text',
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
      formElementType: 'input',
      label: '',
      placeholder: '',
      required: 'no',
      type: 'text',
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

        <div>
          <label className='text-[10px] font-bold'>Type</label>
          <Select
            name='type'
            value={formValues.type}
            onValueChange={(value) =>
              setFormValues((prev) => ({ ...prev, type: value }))
            }>
            <SelectTrigger className='w-full'>
              <SelectValue placeholder='Theme' className='text-xs' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='text' className='text-xs'>
                Text
              </SelectItem>
              <SelectItem value='long-text' className='text-xs'>
                Long Text
              </SelectItem>
              <SelectItem value='number' className='text-xs'>
                Number
              </SelectItem>
              <SelectItem value='date' className='text-xs'>
                Date
              </SelectItem>
              <SelectItem value='email' className='text-xs'>
                Email
              </SelectItem>
              <SelectItem value='password' className='text-xs'>
                Password
              </SelectItem>
              <SelectItem value='tel' className='text-xs'>
                Telephone
              </SelectItem>
            </SelectContent>
          </Select>
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

export default FormElementControlsInput;
