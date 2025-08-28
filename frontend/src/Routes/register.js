import { Button, Flex, FormControl, FormLabel, Heading, Input, VStack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../api/endpoints";


const Login = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    const handleRegister = async () => {

        if (password === confirmPassword) {
            try{
                await register(username, email, firstName, lastName, password);
                alert("Registration successful! Please log in.");
                    navigate(`/login`);
                } catch {
                    alert("Registration failed. Please try again.");
                }
        } else {
            alert("Passwords do not match!");
        }
    }

    const handleNav = () => {
        navigate('/login');
    }



    return(
        <Flex w={100 + "%"} h="calc(100vh - 90px)" justifyContent="center" alignItems="center">
            <VStack w={95 + "%"} alignItems='start' maxW="400px" gap='20px'>
                <Heading>Register</Heading>
                <FormControl>
                    <FormLabel htmlFor="username">Username</FormLabel>
                    <Input onChange={(e) => setUsername(e.target.value)} bg='white' type="text" />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input onChange={(e) => setEmail(e.target.value)} bg='white' type="email" />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="fist">First Name</FormLabel>
                    <Input onChange={(e) => setFirstName(e.target.value)} bg='white' type="text" />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="username">Last Name</FormLabel>
                    <Input onChange={(e) => setLastName(e.target.value)} bg='white' type="text" />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Input onChange={(e) => setPassword(e.target.value)} bg='white' type="password" />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="password">Confirm Password</FormLabel>
                    <Input onChange={(e) => setConfirmPassword(e.target.value)} bg='white' type="password" />
                </FormControl>
                <VStack w='100%' alignItems='start' gap='10px'>
                    <Button onClick={handleRegister} w='100%' colorScheme="green" fontSize='18px'>Register</Button>
                    <Text onClick={handleNav} fontSize='14px' color='gray.500'>Already have an account? Log in</Text>
                </VStack>
            </VStack>
        </Flex>
    )
}


export default Login;