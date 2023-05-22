import { getUser } from '@/lib/auth'
import Image from 'next/image'
export function Profile() {
  const { name, avatarUrl } = getUser()
  return (
    <div className="flex items-center gap-3 text-left">
      <Image
        src={avatarUrl}
        width={40}
        height={40}
        alt={name}
        className="h-10 w-10 rounded-full"
      />
      <p className="max-w-[148px] text-sm leading-snug">
        Bem vindo {name}
        <a
          href="/api/auth/logout"
          className="hover: block text-sm text-red-300 text-red-400"
        >
          Quero sair
        </a>
      </p>
    </div>
  )
}
