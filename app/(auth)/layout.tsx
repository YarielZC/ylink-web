export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#eff3fc] min-h-screen mx-auto flex justify-center items-center">
      {children}
    </div>
  )
}
