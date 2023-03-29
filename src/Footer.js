import { socialData } from './data/socials';
import { Flex, Icon, Link } from '@chakra-ui/react';
import { FaGithub, FaTwitter, FaRegFileCode } from 'react-icons/fa';

const Footer = () => {
  return (
    <Flex as="footer" align="center" justifyContent={"center"} direction="row" position={"sticky"} top={"[100vh]"} marginTop={"90px"} p={9} color="gray.500" fontWeight="medium" gap={2} >
      <Link href={socialData.TWITTER} target="_blank" style={{ opacity: '75', hover: 'opacity-100' }} _hover={{ textDecoration: 'none' }}>
        <FaTwitter/>
      </Link>
      <Link href={socialData.PX_GITHUB} target="_blank" style={{ opacity: '75', hover: 'opacity-100' }} _hover={{ textDecoration: 'none' }}>
        <FaGithub/>
      </Link>
      <Link href={socialData.PX_CONTRACT_ADDRESS} target="_blank" style={{ opacity: '75', hover: 'opacity-100' }} _hover={{ textDecoration: 'none'}}>
        <FaRegFileCode/>
      </Link>
    </Flex>
  );
};

export default Footer;
