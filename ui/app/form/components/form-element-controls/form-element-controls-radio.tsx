import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const FormElementControlsRadio = ({
  formDetails,
  setFormDetails,
}: {
  formDetails: any[];
  setFormDetails: (type: any) => void;
}) => {
  const [formValues, setFormValues] = React.useState({
    id: uuidv4(),
    formElementType: 'radio',
    label: '',
    options: '',
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
      formElementType: 'checkbox',
      label: '',
      options: '',
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
          <label className='text-[10px] font-bold'>
            Options (Separate by | )
          </label>
          <br />
          <Input
            type='text'
            placeholder='Separate by |'
            name='options'
            value={formValues.options}
            onChange={handleChange}
          />
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

export default FormElementControlsRadio;
