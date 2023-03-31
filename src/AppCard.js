import { useState } from 'react'
import { ethers } from 'ethers'
import './App.css';
import {
    Box,
    Card,
    CardBody, 
    FormControl,
    FormLabel,
    Heading, 
    VStack,
    NumberInput,
    NumberInputField,
    InputRightElement,
    InputGroup,
    Stack,
    Slider,
    SliderTrack,
    SliderMark,
    SliderThumb,
    SliderFilledTrack,
    Switch,
    Tabs,
    TabList,
    TabPanels,
    TabPanel,
    Tab,
    Text,
    Flex
} from '@chakra-ui/react'
import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi";
import { erc20ABI } from '@wagmi/core'
import WethShares from './components/WethShares';
import UsdcShares from './components/UsdcShares';
import Price from './components/Price';
import Provide from './components/Provide';
import WithdrawLiquidity from './components/WithdrawLiquidity';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import Long from './components/Long';
import Short from './components/Short';
import Close from './components/Close';
import UsdcBalance from './components/UsdcBalance';
import WethBalance from './components/WethBalance';
import PnL from './components/PnL';
import { FaCheckCircle, FaCircleNotch } from 'react-icons/fa';
import { CONTRACT_ADDRESS, CONTRACT_ADDRESS_WETH, CONTRACT_ADDRESS_USDC } from './data/abi';

