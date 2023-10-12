import { useLoginForm } from './useLoginForm'
import { Formik } from 'formik'
import { LoginSchema } from './LoginForm.schema'
import { Input } from '../Input'

export function LoginForm() {
  const state = useLoginForm()
  return (
    <Formik
      validationSchema={LoginSchema}
      initialValues={state.initialValues}
      onSubmit={state.handleSubmit}
    >
    {({ handleChange, values, handleSubmit, errors }) => (
      <form
        onSubmit={handleSubmit}
        className={'bg-white w-full md:w-1/2 p-5 rounded-xl flex-col align-end flex'}
      >
        <Input
          placeholder={'Email'}
          handleChange={handleChange('email')}
          value={values.email}
          error={errors.email}
          type={'email'}
        />
        <Input
          placeholder={'Password'}
          handleChange={handleChange('password')}
          value={values.password}
          error={errors.password}
          type={'password'}
        />
        <button type={'submit'} className={'bg-[#ADFC80] px-4 py-2 rounded-xl self-end'}>
          Login
        </button>
      </form>
    )}
    </Formik>
  )
}
