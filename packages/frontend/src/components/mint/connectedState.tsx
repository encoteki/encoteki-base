import React from 'react'
import Image from 'next/image'
import { useAccount } from 'wagmi'
import { useMintCtx } from '../../context/mintContext'
import IdentityAddress from '../identity'
import Error from '@/assets/icon/error.png'

export default function ConnectedState() {
  const { isConnected } = useAccount()
  const { isSufficientFund } = useMintCtx()

  return (
    <>
      <header>
        <h1 className="text-lg font-medium">Pay</h1>
      </header>
      <div className="border-t-2 border-[#E6E8E6]"></div>
      {isConnected && (
        <section className="w-full">
          <div
            className={`bg-red-[#FBE8E2] mb-8 flex gap-2 rounded-xl p-4 ${isSufficientFund ? 'hidden' : 'block'}`}
          >
            <Image src={Error} alt="Error" className="h-6 w-6" />
            <p>Insufficient fund. Please top up then try again.</p>
          </div>

          <IdentityAddress />
        </section>
      )}
    </>
  )
}