const AppCard = () => {

  const labelStyles = {
    mt: '2',
    ml: '-2.5',
    fontSize: 'sm',
  }
  
  const [amount, setAmount] = useState('')
  const [isWethProvide, setisWethProvide] = useState(false)
  const [lev, setLev] = useState(1)
  
  const amountInput = (e) => {
    const inputAmount = e.target.value;
    const parsedAmount = isWethProvide
      ? ethers.utils.parseEther(inputAmount)
      : (inputAmount)*10**6;
  
    setAmount(parsedAmount);
  };

  const selectedContractAddress = isWethProvide
    ? CONTRACT_ADDRESS_WETH
    : CONTRACT_ADDRESS_USDC;
  
    const { config } = usePrepareContractWrite({
      address: selectedContractAddress,
      abi: erc20ABI,
      functionName: 'approve',
      args: [CONTRACT_ADDRESS, amount],
      onSuccess(data) {
        console.log('Success approve', data)
      },
      onError(error) {
        console.log('Error approve', error)
      },
      onSettled(data, error) {
        console.log('Settled approve', { data, error })
      },
    })
  
    const { data, write } = useContractWrite(config)
  
    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
      })

    return (
    <Flex alignItems="center" justifyContent="center" width="100%">    
      <Card 
        align='center' 
        borderRadius="3xl" 
        boxShadow={"whiteShadow"} 
        width="360px" 
        backgroundColor={"gray.800"}>
          <CardBody>
            <Tabs variant="solid-rounded" colorScheme="gray">
              <TabList alignItems="center" >
                <Tab>Liquidity</Tab>
                <Tab>Trade</Tab>
                <Tab>Wallet</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <VStack spacing={6}>
                    <Heading size="md" mt="3">Your WETH Shares</Heading>
                    <WethShares />
                  </VStack>
                  <VStack spacing={6}>
                    <Heading size="md">Your USDC Shares</Heading>
                    <UsdcShares />
                  </VStack>
                  <VStack spacing={6}>
                    <Stack spacing={4}>
                      <InputGroup mt="5">
                        <InputRightElement
                            pointerEvents='none'
                            color='gray.300'
                            fontSize='1.2em'
                        />
                        <NumberInput min={0.001}>
                          <NumberInputField 
                              borderRadius={"12px"}
                              id="amount"
                              onChange={amountInput}
                              placeholder="0.6"
                          />
                        </NumberInput>
                      </InputGroup>
                      <FormControl display='flex' alignItems='center'>
                        <FormLabel htmlFor='isWeth' fontWeight={"semibold"} mb='0' marginLeft="30">
                          USDC
                        </FormLabel>
                        <Switch id='isWeth' isChecked={isWethProvide} onChange={(e) => setisWethProvide(e.target.checked)} />
                        <Text fontWeight={"semibold"} marginLeft="3">
                          WETH
                        </Text>
                      </FormControl>
                    </Stack>
                      <button 
                        onClick={() => write?.()}
                        className="font-semibold mx-auto flex mt-3 w-6/12 flex-center justify-center space-x-2 overflow-hidden bg-indigo-500 px-7 py-2 transition-colors hover:bg-indigo-400 cursor-pointer"
                        style={{ borderRadius:"12px"}}>
                          {isLoading ? (
                          <div className="animate-spin">
                            <FaCircleNotch />
                          </div>
                        ) : isSuccess ? (
                          <div>
                            <FaCheckCircle />
                          </div>
                        ) : (
                          <div>Approve</div>
                        )}
                      </button>
                    <Flex >
                      <Provide amount={amount} isWethProvide={isWethProvide}/>
                      <WithdrawLiquidity amount={amount} isWethProvide={isWethProvide}/>
                    </Flex>
                  </VStack>
                </TabPanel>
                {/* TAB2 */}
                <TabPanel>
                  <VStack spacing={6}>
                    <Heading size="md" mt="3">ETH Price</Heading>
                    <Price />
                  </VStack>
                  <VStack spacing={6}>
                    <Stack spacing={4} mt="12">
                      <InputGroup >
                        <InputRightElement
                            pointerEvents='none'
                            color='gray.300'
                            fontSize='1.2em'/>
                        <NumberInput min={0.001}>
                          <NumberInputField 
                              borderRadius={"12px"}
                              id="amount"
                              onChange={amountInput}
                              placeholder="0.6"
                              />
                        </NumberInput>
                      </InputGroup>
                    </Stack>
                  <Slider 
                    defaultValue={1} 
                    min={0} 
                    max={10} 
                    step={1} 
                    mb="6" 
                    mt="12"   
                    onChange={(value) => {
                      setLev(value);
                    }}>
                    <SliderMark value={1} {...labelStyles} >
                      1x
                    </SliderMark>
                    <SliderMark value={5} {...labelStyles} >
                      5x
                    </SliderMark>
                    <SliderMark value={10} {...labelStyles} >
                      10x
                    </SliderMark>
                    <SliderTrack bg="InfoBackground">
                      <Box position='relative' right={10} />
                      <SliderFilledTrack bg="ActiveBorder" />
                    </SliderTrack>
                    <SliderThumb boxSize={6} />
                  </Slider>
                  <FormControl display='flex' alignItems='center'>
                    <FormLabel htmlFor='isWeth' mb='0'>
                      Use WETH as collateral?
                    </FormLabel>
                    <Switch id='isWeth' isChecked={isWethProvide} onChange={(e) => setisWethProvide(e.target.checked)} />
                  </FormControl>
                  <Flex >
                    <Long amount={amount} isWethProvide={isWethProvide} lev={lev}/>
                    <Short amount={amount} isWethProvide={isWethProvide} lev={lev}/>
                  </Flex>
                  <VStack spacing={6}>
                    <Heading size="md" mt="3">Your Position</Heading>
                    <PnL />
                  </VStack>
                  <Close/>
                  </VStack>
                </TabPanel>
                <TabPanel>
                  <VStack spacing={6}>
                    <Heading size="md" mt="3">Your WETH Balance</Heading>
                    <WethBalance />
                  </VStack>
                  <VStack spacing={6}>
                    <Heading size="md">Your USDC Balance</Heading>
                    <UsdcBalance />
                  </VStack>
                  <VStack spacing={6}>
                  <Stack spacing={4}>
                      <InputGroup mt="5">
                          <InputRightElement
                              pointerEvents='none'
                              color='gray.300'
                              fontSize='1.2em'
                          />
                      <NumberInput min={0.5}>
                          <NumberInputField 
                              borderRadius={"12px"}
                              id="amount"
                              onChange={amountInput}
                              placeholder="0.6"
                          />
                      </NumberInput>
                      </InputGroup>
                      <FormControl display='flex' alignItems='center'>
                        <FormLabel htmlFor='isWeth' fontWeight={"semibold"} mb='0' marginLeft="30">
                          USDC
                        </FormLabel>
                        <Switch id='isWeth' isChecked={isWethProvide} onChange={(e) => setisWethProvide(e.target.checked)} />
                        <Text fontWeight={"semibold"} marginLeft="3">
                          WETH
                        </Text>
                      </FormControl>
                      </Stack>
                      <button 
                        onClick={() => write?.()}
                        className="font-semibold mx-auto flex mt-3 w-6/12 flex-center justify-center space-x-2 overflow-hidden bg-indigo-500 px-7 py-2 transition-colors hover:bg-indigo-400 cursor-pointer"
                        style={{ borderRadius:"12px"}}>
                          {isLoading ? (
                          <div className="animate-spin">
                            <FaCircleNotch />
                          </div>
                        ) : isSuccess ? (
                          <div>
                            <FaCheckCircle />
                          </div>
                        ) : (
                          <div>Approve</div>
                        )}
                      </button>
                      <Flex >
                      <Deposit amount={amount} isWethProvide={isWethProvide}/>
                      <Withdraw amount={amount} isWethProvide={isWethProvide}/>
                      </Flex>
                      </VStack>
                </TabPanel>
              </TabPanels>
            </Tabs>
            </CardBody>
        </Card>
    </Flex>
    )
}

export default AppCard