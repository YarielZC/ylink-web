'use client'

import { useAuth } from '@/context/AuthContext'
import { getApiErrorMessage } from '@/utils/api-errors'
import { Eye, EyeSlash, Lock, Person } from '@gravity-ui/icons'
import {
  Button,
  Checkbox,
  cn,
  ErrorMessage,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from '@heroui/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function BaseLoginForm() {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [serverError, setServerError] = useState('')
  const router = useRouter()
  const { fetchUser } = useAuth()

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        body: formData,
        credentials: 'include',
      })

      const data = await response.json()

      if (!response.ok) {
        const message = getApiErrorMessage(response.status, data)
        setServerError(message)
        return
      }

      router.push('/dashboard')
      await fetchUser()
    } catch (e) {
      setServerError('Error de conexión, verifica tu internet')
    }
  }

  return (
    <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
      <TextField
        isRequired
        name="username"
        type="text"
        className="flex flex-col gap-2"
        validate={(value) => {
          if (!value) return 'Este campo no puede quedar vacío.'

          return null
        }}>
        <Label className="font-normal">Nombre de usuario o Email</Label>
        <div className="flex flex-col relative">
          <Person className="absolute left-3 w-5 h-5 top-3 pointer-events-none text-[#71717A]" />
          <Input
            className="bg-[#f2f4f6] rounded-md font-light pl-10 py-3"
            placeholder="Introduzca su usuario o email"
          />
        </div>

        <FieldError />
      </TextField>

      <TextField
        isRequired
        name="password"
        type="password"
        className="flex flex-col gap-2"
        validate={(value) => {
          if (!value) return 'Este campo no puede quedar vacío.'

          return null
        }}>
        <Label className="font-normal">Contraseña</Label>

        <div className="flex flex-col relative">
          <Lock className="absolute left-3 w-5 h-5 top-3 pointer-events-none text-[#71717A]" />

          <Input
            className="bg-[#f2f4f6] rounded-md font-light px-10 py-3"
            placeholder="Introduza su contraseña"
            type={passwordVisible ? 'text' : 'password'}
          />

          <button
            type="button"
            className="absolute right-3 top-3 flex items-center justify-center outline-none hover:text-foreground transition-colors cursor-pointer text-[#71717A]"
            onClick={() => setPasswordVisible(!passwordVisible)}>
            {passwordVisible ? <Eye className="w-5 h-5" /> : <EyeSlash className="w-5 h-5" />}
          </button>
        </div>
        <FieldError />
      </TextField>

      <Checkbox variant="secondary">
        <Checkbox.Content className="font-normal">
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          Recuérdame
        </Checkbox.Content>
      </Checkbox>

      <div className="flex flex-col gap-2 mt-4">
        <Button className={cn('rounded-md w-full py-6')} type="submit">
          Iniciar Sesión
        </Button>
        {serverError && <ErrorMessage className="text-sm mx-auto">{serverError}</ErrorMessage>}
      </div>
    </Form>
  )
}
