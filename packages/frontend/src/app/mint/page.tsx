import React from 'react'
import { Metadata } from 'next'

import Mint from '../../components/mint'
import Navbar from '@/components/navbar'

export const metadata: Metadata = {
  title: 'Mint',
  description: 'Mint NFT',
}

export default function MintPage() {
  return (
    <>
      <div className="flex h-screen flex-col bg-[#F6F6EC] p-8">
        <Navbar />

        <main className="flex flex-1 items-center justify-center">
          <Mint />
        </main>
      </div>
    </>
  )
}
