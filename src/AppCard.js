import { useState } from 'react'
import { ethers } from 'ethers'
import {
    Card,
    CardBody, 
    Heading, 
    VStack,
    NumberInput,
    NumberInputField,
    InputRightElement,
    InputGroup,
    Stack,
    Tabs,
    TabList,
    TabPanels,
    TabPanel,
    Tab,
    Flex
} from '@chakra-ui/react'
import { useAccount } from "wagmi";
import Shares from './Shares';
import Provide from './Provide';

const AppCard = () => {

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
                <TabList>
                  <Tab>Liquidity</Tab>
                  <Tab>Trade</Tab>
                  <Tab>Wallet</Tab>
                </TabList>
              <TabPanels>
                <TabPanel>
                  <VStack spacing={6}>
                    <Heading size="md">Your WETH Shares</Heading>
                    <Shares />
                  </VStack>
                  <VStack spacing={6}>
                    <Heading size="md">Your USDC Shares</Heading>
                    <Shares />
                  </VStack>
                  <VStack spacing={6}>
                  <Stack spacing={4}>
                      <InputGroup >
                          <InputRightElement
                              pointerEvents='none'
                              color='gray.300'
                              fontSize='1.2em'
                              children='Ξ'
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
                      </Stack>
                      <Flex>
                      {/* <Provide amount={amount}/> */}
                      </Flex>
                  </VStack>
                </TabPanel>
                {/* TAB2 */}
                <TabPanel>
                  <VStack spacing={6}>
                    <Heading size="md">ETH Price</Heading>
                  </VStack>
                </TabPanel>
                <TabPanel>
                <VStack spacing={6}>
                    <Heading size="md">Your WETH Balance</Heading>
                    <Shares />
                  </VStack>
                  <VStack spacing={6}>
                    <Heading size="md">Your USDC Balance</Heading>
                    <Shares />
                  </VStack>
                  <Stack spacing={4}>
                      <InputGroup >
                          <InputRightElement
                              pointerEvents='none'
                              color='gray.300'
                              fontSize='1.2em'
                              children='Ξ'
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
                      </Stack>
                </TabPanel>
              </TabPanels>
            </Tabs>
            </CardBody>
        </Card>
    </Flex>
    )
}

export default AppCard