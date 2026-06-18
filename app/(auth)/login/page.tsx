import YlinkIcon from '@/components/ylinkIcon'
import LoginForm from '@/features/login/components/loginForm'
import Link from 'next/link'

export default function Login() {
  return (
    <section className="flex flex-col items-center gap-6">
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
