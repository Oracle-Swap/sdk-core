export enum ChainId {
  MAINNET = 1,
  SEPOLIA = 11155111,
  COSTON2 = 114
}

export const SUPPORTED_CHAINS = [
  ChainId.MAINNET,
  ChainId.SEPOLIA,
  ChainId.COSTON2
] as const
export type SupportedChainsType = typeof SUPPORTED_CHAINS[number]

export enum NativeCurrencyName {
  // Strings match input for CLI
  ETHER = 'ETH',
  COSTON2 = 'C2FLR',
}
