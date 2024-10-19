import { useMintCtx } from '../../context/mintContext'

import Image from 'next/image'
import Checkmark from '../../assets/success.png'

export default function TxConfirmation() {
  const { setTxSuccess, hash } = useMintCtx()

  const handleClick = () => {
    setTxSuccess(false)
  }

  const txURL = process.env.NEXT_PUBLIC_TX_URL

  return (
    <div className="relative h-auto w-[400px] rounded-3xl bg-white drop-shadow-xl">
      <header className="p-6">
        <h1 className="text-lg font-medium">Thank you!</h1>
      </header>
      <main className="flex flex-col gap-8 p-6">
        <div className="m-auto">
          <Image src={Checkmark} alt="Success" width={260} height={260} />
        </div>
        <section className="space-y-2 px-8 text-center">
          <p className="text-lg">Payment Successful!</p>
          <p className="text-sm text-[#515351]">
            Thank you for your payment, Encoteki is now yours!
          </p>
        </section>

        <div className="flex flex-col gap-2">
          <a href={`${txURL}${hash}`} target="_blank" rel="noopener noreferrer">
            <button className="w-full rounded-[32px] bg-[#246234] py-3 hover:bg-green-900">
              <p className="font-medium text-white">View Transaction Detail</p>
            </button>
          </a>

          <button
            onClick={handleClick}
            type="button"
            className="w-full rounded-[32px] bg-white py-3"
          >
            <p className="font-medium text-[#246234]">Return to Home</p>
          </button>
        </div>
      </main>
    </div>
  )
}
