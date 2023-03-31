import { useContractRead, useAccount } from "wagmi";
import { ABI, CONTRACT_ADDRESS } from '../data/abi';

const UsdcBalance = () => {
  

    const { address } = useAccount()
    
    const { data, isError, isLoading } = useContractRead({
      address: CONTRACT_ADDRESS,
      abi: ABI,
      functionName: 'usdcBalances',
      args: [address],
      onSuccess(data) {
        console.log('Success usdcBalances', data/10**6)
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
               $
                {isError ? ' ' : isLoading ? 'Loading...' : data/10**6}
          </h1>
      </div>
    )
  }
  
  export default UsdcBalance