import { observer } from 'mobx-react-lite';
import { TextFieldInput, TextFieldInputProps } from './TextFieldInput';
import React, { ChangeEvent } from 'react';
import { Field, FieldProps, useField } from 'formik';

type TextFieldProps = TextFieldWithFormikProps & FieldProps;

const TextField = (props: TextFieldProps): JSX.Element => {
    const { field: fieldProps, ...otherProps } = props;
    const [field, meta, helpers] = useField(fieldProps.name);

    const error = meta.touched && meta.error;

    const onChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        helpers.setTouched(true);
        helpers.setValue(event.target.value);
    };

    return (
        <TextFieldInput
            value={field.value}
            onChange={onChange}
            error={Boolean(error)}
            helperText={error}
            {...otherProps}
        />
    );
};

export type TextFieldWithFormikProps = TextFieldInputProps & {
    name: string;
};

/***
 * Обертка для компонента TextField для корректной работы с формиком
 * @props @see {TextFieldWithFormikProps}
 */
export const TextFieldWithFormik = observer((props: TextFieldWithFormikProps): JSX.Element => {
    return <Field component={TextField} {...props} />;
});
