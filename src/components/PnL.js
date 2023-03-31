import { useContractRead, useAccount } from "wagmi";
import { ABI, CONTRACT_ADDRESS } from '../data/abi';
import { ethers } from "ethers";

const PnL = () => {

    const { address } = useAccount()

    const { data, isError, isLoading } = useContractRead({
        address: CONTRACT_ADDRESS,
        abi: ABI,
        functionName: 'calculatePnLOf',
        args: [address],
        onSuccess(data) {
            console.log('Success pnl', data)
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
                {isError ? ' ' : isLoading ? 'Loading...' :                 
                parseFloat(
                  ethers.utils.formatUnits(
                    ethers.BigNumber.from(data))).toFixed(2)}
          </h1>
      </div>
    )
  }
  
  export default PnL