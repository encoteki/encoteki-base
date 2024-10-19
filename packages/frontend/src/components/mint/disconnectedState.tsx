import React from 'react'
import Image from 'next/image'
import Coinbase from '@/assets/coinbase.png'

export default function DisconnectedState() {
  return (
    <>
      <header className="pb-6">
        <h1 className="text-lg font-medium">Select payment method</h1>
      </header>
      <div className="border-t-2 border-[#E6E8E6]"></div>
      <section className="w-full">
        <div className="flex items-center gap-4 px-4 py-4">
          <Image
            src={Coinbase}
            alt=""
            width={32}
            height={32}
            className="rounded-full"
          />
          <p className="font-medium">Smart Wallet</p>
        </div>
      </section>
    </>
  )
}
