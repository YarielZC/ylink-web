'use client'

import { Card } from '@heroui/react'
import BaseLoginForm from './baseLoginForm'
import FooterForm from './footerForm'
import { useRef, useState } from 'react'

export default function LoginForm() {
  return (
    <Card className="p-12 flex flex-col gap-6 max-w-screen max-sm:p-4 max-sm:gap-2">
      <div className="flex justify-center flex-col gap-2 mb-6 max-sm:gap-1">
        <h2 className="text-lg text-center">Bienvenido de vuelta</h2>
        <p className="text-sm text-center text-neutral-500">
          Por favor entre sus datos para iniciar sesión.
        </p>
      </div>
      <BaseLoginForm />

      <FooterForm />
    </Card>
  )
}
