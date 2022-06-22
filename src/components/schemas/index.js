import * as yup from "yup";

export const basicSchema = yup
    .object()
    .shape({
        FirstName: yup
            .string()
            .required("First name is required"),
        LastName: yup
            .string()
            .required("Last name is required"),
        Email: yup
            .string()
            .email("Email is invalid")
            .required("Email is required"),
        Phone: yup
            .string()
            .required("Phone is required"),
        Address: yup
            .string()
            .required("Address is required"),
        email: yup
            .string()
            .email("Please enter a valid email")
            .required("Required")
    });