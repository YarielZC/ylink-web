'use client'

import { Button, Separator, Tooltip } from '@heroui/react'
import Link from 'next/link'

export default function FooterForm() {
  return (
    <section className="gap-3 flex flex-col justify-center">
      <Separator orientation="horizontal" className="w-11/12 mx-auto" />
      <p className="mx-auto">
        ¿No tienes una cuenta aún?{' '}
        <Link className="text-blue-600" href="/">
          Crear cuenta
        </Link>
      </p>
      <p className="mx-auto">o</p>
      <div className="mx-auto">
        <Tooltip delay={0} closeDelay={400}>
          <Tooltip.Trigger>
            <Button variant="outline">Inicia sesión como usuario de prueba</Button>
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
