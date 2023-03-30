import { useState } from 'react'
import { ethers } from 'ethers'
import {
    Box,
    Button,
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
import { useAccount } from "wagmi";
import WethShares from './components/WethShares';
import UsdcShares from './components/UsdcShares';
import Price from './components/Price';
import Provide from './components/Provide';
import WithdrawLiquidity from './components/WithdrawLiquidity';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import Long from './components/Long';
import Short from './components/Short';
import UsdcBalance from './components/UsdcBalance';
import WethBalance from './components/WethBalance';
import PnL from './components/PnL';

const AppCard = () => {

  const [sliderValue, setSliderValue] = useState(50)

  const labelStyles = {
    mt: '2',
    ml: '-2.5',
    fontSize: 'sm',
  }

    const { address } = useAccount()

    const [amount, setAmount] = useState('')

    const amountInput = (e) => {
        const amount = (e.target.value);
        setAmount(ethers.utils.parseEther(amount));
      };

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
                            /* children='Ξ' */
                        />
                        <NumberInput min={0.001}>
                          <NumberInputField 
                              borderRadius={"12px"}
                              id="amount"
                              onChange={amountInput}
                              placeholder="0.6"
      /*                         value={amount && !isNaN(amount) && amount > 0 ? (amount) : ''} */
                          />
                        </NumberInput>
                      </InputGroup>
                      <FormControl display='flex' alignItems='center'>
                        <FormLabel htmlFor='isWeth' fontWeight={"semibold"} mb='0' marginLeft="30">
                          WETH
                        </FormLabel>
                        <Switch id='isWeth' />
                        <Text fontWeight={"semibold"} marginLeft="3">
                          USDC
                        </Text>
                      </FormControl>
                    </Stack>
                    <Flex >
                      <Provide amount={amount}/>
                      <WithdrawLiquidity amount={amount}/>
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
                            fontSize='1.2em'
                            /* children='Ξ' *//>
                        <NumberInput min={0.001}>
                          <NumberInputField 
                              borderRadius={"12px"}
                              id="amount"
                              onChange={amountInput}
                              placeholder="0.6"
      /*                       value={amount && !isNaN(amount) && amount > 0 ? (amount) : ''} */
                              />
                        </NumberInput>
                      </InputGroup>
                    </Stack>
                  <Slider defaultValue={1} min={0} max={10} step={1} mb="6" mt="12">
                    <SliderMark value={1} {...labelStyles} >
                      1x
                    </SliderMark>
{/*                     <SliderMark value={3} {...labelStyles} mt="3">
                      3x
                    </SliderMark> */}
                    <SliderMark value={5} {...labelStyles} >
                      5x
                    </SliderMark>
{/*                     <SliderMark value={7} {...labelStyles} mt="3">
                      7x
                    </SliderMark> */}
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
                    <Switch id='isWeth' />
                  </FormControl>
                  <Flex >
                    <Long amount={amount}/>
                    <Short amount={amount}/>
                  </Flex>
{/*                   <VStack>
                    <Heading size="md">PnL</Heading>
                    <PnL />
                  </VStack> */}
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
                              /* children='Ξ' */
                          />
                      <NumberInput min={0.5}>
                          <NumberInputField 
                              borderRadius={"12px"}
                              id="amount"
                              onChange={amountInput}
                              placeholder="0.6"
      /*                         value={amount && !isNaN(amount) && amount > 0 ? (amount) : ''} */
                          />
                      </NumberInput>
                      </InputGroup>
                      <FormControl display='flex' alignItems='center'>
                        <FormLabel htmlFor='isWeth' fontWeight={"semibold"} mb='0' marginLeft="30">
                          WETH
                        </FormLabel>
                        <Switch id='isWeth' />
                        <Text fontWeight={"semibold"} marginLeft="3">
                          USDC
                        </Text>
                      </FormControl>
                      </Stack>
                      <Flex >
                      <Deposit amount={amount}/>
                      <Withdraw amount={amount}/>
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