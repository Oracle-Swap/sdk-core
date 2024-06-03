import { SupportedChainsType } from './chains';
declare type AddressMap = {
    [chainId: number]: string;
};
declare type ChainAddresses = {
    v3CoreFactoryAddress?: string;
    multicallAddress: string;
    quoterAddress?: string;
    v3MigratorAddress?: string;
    nonfungiblePositionManagerAddress?: string;
    tickLensAddress?: string;
    swapRouter02Address?: string;
    v1MixedRouteQuoterAddress?: string;
};
/**
 * @deprecated use V2_FACTORY_ADDRESSES instead
 */
export declare const V2_FACTORY_ADDRESS = "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f";
/**
 * @deprecated use V2_ROUTER_ADDRESSES instead
 */
export declare const V2_ROUTER_ADDRESS = "0xe551A850133Ae4bCbF069927940296c1428A7194";
export declare const PERMIT2_ADDRESS = "0x3CE3deF8d48d0D620061e5F0330a742B28B5945e";
export declare const PERMIT2_ADDRESS_MAP: AddressMap;
export declare const UNIVERSAL_ROUTER: AddressMap;
export declare const UNIVERSAL_ROUTER_ADDRESS: (chainId: number) => string;
export declare const V3_CORE_FACTORY_ADDRESSES: AddressMap;
export declare const V3_MIGRATOR_ADDRESSES: AddressMap;
export declare const MULTICALL_ADDRESSES: AddressMap;
export declare const OracleSwapVoter: AddressMap;
export declare const OSLPManager: AddressMap;
export declare const SuperfarmMultiRewardManager: AddressMap;
export declare const QUOTER_ADDRESSES: AddressMap;
export declare const NONFUNGIBLE_POSITION_MANAGER_ADDRESSES: AddressMap;
export declare const ENS_REGISTRAR_ADDRESSES: AddressMap;
export declare const UNI_ADDRESSES: AddressMap;
export declare const UNISWAP_NFT_AIRDROP_CLAIM_ADDRESS = "0x8B799381ac40b838BBA4131ffB26197C432AFe78";
/**
 * @deprecated use V2_FACTORY_ADDRESSES instead
 */
export declare const V2_FACTORY_ADDRESSES: AddressMap;
export declare const V2_ROUTER_ADDRESSES: AddressMap;
export declare const CHAIN_TO_ADDRESSES_MAP: Record<SupportedChainsType, ChainAddresses>;
/**
 * The oldest V0 governance address
 */
export declare const GOVERNANCE_ALPHA_V0_ADDRESSES: AddressMap;
/**
 * The older V1 governance address
 */
export declare const GOVERNANCE_ALPHA_V1_ADDRESSES: AddressMap;
/**
 * The latest governor bravo that is currently admin of timelock
 */
export declare const GOVERNANCE_BRAVO_ADDRESSES: AddressMap;
export declare const TIMELOCK_ADDRESSES: AddressMap;
export declare const MERKLE_DISTRIBUTOR_ADDRESS: AddressMap;
export declare const ARGENT_WALLET_DETECTOR_ADDRESS: AddressMap;
export declare const SOCKS_CONTROLLER_ADDRESSES: AddressMap;
export declare const TICK_LENS_ADDRESSES: AddressMap;
export declare const MIXED_ROUTE_QUOTER_V1_ADDRESSES: AddressMap;
export declare const SWAP_ROUTER_02_ADDRESSES: (chainId: number) => string;
export {};
