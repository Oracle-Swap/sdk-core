import { Token } from './token'

/**
 * Known WETH9 implementation addresses, used in our implementation of Ether#wrapped
 */
export const WETH9: { [chainId: number]: Token } = {
  [114]: new Token(114, '0xc67dce33d7a8efa5ffeb961899c73fe01bce9273', 18, 'WC2FLR', 'Wrapped C2FLR')
}
