import React from 'react'
import {useFormik} from "formik";
import * as yup from "yup";

const Validation = () => {
    const inputValue = [
        {
            label: "FirstName",
            type: "text",
            name: "FirstName"
        }, {
            label: "LastName",
            type: "text",
            name: "LastName"
        }, {
            label: "Email",
            type: "text",
            name: "Email"
        }, {
            label: "Address",
            type: "text",
            name: "Address"
        }, {
            label: "Phone",
            type: "text",
            name: "Phone"
        }
    ]

    const initialValues = {
        FirstName: '',
        LastName: '',
        Email: '',
        Address: '',
        Phone: ''
    };

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const validationSchema = yup.object({
        FirstName: yup
            .string()
            .required("FirstName is Required !")
            .min(6, "Minimum 6 charachter "),
        LastName: yup
            .string()
            .required("LastName is Required !")
            .min(6, "Minimum 6 charachter "),
        Email: yup
            .string()
            .email("Email Is Invalid !")
            .required("Email is Required"),
        Address: yup
            .string()
            .required("Address is Required !"),
        Phone: yup
            .string()
            .min(11, "minimum 11 number")
            .required("phone Number is required")
            .matches(phoneRegExp, "Phone number is not valid")
    });

    const onSubmit = (values, {resetForm}) => {
        console.log(values);
        resetForm({values: ""});
    };

    const formik = useFormik({initialValues, onSubmit, validationSchema});

    console.log("visited Fields", formik.values);

    return (
        <div>

        </div>
    )
}

export default Validation