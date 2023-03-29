import { 
    Button,
    VStack,
    Link
} from '@chakra-ui/react'
import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi";
import { ABI, CONTRACT_ADDRESS } from './data/abi';
import { FaCheck } from 'react-icons/fa';

const Provide = ({ amount }) => {

    const { config } = usePrepareContractWrite({
        address: CONTRACT_ADDRESS,
        abi: ABI,
        functionName: 'provideLiquidity',
        overrides: {
            value: amount,
            gasLimit: 300000,
          },
    })
    
    const { data, write } = useContractWrite(config)

    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
      })

    return (
            <VStack spacing={6}>
                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <Button 
                    variantColor="green" 
                    width={"120px"} 
                    borderRadius="3xl" 
                    boxShadow={"md"} 
                    disabled={!write || isLoading} 
                    onClick={() => {write()}}>{isLoading ? 'Providing...' : 'Provide'}</Button>
                    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                        {isSuccess && (
                            <div color="gray.500" fontWeight="medium" style={{ marginTop:"10px" , marginLeft:"50px"}} >
                            <Link href={`https://goerli.etherscan.io/tx/${data?.hash}`} target="_blank" style={{ opacity: '75', hover: 'opacity-100' }} _hover={{ textDecoration: 'none' }}>
                                <FaCheck/>
                            </Link>
                            </div>
                        )}
                    </div>
                </div>
            </VStack>
    )
}

export default Provide