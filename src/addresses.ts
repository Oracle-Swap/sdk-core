import { ChainId, SUPPORTED_CHAINS, SupportedChainsType } from './chains'

type AddressMap = { [chainId: number]: string }

type ChainAddresses = {
  v3CoreFactoryAddress?: string
  multicallAddress: string
  quoterAddress?: string
  v3MigratorAddress?: string
  nonfungiblePositionManagerAddress?: string
  tickLensAddress?: string
  swapRouter02Address?: string
  v1MixedRouteQuoterAddress?: string
}

const DEFAULT_NETWORKS = [ChainId.COSTON2]

function constructSameAddressMap(address: string, additionalNetworks: ChainId[] = []): AddressMap {
  return DEFAULT_NETWORKS.concat(additionalNetworks).reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = address
    return memo
  }, {})
}

export const UNI_ADDRESSES: AddressMap = constructSameAddressMap('0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984', [])

export const UNISWAP_NFT_AIRDROP_CLAIM_ADDRESS = '0x8B799381ac40b838BBA4131ffB26197C432AFe78'

/**
 * @deprecated use V2_FACTORY_ADDRESSES instead
 */
export const V2_FACTORY_ADDRESS = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'
export const V2_FACTORY_ADDRESSES: AddressMap = {
  [ChainId.COSTON2]: '0xAf2977827a72e3CfE18104b0EDAF61Dd0689cd31'
}
/**
 * @deprecated use V2_ROUTER_ADDRESSES instead
 */
export const V2_ROUTER_ADDRESS = '0x12f523A693cC1614b8a04f62362f0F2c1b15dBA7'
export const V2_ROUTER_ADDRESSES: AddressMap = {
  [ChainId.COSTON2]: '0x12f523A693cC1614b8a04f62362f0F2c1b15dBA7'
}

const COSTON2_ADDRESSES: ChainAddresses = {
  multicallAddress: "0x411E2E15390639Cd553508907329Ea95F23D9Bf0"
}

export const CHAIN_TO_ADDRESSES_MAP: Record<SupportedChainsType, ChainAddresses> = {
  [ChainId.COSTON2]: COSTON2_ADDRESSES,
}

/* V3 Contract Addresses */
export const V3_CORE_FACTORY_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const v3CoreFactoryAddress = CHAIN_TO_ADDRESSES_MAP[chainId].v3CoreFactoryAddress
    if (v3CoreFactoryAddress)
      memo[chainId] = v3CoreFactoryAddress
    return memo
  }, {})
}

export const V3_MIGRATOR_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const v3MigratorAddress = CHAIN_TO_ADDRESSES_MAP[chainId].v3MigratorAddress
    if (v3MigratorAddress) {
      memo[chainId] = v3MigratorAddress
    }
    return memo
  }, {})
}

export const MULTICALL_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].multicallAddress
    return memo
  }, {})
}

export const OracleSwapVoter: AddressMap = {
  [ChainId.COSTON2]: '0x72E374332EBdcae18CDa5D37Ec02ceD619812c49',
}

export const OSLPManager: AddressMap = {
  [ChainId.COSTON2]: '0x94a61861d5e8154B24095E619Bf69e457F373586',
}

export const SuperfarmMultiRewardManager: AddressMap = {
  [ChainId.COSTON2]: '0xeA2aCE79592BFe28e2b57810DcF668037c7d8a8b',
}

/**
 * The oldest V0 governance address
 */
export const GOVERNANCE_ALPHA_V0_ADDRESSES: AddressMap = constructSameAddressMap(
  '0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F'
)
/**
 * The older V1 governance address
 */
export const GOVERNANCE_ALPHA_V1_ADDRESSES: AddressMap = {
}
/**
 * The latest governor bravo that is currently admin of timelock
 */
export const GOVERNANCE_BRAVO_ADDRESSES: AddressMap = {
  [ChainId.COSTON2]: '0x8Ad2D1A537fe16d1C619fD877a26FA584798107f',
}

export const TIMELOCK_ADDRESSES: AddressMap = {
  [ChainId.COSTON2]: '0x94ed40CEE9b8752bfaD93F7F79D3E4Bc1b5fC78b',
}

export const QUOTER_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const quoterAddress = CHAIN_TO_ADDRESSES_MAP[chainId].quoterAddress
    if (quoterAddress) {
      memo[chainId] = quoterAddress
    }
    return memo
  }, {})
}

export const NONFUNGIBLE_POSITION_MANAGER_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const nonfungiblePositionManagerAddress = CHAIN_TO_ADDRESSES_MAP[chainId].nonfungiblePositionManagerAddress
    if (nonfungiblePositionManagerAddress) {
      memo[chainId] = nonfungiblePositionManagerAddress
    }
    return memo
  }, {})
}

export const ENS_REGISTRAR_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e')
}

export const SOCKS_CONTROLLER_ADDRESSES: AddressMap = {
}

export const TICK_LENS_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const tickLensAddress = CHAIN_TO_ADDRESSES_MAP[chainId].tickLensAddress
    if (tickLensAddress) {
      memo[chainId] = tickLensAddress
    }
    return memo
  }, {})
}

export const MIXED_ROUTE_QUOTER_V1_ADDRESSES: AddressMap = SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
  const v1MixedRouteQuoterAddress = CHAIN_TO_ADDRESSES_MAP[chainId].v1MixedRouteQuoterAddress
  if (v1MixedRouteQuoterAddress) {
    memo[chainId] = v1MixedRouteQuoterAddress
  }
  return memo
}, {})

export const SWAP_ROUTER_02_ADDRESSES = (chainId: number) => {
  if (SUPPORTED_CHAINS.includes(chainId)) {
    const id = chainId as SupportedChainsType
    return CHAIN_TO_ADDRESSES_MAP[id].swapRouter02Address ?? '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45'
  }
  return ''
}
