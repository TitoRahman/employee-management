import React from "react";
import {Button} from "@mui/material";
import {useFormikContext} from "formik";

const ButtonWrapper = ({
    children,
    ...otherProps
}) => {
    const {submitForm} = useFormikContext();

    const submitHandler = () => {
        submitForm();
    };

    const configButton = {
        onClick: submitHandler,
        ...otherProps,
        variant: "contained",
        color: "primary",
        fullWidth: true
    };
    return <Button {...configButton}>{children}</Button>;
};

export default ButtonWrapper;
