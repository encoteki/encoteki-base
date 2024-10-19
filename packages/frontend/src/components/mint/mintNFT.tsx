import React from 'react'

import { useAccount } from 'wagmi'
import { ConnectWallet } from '@coinbase/onchainkit/wallet'
import { useMintCtx } from '../../context/mintContext'

import ConnectedState from './connectedState'
import DisconnectedState from './disconnectedState'
import MintBtn from './mintBtn'
import TxConfirmation from './txConfirmation'
import costValue from '../../constant/costValue'

export default function MintNFT() {
  const { isConnected } = useAccount()
  const { txSuccess } = useMintCtx()

  return (
    <>
      {!txSuccess ? (
        <div className="relative w-[400px] space-y-4 rounded-3xl bg-white p-6 drop-shadow-xl">
          {isConnected ? <ConnectedState /> : <DisconnectedState />}

          <section className="space-y-3">
            <div className="flex justify-between font-medium">
              <p>Amount</p>
              <p>{costValue.ether} ETH</p>
            </div>

            {isConnected ? (
              <MintBtn />
            ) : (
              <ConnectWallet className="w-full bg-[#246234] hover:bg-green-900" />
            )}
          </section>
        </div>
      ) : (
        <TxConfirmation />
      )}
    </>
  )
}
