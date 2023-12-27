import Image from 'next/image'
import Link from 'next/link'
import Header_app from './components/header'
import Form_html from './components/form'
import './page.module.css'
import UserList from './userList/page'
export default function Home() {
  return (
    <>
    <main className='flex justify-center mt-5' >
    <UserList/>
      
    </main>
    </>
  )
}

