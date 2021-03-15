import React, { FC, useState } from 'react'
import { Button } from 'ui/Button'
import { Input } from 'ui/Input'
import { signIn, signUp } from 'logic/auth'
import { RouteComponentProps } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'

export const AuthPage: FC<RouteComponentProps> = ({ location }) => {
  const locationState = location.state as { from: string } | undefined

  const [isSignUp, setIsSignup] = useState(false)

  const { formState, control, handleSubmit, setError, errors } = useForm()

  const handleAuthButtonPress = handleSubmit(async ({ email, password }) => {
    try {
      if (isSignUp) {
        await signUp(email, password)
      } else {
        await signIn(email, password, locationState?.from)
      }
    } catch (e) {
      console.log(e)
      if (e.code === 'auth/invalid-email') {
        setError('email', { message: 'Некорректный email' })
      } else if (e.code === 'auth/wrong-password') {
        setError('password', {
          message: 'Неверный email и/или пароль, проверьте и введите ещё раз',
        })
      } else if (e.code === 'auth/weak-password') {
        setError('password', { message: 'Пароль недостаточно сложный' })
      }
    }
  })

  return (
    <div className="flex flex-1 justify-center items-center">
      <div className="w-128 bg-white rounded-lg overflow-hidden shadow-lg p-12">
        <h2 className="text-2xl text-primary-700 mb-8 text-center">
          {isSignUp ? 'Регистрация' : 'Авторизация'}
        </h2>

        <Controller
          name="email"
          as={Input}
          control={control}
          type="email"
          containerClassName="mb-4"
          placeholder="Email"
          disabled={formState.isSubmitting}
          errorMessage={formState.errors['email']?.message}
          defaultValue=""
          required
        />

        <Controller
          name="password"
          as={Input}
          control={control}
          type="password"
          containerClassName="mb-6"
          placeholder="Пароль"
          disabled={formState.isSubmitting}
          errorMessage={
            errors.password
              ? 'Пароль должен быть как минимум 6 символов в длинну'
              : formState.errors['password']?.message
          }
          defaultValue=""
          rules={{ minLength: 6 }}
          required
        />

        {!isSignUp && (
          <p className="text-right text-sm font-medium text-primary-600 hover:text-primary-400 cursor-pointer">
            Забыли пароль?
          </p>
        )}

        <Button
          className="w-full mt-6"
          disabled={formState.isSubmitting}
          spinner={formState.isSubmitting}
          onClick={handleAuthButtonPress}
        >
          {isSignUp ? 'ЗАРЕГИСТРИРОВАТЬ' : 'АВТОРИЗИРОВАТЬСЯ'}
        </Button>

        <p
          className="mt-6 text-center text-sm font-medium text-primary-600 hover:text-primary-400 cursor-pointer"
          onClick={formState.isSubmitting ? undefined : () => setIsSignup(!isSignUp)}
        >
          {isSignUp ? 'У меня уже есть эккаунт' : 'Зарегистрировать эккаунт'}
        </p>
      </div>
    </div>
  )
}
