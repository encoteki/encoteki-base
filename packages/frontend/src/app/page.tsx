import Image from 'next/image'
import Link from 'next/link'

import Background from '../assets/home-bg.png'
import Cendry from '../assets/nft/CENDRY.png'
import Gajara from '../assets/nft/GAJARA.png'
import Kanghoon from '../assets/nft/KANGHOON.png'
import Komesi from '../assets/nft/KOMESI.png'
import Owen from '../assets/nft/OWEN.png'
import Tiggy from '../assets/nft/TIGGY.png'
import Navbar from '@/components/navbar'

export default function App() {
  return (
    <main>
      <div className="relative flex h-screen flex-col bg-[#F6F6EC] p-14">
        <Image
          src={Background}
          alt="Error"
          className="absolute right-0 top-0 h-screen w-3/5"
        />
        <Navbar />

        <main className="z-10 flex flex-1 items-center">
          <section className="flex w-full items-center justify-center gap-16">
            <div className="w-[448px] space-y-6">
              <div className="space-y-6 pb-6">
                <h1 className="text-6xl">Mint and earn with Encoteki</h1>
                <p className="">
                  Mint, earn, and make a difference. Our animal-themed NFTs fuel
                  non-profit projects that aim to build a better world through
                  technology and community-driven sustainable initiatives.
                </p>
              </div>

              <Link href="/mint">
                <button className="w-[160px] rounded-[32px] bg-[#246234] py-4">
                  <span className="font-medium text-white">Mint</span>
                </button>
              </Link>
            </div>

            <div className="grid h-auto w-auto grid-cols-3 grid-rows-2 gap-8">
              <Image
                src={Cendry}
                alt="Cendry"
                width={232}
                height={232}
                className="m-auto rounded-[32px]"
              />
              <Image
                src={Gajara}
                alt="Gajara"
                width={232}
                height={232}
                className="m-auto rounded-[32px]"
              />
              <Image
                src={Kanghoon}
                alt="Kanghoon"
                width={232}
                height={232}
                className="m-auto rounded-[32px]"
              />
              <Image
                src={Komesi}
                alt="Komesi"
                width={232}
                height={232}
                className="m-auto rounded-[32px]"
              />
              <Image
                src={Owen}
                alt="Owen"
                width={232}
                height={232}
                className="m-auto rounded-[32px]"
              />
              <Image
                src={Tiggy}
                alt="Tiggy"
                width={232}
                height={232}
                className="m-auto rounded-[32px]"
              />
            </div>
          </section>
        </main>
      </div>
    </main>
  )
}
