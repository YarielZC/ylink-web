'use client'

import { useAuth } from '@/context/AuthContext'
import { Button, Separator, Tooltip } from '@heroui/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { startTransition } from 'react'

export default function FooterForm() {
  const router = useRouter()
  const { fetchUser } = useAuth()

  const loginWithTestUser = async () => {
    console.log('soi')
    const formData = new FormData()

    formData.append('username', 'test_user')
    formData.append('password', 'test_user_password')

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      body: formData,
    })

    const data = await response.json()

    await fetchUser()
    startTransition(() => {
      router.refresh()
      router.push('/dashboard')
    })
  }
  return (
    <section className="gap-3 flex flex-col justify-center max-sm:gap-2">
      <Separator orientation="horizontal" className="w-11/12 mx-auto" />
      <p className="mx-auto max-sm:text-sm">
        ¿No tienes una cuenta aún?{' '}
        <Link className="text-blue-600" href="/">
          Crear cuenta
        </Link>
      </p>
      <p className="mx-auto">o</p>
      <div className="mx-auto">
        <Tooltip delay={0} closeDelay={400}>
          <Tooltip.Trigger>
            <Button onPress={loginWithTestUser} variant="outline">
              Inicia sesión como usuario de prueba
            </Button>
          </Tooltip.Trigger>
          <Tooltip.Content>
            <Tooltip.Arrow />
            <div className="flex flex-col gap-1">
              <p className="font-semibold">¿Solo quieres echar un vistazo?</p>
              <p>Entra con este usuario de prueba</p>
            </div>
          </Tooltip.Content>
        </Tooltip>
      </div>
    </section>
  )
}
