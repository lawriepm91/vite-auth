import * as Yup from 'yup'
import { errors } from '../../utils'

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email(errors.validation.invalid_email)
    .required(errors.validation.required('Email')),
  password: Yup.string()
    .min(8, errors.validation.too_short('Password', 8))
    .max(50, errors.validation.too_long('Password', 50))
    .required(errors.validation.required('Password'))
})
