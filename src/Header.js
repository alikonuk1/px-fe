import { Link, Flex, Image, Heading, Box } from '@chakra-ui/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Header = () => {
  return (
    <Flex as="header" align="center" justify="space-between" p={6} mb={6}>
      <Flex>
        <Link href="/" _hover={{ textDecoration: 'none' }}>
          <Flex align="center" cursor="pointer">
            <Heading size="md" marginLeft={"36px"}>
              PX Perpetuals
            </Heading>
          </Flex>
        </Link>
{/*         <Box marginLeft={"36px"}>
          <Link href="/deposit" _hover={{ textDecoration: 'none' }}>
            <Heading size="md" cursor="pointer">
              Deposit
            </Heading>
          </Link>
        </Box>
        <Box marginLeft={"36px"}>
          <Link href="/liquidity" _hover={{ textDecoration: 'none' }}>
            <Heading size="md" cursor="pointer">
              Liquidity
            </Heading>
          </Link>
        </Box> */}
      </Flex>
      <Flex align="flex-end" marginRight={"36px"} >
      <ConnectButton 
        chainStatus={{
          smallScreen: "full",
          largeScreen: "full",
        }}
        accountStatus= {{
          smallScreen: "avatar",
          largeScreen: "full",
        }}
        label="Sign in"
        showBalance={{
          smallScreen: false,
          largeScreen: true,
        }}
        />
      </Flex>
    </Flex>
  );
};

export default Header;
