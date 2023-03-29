import { useContractRead, useAccount } from "wagmi";
import { ABI, CONTRACT_ADDRESS } from './data/abi';

const Shares = () => {

    const { address, isConnecting, isDisconnected } = useAccount()

    const { data, isError, isLoading } = useContractRead({
        address: CONTRACT_ADDRESS,
        abi: ABI,
        functionName: 'providerShares',
        args: [address],
        onSuccess(data) {
            console.log('Success providerShares', data/10**18)
        },
      })

    return (
      <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          textAlign: 'center', 
          gap: '4px', 
          margin: '4px' }}>
          <h1 style={{
              webkitBackgroundClip: 'text',
              fontSize: '2rem',
              fontWeight: 'bold',
              marginBottom: '6px'}}>
               Ξ
                {isError ? ' ' : isLoading ? 'Loading...' : data/10**18}
          </h1>
      </div>
    )
  }
  
  export default Shares