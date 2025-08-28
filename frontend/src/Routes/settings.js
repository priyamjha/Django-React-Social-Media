import { Button, Flex, FormControl, FormLabel, Heading, Input, Textarea, VStack, Image } from "@chakra-ui/react";
import { useState } from "react";
import { logout, update_user } from "../api/endpoints";
import { useNavigate } from "react-router-dom";


const Settings = () => {

    const storage = JSON.parse(localStorage.getItem('userData'))

    const [username, setUsername] = useState(storage ? storage.username : '')
    const [email, setEmail] = useState(storage ? storage.email : '')
    const [first_name, setFirstName] = useState(storage ? storage.first_name : '')
    const [last_name, setLastName] = useState(storage ? storage.last_name : '')
    const [bio, setBio] = useState(storage ? storage.bio : '')
    const [profile_image, setProfileImage] = useState(storage ? storage.profile_image : '')

    const nav = useNavigate();

    const handleUpdate = async () => {
        try {
            await update_user({"username":username, "profile_image":profile_image, "email":email, "first_name":first_name, "last_name":last_name, "bio":bio})
            localStorage.setItem("userData", JSON.stringify({"username":username, "email":email, "first_name":first_name, "last_name":last_name, "bio":bio}))
            nav(`/${username}`)
        } catch {
            alert('error updating details')
        }
    }

    const handleLogout = async () => {
        try {
            await logout();
            nav('/login')
        } catch {
            alert('logout error')
        }
    }

    return(
        <Flex w='100%' justifyContent='center' pt='50px'>
            <VStack w='95%' maxW='500px' alignItems='start' gap='20px'>
                <Heading>Settings</Heading>
                <VStack w='100%' alignItems='start' gap='10px'>
                    <FormControl>
                        <FormLabel>Profile Picture</FormLabel>
                        <input onChange={(e) => setProfileImage(e.target.files[0])} bg='white' type='file' />
                        {profile_image && (
                        <Image
                            src={URL.createObjectURL(profile_image)}
                            alt="Preview"
                            mt={3}
                            borderRadius="md"
                            maxH="200px"
                            objectFit="cover"
                        />
                    )}
                    </FormControl>
                    {/* <FormControl>
                        <FormLabel>Username</FormLabel>
                        <Input onChange={(e) => setUsername(e.target.value)} value={username} bg='white' type='text' />
                    </FormControl> */}
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input onChange={(e) => setEmail(e.target.value)} value={email} bg='white' type='email' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>First Name</FormLabel>
                        <Input onChange={(e) => setFirstName(e.target.value)} value={first_name} bg='white' type='text' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Last Name</FormLabel>
                        <Input onChange={(e) => setLastName(e.target.value)} value={last_name} bg='white' type='text' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Bio</FormLabel>
                        <Textarea onChange={(e) => setBio(e.target.value)} value={bio} bg='white' type='text' />
                    </FormControl>
                    <Button onClick={handleUpdate}  w='100%' colorScheme="blue" mt='10px'>Save Changes</Button>
                </VStack>
                <Button onClick={handleLogout} colorScheme="red">Logout</Button>
            </VStack>
        </Flex>
    )
}

export default Settings;