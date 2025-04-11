import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
  Divider,
  useBreakpointValue,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon, ArrowBackIcon } from '@chakra-ui/icons';
import { useState } from 'react';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const showImage = useBreakpointValue({ base: false, md: true });

  return (
    <Flex minH="100vh" direction={{ base: 'column', md: 'row' }}>
      <Box flex="1" p={10}>
        <Box maxW="md" mx="auto" mt={10}>
          {/* Botão de voltar posicionado à esquerda acima do título */}
          <Box mb={4}>
            <IconButton
              icon={<ArrowBackIcon />}
              aria-label="Voltar"
              variant="ghost"
              fontSize="24px" // tamanho maior
              size="lg" // botão maior
            />
          </Box>

          <Heading mb={2}>Vamos começar!</Heading>
          <Text color="gray.600" mb={8}>
            Entre com suas credenciais e acesse sua conta
          </Text>

          <form>
            <FormControl id="email" mb={4}>
              <FormLabel>E-mail</FormLabel>
              <Input type="email" placeholder="Digite seu e-mail" />
            </FormControl>

            <FormControl id="password" mb={2}>
              <FormLabel>Senha</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Digite sua senha"
                />
                <InputRightElement h="full">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Flex justify="flex-end" mb={6}>
              <Link fontSize="sm" color="gray.600" _hover={{ textDecoration: 'underline' }}>
                Esqueceu a senha?
              </Link>
            </Flex>

            <Button colorScheme="purple" width="100%" mb={6}>
              Entrar
            </Button>

            <Flex align="center" mb={6}>
              <Divider />
              <Text px={4} fontSize="sm" color="gray.500">
                ou
              </Text>
              <Divider />
            </Flex>

            <Button variant="outline" width="100%">
              Crie sua conta
            </Button>
          </form>
        </Box>
      </Box>

      {showImage && (
        <Box flex="1" display={{ base: 'none', md: 'block' }}>
          <Image
            src="/assets/login-image.png"
            alt="Grupo de desenvolvedores com laptops"
            objectFit="cover"
            height="100vh"
            width="100%"
          />
        </Box>
      )}
    </Flex>
  );
}
