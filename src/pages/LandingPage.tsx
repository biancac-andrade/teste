import React from 'react'
import { Box, Heading, Text, Button, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

export const LandingPage = () => {
  return (
    <Box textAlign="center" padding="8">
      <Heading as="h1" size="2xl" mb="4">
        Bem-vindo ao Meu Portfólio
      </Heading>
      <Text fontSize="xl" mb="8">
        Olá, meu nome é [Seu Nome]. Eu sou um desenvolvedor web apaixonado por
        criar experiências incríveis na web.
      </Text>
      <Link as={RouterLink} to="/portfolio">
        <Button colorScheme="teal" size="lg">
          Conheça Meu Trabalho
        </Button>
      </Link>
    </Box>
  )
}
