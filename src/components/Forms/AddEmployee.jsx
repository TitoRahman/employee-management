import React from "react";
import {Formik, Form} from "formik";
import * as Yup from "yup";

// Form
import Textfield from "../FormsUI/Textfield";

// MUI imports
import Grid from "@mui/material/Grid";

const INITIAL_FORM_STATE = {
    FirstName: "",
    LastName: "",
    Email: "",
    Address: "",
    Phone: ""    
};

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const FORM_VALIDATION = Yup
    .object()
    .shape({
        FirstName: Yup
            .string()
            .min(3, "First Name must be at least 3 characters")
            .max(20, "First Name must be at most 20 characters")
            .required("First Name is required"),
        LastName: Yup
            .string()
            .min(3, "Last Name must be at least 3 characters")
            .max(20, "Last Name must be at most 20 characters")
            .required("Last Name is required"),
        Email: Yup
            .string()
            .email("Invalid email address")
            .required("Email is a required field"),
        Address: Yup
            .string()
            .max(20, "Address must be at most 50 characters")
            .required("Address is a required field"),
        Phone: Yup
            .string()
            .matches(phoneRegExp, 'Phone number is not valid')
            .required("Phone is required"),
    });

const AddEmployee = () => {
    return (
        <Formik
            initialValues={{
                ...INITIAL_FORM_STATE
            }}
            validationSchema={FORM_VALIDATION}
            onSubmit={(values, {reset}) => {
                console.log(values);
                reset();
            }}
        >
            <Form>
                <Grid container="container" spacing={2}>
                    <Grid item="item" xs={12}>
                        <Textfield label="Enter First Name" name="FirstName" required/>
                    </Grid>

                    <Grid item="item" xs={12}>
                        <Textfield label="Enter Last Name" name="LastName" required/>
                    </Grid>

                    <Grid item="item" xs={12}>
                        <Textfield label="Enter Email" name="Email" required/>
                    </Grid>

                    <Grid item="item" xs={12}>
                        <Textfield label="Enter Address" name="Address" required multiline rows={3}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Textfield name="Phone" label="Phone" required/>
                    </Grid>
                </Grid>
            </Form>
        </Formik>
    );
};

export default AddEmployee;
