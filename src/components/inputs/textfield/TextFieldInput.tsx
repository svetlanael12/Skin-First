import { observer } from 'mobx-react-lite';
import { IconButton, InputAdornment, TextField as MUITextField, TextFieldProps } from '@mui/material';
import React, { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export type TextFieldInputProps = TextFieldProps & {};

export const TextFieldInput = observer((props: TextFieldInputProps) => {
    const { value, onChange, type, fullWidth = true, ...otherProps } = props;

    // флаг для отображения пароля в текстовом виде
    const [visibilityEyeIcon, setVisibilityEyeIcon] = useState(false);

    const isPassword = type === 'password';

    const typePassword = visibilityEyeIcon ? 'text' : 'password';

    const toggleVisibilityEye = (): void => {
        setVisibilityEyeIcon(!visibilityEyeIcon);
    };

    const inputProps = {
        endAdornment: (
            <React.Fragment>
                {isPassword && (
                    <InputAdornment position="end">
                        <IconButton size="small" onClick={toggleVisibilityEye}>
                            {visibilityEyeIcon ? <Visibility fontSize="small" /> : <VisibilityOff fontSize="small" />}
                        </IconButton>
                    </InputAdornment>
                )}
            </React.Fragment>
        ),
    };

    return (
        <MUITextField
            value={value}
            onChange={onChange}
            type={isPassword ? typePassword : type}
            fullWidth={fullWidth}
            InputLabelProps={{ shrink: false }}
            InputProps={inputProps}
            {...otherProps}
        />
    );
});
