import { Token } from './token'

/**
 * Known WETH9 implementation addresses, used in our implementation of Ether#wrapped
 */
export const WETH9: { [chainId: number]: Token } = {
  [1]: new Token(1, '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', 18, 'WETH', 'Wrapped Ether'),
  [11155111]: new Token(11155111, '0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9', 18, 'WETH', 'Wrapped Ether'),
  [114]: new Token(114, '0xc67dce33d7a8efa5ffeb961899c73fe01bce9273', 18, 'WC2FLR', 'Wrapped C2FLR')
}
