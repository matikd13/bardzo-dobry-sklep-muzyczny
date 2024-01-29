import { TextField, TextFieldProps } from '@mui/material';
import { InputBaseProps } from '@mui/material/InputBase';
import classNames from 'classnames';
import { ControllerProps, FieldValues } from 'react-hook-form';
import { Controller } from './Controller';

export type TextInputProps<T extends FieldValues = FieldValues> = Omit<TextFieldProps, 'inputProps'> & {
  controllerProps?: Omit<ControllerProps<T>, 'render'>;
  inputProps?: InputBaseProps['inputProps'];
};

export function TextInput<T extends FieldValues>({
  controllerProps,
  inputProps,
  ...textFieldProps
}: TextInputProps<T>) {
  const required = !!controllerProps?.rules?.required || textFieldProps.required;
  const rules = { ...controllerProps?.rules, required };

  return (
    <Controller controllerProps={controllerProps ? ({ ...controllerProps, rules } as ControllerProps<T>) : undefined}>
      <TextField
        required={required}
        inputProps={{
          ...inputProps,
          className: classNames('overflow-hidden', inputProps?.className),
        }}
        {...textFieldProps}
        style={{ borderRadius: '4px' }}
      />
    </Controller>
  );
}
