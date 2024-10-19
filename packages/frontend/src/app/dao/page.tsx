import React from 'react'
import { Metadata } from 'next'

import Navbar from '@/components/navbar'
import DAOList from '@/components/dao/daoList'

export const metadata: Metadata = {
  title: 'DAO',
  description: 'Encoteki DAO',
}

export default function DAOPage() {
  return (
    <>
      <div className="flex h-screen flex-col bg-[#F6F6EC] p-8">
        <Navbar />

        <main className="flex flex-1 items-center justify-center">
          <DAOList />
        </main>
      </div>
    </>
  )
}
