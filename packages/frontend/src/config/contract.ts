import { abi } from './contract-abi'

const smartContractAddress: `0x${string}` = process.env
  .NEXT_PUBLIC_SMART_CONTRACT_ADDRESS as `0x${string}`

const contractConfig = {
  abi,
  address: smartContractAddress,
} as const

export default contractConfig
