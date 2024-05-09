import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';

export const WalletConnectButton = () => (
  <ConnectButton.Custom>
    {({
      account,
      chain,
      openAccountModal,
      openChainModal,
      openConnectModal,
      authenticationStatus,
      mounted,
    }) => {
      const ready = mounted && authenticationStatus !== 'loading';
      const connected =
        ready &&
        account &&
        chain &&
        (!authenticationStatus || authenticationStatus === 'authenticated');
      return (
        <div
          {...(!ready && {
            'aria-hidden': true,
            style: {
              opacity: 0,
              pointerEvents: 'none',
              userSelect: 'none',
            },
          })}
        >
          {(() => {
            if (!connected) {
              return (
                <Link
                  href="#0"
                  onClick={openConnectModal}
                  type="button"
                  className="cmn--btn"
                >
                  <span>
                    Connect Wallet
                  </span>
                </Link>
              );
            }
            if (chain.unsupported) {
              return (
                <button
                  className="text-base text-red-600 truncate py-2 lg:text-xl xl:text-[20px]"
                  onClick={openChainModal}
                  type="button"
                >
                  Wrong network
                </button>
              );
            }
            return (
              <div style={{ display: 'flex', gap: 6, paddingTop: 4 }}>
                <Link
                  href="#0"
                  onClick={openChainModal}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    color: 'white',
                  }}
                  type="button"
                >
                  {chain.hasIcon && (
                    <div
                      className="text-white text-lg"
                      style={{
                        background: chain.iconBackground,
                        width: 24,
                        height: 24,
                        borderRadius: 999,
                        overflow: 'hidden',
                        marginRight: 4,
                      }}
                    >
                      {chain.iconUrl && (
                        <img
                          alt={chain.name ?? 'Chain icon'}
                          src={chain.iconUrl}
                          style={{ width: 24, height: 24 }}
                        />
                      )}
                    </div>
                  )}
                </Link>
                <Link
                  href="#0"
                  onClick={openAccountModal}
                  className="cmn--btn"
                >
                  <span>
                    {account.address.substring(0, 4)}...
                    {account.address.substring(account.address.length - 4)}
                  </span>
                </Link>
              </div>
            );
          })()}
        </div>
      );
    }}
  </ConnectButton.Custom>
);