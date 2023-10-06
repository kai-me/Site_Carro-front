import HeaderAuth from '@/components/auth/HeaderAuth'
import { FormSignIn } from '@/components/auth/SignIn/FormSignIn/Index'

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col justify-center space-y-3 px-12">
        <HeaderAuth>Login</HeaderAuth>
        <FormSignIn />
      </div>
    </div>
  )
}
