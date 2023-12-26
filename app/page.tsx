import Image from 'next/image'
import Link from 'next/link'
import newUser from './user/newUser/page'
import Header_app from './components/header'
import Form_html from './components/form'
import './page.module.css'
export default function Home() {
  return (
    <>
    <main className='flex justify-center mt-5' >
    <Form_html/>
      
     <Link href="./user">go to user</Link> 
    </main>
    </>
  )
}

