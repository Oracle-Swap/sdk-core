import { ChainId, SUPPORTED_CHAINS } from './chains'

export type AddressMap = { [chainId: number]: string }

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
export const V2_FACTORY_ADDRESS = '0x06B7a5aed878f639273d0e89fed525F26Ce59879'
export const V2_FACTORY_ADDRESSES: AddressMap = {
  [ChainId.COSTON2]: '0x06B7a5aed878f639273d0e89fed525F26Ce59879'
}
/**
 * @deprecated use V2_ROUTER_ADDRESSES instead
 */
export const V2_ROUTER_ADDRESS = '0xB2a25D010fE4b7f37066432F19a4AA8d29951EC8'
export const V2_ROUTER_ADDRESSES: AddressMap = {
  [ChainId.COSTON2]: '0xB2a25D010fE4b7f37066432F19a4AA8d29951EC8'
}

const COSTON2_ADDRESSES: ChainAddresses = {
  multicallAddress: "0x411E2E15390639Cd553508907329Ea95F23D9Bf0"
}

export const PERMIT2_ADDRESS = "0x3CE3deF8d48d0D620061e5F0330a742B28B5945e"

export const PERMIT2_ADDRESS_MAP: AddressMap = {
  [ChainId.COSTON2]: "0x3CE3deF8d48d0D620061e5F0330a742B28B5945e",
}

export const UNIVERSAL_ROUTER: AddressMap = {
  [ChainId.COSTON2]: "0x04F886Aed8B7Fc774535E6DEcaaFd3F2B63BB653",
}

export const UNIVERSAL_ROUTER_ADDRESS = (chainId: number): string => {
  if (!UNIVERSAL_ROUTER[chainId]) throw new Error(`Universal Router not deployed on chain ${chainId}`)
  return UNIVERSAL_ROUTER[chainId]
}

export const CHAIN_TO_ADDRESSES_MAP: Record<number, ChainAddresses> = {
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
  [ChainId.COSTON2]: '0x85Fc3Aa730Df4AFb98c2f8705704452B90D112F4',
}

export const OSLPManager: AddressMap = {
  [ChainId.COSTON2]: '0xf2E3BEAE2C9DF795454510010BF3597453AFbf68',
}

export const SuperfarmMultiRewardManager: AddressMap = {
  [ChainId.COSTON2]: '0x3f2adA4Ee22d60CbaA7AbaB8Ac4c61c25ef31485',
}

export const FTSORewardManager: AddressMap = {
  [ChainId.COSTON2]: '0x16E6A0b7a26518c336Bca0E935782C22A9EE07Fd',
  [ChainId.FLARE]: '0x85627d71921AE25769f5370E482AdA5E1e418d37',
  [ChainId.SONGBIRD]: '0x13F7866568dC476cC3522d17C23C35FEDc1431C5',
}

export const FTSOManager: AddressMap = {
  [ChainId.COSTON2]: '0x4F52e61907B0ED9f26b88F16B2510a4CA524d6d0',
  [ChainId.FLARE]: '0x2E99a4543F9ea708Cf8CCaC447515e61706D9DE9',
  [ChainId.SONGBIRD]: '0x7A6B15E17b7691ba687ad182bD12cb4a91D533ae',
}

export const ClaimSetupManager: AddressMap = {
  [ChainId.COSTON2]: '0x5Ddb590530EF66775E6225671eaBD94959e9AE0e',
  [ChainId.FLARE]: '0xD56c0Ea37B848939B59e6F5Cda119b3fA473b5eB',
  [ChainId.SONGBIRD]: '0xDD138B38d87b0F95F6c3e13e78FFDF2588F1732d',
}

export const DistributionToDelegators: AddressMap = {
  [ChainId.COSTON2]: '0xbd33bDFf04C357F7FC019E72D0504C24CF4Aa010',
  [ChainId.FLARE]: '0x9c7A4C83842B29bB4A082b0E689CB9474BD938d0',
}

export const FTSORegistry: AddressMap = {
  [ChainId.COSTON2]: '0x48da21ce34966a64e267cefb78012c0282d0ac87',
  [ChainId.FLARE]: '0x13DC2b5053857AE17a4f95aFF55530b267F3E040',
  [ChainId.SONGBIRD]: '0xef4c203470553c654b3870f37ce4de1fa862dee0',
}

export const INIT_CODE_HASH: AddressMap = {
  [ChainId.COSTON2]: "0xae199cf6bedaa27fee9ef8928dd16925c3846fbe0532e42bbdee6de014e9bef9"
}

export const MULTICALL2_ADDRESS: AddressMap = {
  [ChainId.COSTON2]: "0x35060f7803eF7763b77E4EF0082bc0bCf2654154",
  [ChainId.FLARE]: '0x1240C3f2D9d20951C8d338548c6F79315cD007A3',
  [ChainId.SONGBIRD]: '0x9f3C3e294ea78319CCD16589eB9e8Ab24BBCF613',
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
  [ChainId.COSTON2]: '0xCCf16d8F755e7e2f09670eb88F3e3ae1ab787fDB',
}

export const TIMELOCK_ADDRESSES: AddressMap = {
  [ChainId.COSTON2]: '0xCFC76Aa3af550D99d486701b22288237b2B8F043',
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
