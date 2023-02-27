import React from 'react';
import {
  Stack,
  VStack,
  Heading,
  Text,
  Button,
  Image,
  Box,
  HStack,
} from '@chakra-ui/react';
import './home.css';
import { Link } from 'react-router-dom';
import pic from '../../assets/images/pc.jpg';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { DiAws } from 'react-icons/di';
const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '50']}
        >
          <VStack width={'full'} alignItems={['center', 'flex-end']}>
            <Heading children="A Place to learn Technology" size={'2xl'} />
            <Text children="Learn the Stack to Boost your Career" />
            <Link to="/courses">
              <Button size={'lg'} colorScheme="linkedin">
                Explore Now
              </Button>
            </Link>
          </VStack>
          <Image className='vector-graphics' boxSize={'xl'} src={pic} objectFit="contain" />
        </Stack>
      </div>
      <Box padding={'8'} bg="blackAlpha.700">
        <Heading
          textAlign={'center'}
          fontFamily="body"
          color={'blue.400'}
          children="OUR STACK"
        />
        <HStack>
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </HStack>
      </Box>
    </section>
  );
};

export default Home;
