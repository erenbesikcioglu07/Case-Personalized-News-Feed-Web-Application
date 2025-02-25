import React, { useState } from 'react';
import {Box, Button, Container, Flex, Grid, HStack, Spacer, VStack, Wrap} from '@chakra-ui/react'
import LoginForm from "../Components/LoginForm";
import RegisterForm from "../Components/RegisterForm";


const WelcomePage = () => {
  const [form, setForm] = useState(''); // initial state is an empty string

  const renderForm = () => {
    if (form === 'login') {
      return <LoginForm />;
    } else if (form === 'register') {
        return <RegisterForm />;
    }
  };

  return(

      <Box
          backgroundImage="url('https://img.freepik.com/free-vector/global-earth-blue-technology-digital-background-design_1017-27075.jpg')"
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
          height="100vh"
      >

        <Flex direction="column"
              justify="center"
              align="center"
              height="100vh">
          <HStack spacing='15px'>
            <Button
                w='100px'
                colorScheme='green'
                onClick={() => setForm('login')}
            >
              Login
            </Button>

            <Spacer />

            <Button
                w='100px'
                colorScheme='orange'
                onClick={() => setForm('register')}
            >
              Register
            </Button>
          </HStack>
          {renderForm()}
        </Flex>
      </Box>
  )
}

export default WelcomePage;