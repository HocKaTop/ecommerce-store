import React from 'react'
import Container from '@/components/ui/container'
import Link from 'next/link'
import MainNav from '@/components/main-nav'
import {getCategories} from '@/actions/get-categories'
import NavBarActions from '@/components/navbar-actions'

const Navbar = async () => {
  // TODO: Получить storeId из контекста или параметров
  const storeId = "ec8dca4a-8681-4947-a903-cc541ea2887f"; // Временное решение
  const categories = await getCategories(storeId);
  
  return (
    <div className='border-b'>
        <Container>
         <div className='relative px-4 sm:px-6 lg:px8 flex h-16 items-center'> 
            <Link href="/" className='ml-4 flex lg:ml-0 gap-x-2'>
                <p className='font-bold text-xl'> STORE</p>
            </Link>
            <MainNav data={categories} />
            <NavBarActions />
        </div>
        </Container>
    </div>
  )
}

export default Navbar