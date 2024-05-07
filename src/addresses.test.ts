import { SWAP_ROUTER_02_ADDRESSES } from './addresses'
import { ChainId } from './chains'

describe('addresses', () => {
  describe('swap router 02 addresses', () => {
    it('should return the correct address for base', () => {
      it('should return the correct address for sepolia', () => {
        const address = SWAP_ROUTER_02_ADDRESSES(ChainId.SEPOLIA)
        expect(address).toEqual('0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E')
      })
    })
  })
})
