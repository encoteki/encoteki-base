'use client'

import { useAccount } from 'wagmi'
import {
  Avatar,
  Identity,
  Name,
  Badge,
  Address,
} from '@coinbase/onchainkit/identity'

export default function IdentityAddress() {
  const { address } = useAccount()
  return (
    <Identity
      address={address}
      schemaId="0xf8b05c79f090979bf4a80270aba232dff11a10d9ca55c4f88de95317970f0de9"
      className="w-full rounded-2xl bg-[#F0FAF3] p-4"
    >
      <Avatar />
      <Name address={address}>
        <Badge />
      </Name>
      <Address />
    </Identity>
  )
}
