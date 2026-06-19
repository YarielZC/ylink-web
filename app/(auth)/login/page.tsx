'use client'

import YlinkIcon from '@/components/ylinkIcon'
import { useAuth } from '@/context/AuthContext'
import LoginForm from '@/features/login/components/loginForm'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Login() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (user) {
      router.replace('/dashboard')
    }
  }, [user, router])

  if (user || loading) return null

  return (
    <section className="flex flex-col items-center gap-6 max-sm:gap-3.5">
      <div className="flex flex-col items-center gap-2">
        <YlinkIcon />
        <h1 className="text-2xl font-bold tracking-wide">ylink</h1>
      </div>
      <LoginForm />
      <div className="flex gap-8 text-sm text-neutral-500">
        <Link href="/">Política de usuario</Link>
        <Link href="/">Términos de servicios</Link>
      </div>
    </section>
  )
}
