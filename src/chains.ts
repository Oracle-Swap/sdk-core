export enum ChainId {
  COSTON2 = 114
}

export const SUPPORTED_CHAINS = [
  ChainId.COSTON2
] as const
export type SupportedChainsType = typeof SUPPORTED_CHAINS[number]

export enum NativeCurrencyName {
  COSTON2 = 'C2FLR',
}
