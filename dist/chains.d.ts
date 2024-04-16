export declare enum ChainId {
    MAINNET = 1,
    SEPOLIA = 11155111,
    COSTON2 = 114
}
export declare const SUPPORTED_CHAINS: readonly [ChainId.MAINNET, ChainId.SEPOLIA, ChainId.COSTON2];
export declare type SupportedChainsType = typeof SUPPORTED_CHAINS[number];
export declare enum NativeCurrencyName {
    ETHER = "ETH",
    COSTON2 = "C2FLR"
}
