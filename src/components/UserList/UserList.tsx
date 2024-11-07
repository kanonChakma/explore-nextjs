'use client'

import { User } from '@/app/user/page'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

interface userListProps {
    user: User
}

const UserList:React.FC<userListProps> = ({user}) => {
  const {id, name, username, email, address} = user
  const currentPath = usePathname();
  const targetPath = `/user/${id}`;

  return (
    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border p-3'>
       {currentPath !== targetPath ? (
        <Link href={targetPath}>
          <p className='text-3xl text-orange-500 cursor-pointer'>{name}</p>
        </Link>
      ) : (
        <p className='text-3xl text-orange-500'>{name}</p>
      )}
       <h2>{username}</h2>
       <span>{email}</span>
    </div>
  )
}

export default UserList
