import { cloneElement, ReactElement } from 'react';
import {
  Controller as HookFormController,
  ControllerProps as HookFormControllerProps,
  FieldValues,
} from 'react-hook-form';

export type ControllerPropsWithOptionalRenderer<T extends FieldValues> = Omit<HookFormControllerProps<T>, 'render'> & {
  render?: HookFormControllerProps<T>['render'];
};

export type ControllerProps<T extends FieldValues> = {
  children?: ReactElement;
  controllerProps?: ControllerPropsWithOptionalRenderer<T>;
  render?: HookFormControllerProps<T>['render'];
};

export function Controller<T extends FieldValues>({ children, controllerProps, render }: ControllerProps<T>) {
  if (controllerProps) {
    if (!render && children) {
      return (
        <HookFormController
          render={({ field: { ref: _ref, ...field } }) => cloneElement(children, field)}
          {...controllerProps}
        />
      );
    }
    if (render) return <HookFormController render={render} {...controllerProps} />;
  }
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return children!;
}
