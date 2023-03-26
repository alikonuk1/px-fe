import { Link, Flex, Image, Heading, Avatar } from '@chakra-ui/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
/* import { ColorModeSwitcher } from './ColorModeSwitcher'; */

const Header = () => {
  return (
    <Flex as="header" align="center" justify="space-between" p={6} mb={6}>
      <Flex>
        <Link href="/" _hover={{ textDecoration: 'none' }}>
          <Flex align="center" cursor="pointer">
{/*             <Image
              style={{ maxHeight: '40px', maxWidth: '40px', padding: '3px' }}
              src="/ethereum-c.png"
              alt="arblet.xyz"
            /> */}
            <Heading size="md" marginLeft={"9px"}>
              px Perpetuals
            </Heading>
          </Flex>
        </Link>
      </Flex>
      <Flex align="flex-end">
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
{/*         <ColorModeSwitcher justifySelf="flex-end" /> */}
      </Flex>
    </Flex>
  );
};

export default Header;
