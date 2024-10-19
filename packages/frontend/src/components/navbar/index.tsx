'use client'

import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import Logo from '../../assets/encoteki-logo.png'
import Coinbase from '@/assets/coinbase.png'
import WalletConnect from '@/assets/walletconnect.jpg'
import Metamask from '@/assets/metamask.png'

import { useAccount, useConnect } from 'wagmi'
import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownBasename,
  WalletDropdownDisconnect,
  WalletDropdownFundLink,
  WalletDropdownLink,
} from '@coinbase/onchainkit/wallet'
import {
  Avatar,
  Name,
  Address,
  Identity,
  EthBalance,
} from '@coinbase/onchainkit/identity'
import { color } from '@coinbase/onchainkit/theme'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

type icon = { icon: StaticImageData }

export default function Navbar() {
  const { isConnected } = useAccount()
  const { connectors, connect } = useConnect()

  const walletIcons: icon[] = [
    {
      icon: Coinbase,
    },
    {
      icon: WalletConnect,
    },
    {
      icon: Metamask,
    },
  ]

  return (
    <header className="absolute left-14 right-14 z-50 flex items-center justify-between">
      <Link href="/">
        <Image
          src={Logo}
          alt="Encoteki Logo"
          className="tablet:w-24 absolute left-0 top-0 w-12"
        />
      </Link>

      <div
        className={`relative flex h-auto ${isConnected ? 'items-center' : ''} gap-6`}
      >
        <Link href="/dao">
          <button className="w-[160px] rounded-[32px] border border-[#246234] bg-white py-4 hover:bg-[#F0FAF3]">
            <span className="font-medium text-[#246234]">DAO</span>
          </button>
        </Link>

        {isConnected ? (
          <Wallet>
            <ConnectWallet className="h-full">
              <Avatar className="h-6 w-6" />
              <Name />
            </ConnectWallet>
            <WalletDropdown>
              <Identity className="px-4 pb-2 pt-3" hasCopyAddressOnClick>
                <Avatar />
                <Name />
                <Address className={color.foregroundMuted} />
                <EthBalance />
              </Identity>

              <WalletDropdownBasename />
              <WalletDropdownLink
                icon="wallet"
                href="https://keys.coinbase.com"
              >
                Wallet
              </WalletDropdownLink>
              <WalletDropdownFundLink />
              <WalletDropdownDisconnect />
            </WalletDropdown>
          </Wallet>
        ) : (
          <div className="z-50 space-x-2">
            <Accordion
              type="single"
              collapsible
              className="rounded-[32px] border border-[#246234] bg-white px-6"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>Connect Wallet</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-2">
                    {connectors.map((connector, index: number) => (
                      <button
                        key={connector.uid}
                        onClick={() => connect({ connector })}
                        type="button"
                        className="w-full bg-white py-2 hover:text-green-900"
                      >
                        <div className="flex items-center gap-2">
                          <Image
                            src={connector.icon ?? walletIcons[index]?.icon}
                            alt={connector.name}
                            width={21}
                            height={21}
                            className="rounded-md"
                          />
                          {connector.name}
                        </div>
                      </button>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        )}
      </div>
    </header>
  )
}
