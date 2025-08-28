import { Flex, VStack, Heading, FormControl, FormLabel, Input, Button, Image } from "@chakra-ui/react";
import { create_post } from "../api/endpoints";
import { useState } from "react";

import { useNavigate } from "react-router-dom";


const CreatePost = () => {

    const [description, setDescription] = useState('');
    const [post_image, setPostImage] = useState(null);

    const nav = useNavigate()

    const handlePost = async () => {
        try {
            await create_post({"description":description, "post_image":post_image});
            nav('/')
        } catch (err) {
            alert("Error creating post");
        }
    };

    return (
        <Flex w="100%" h="100%" justifyContent="center" pt="50px">
            <VStack w="95%" maxW="450px" alignItems="start" gap="40px">
                <Heading>Create Post</Heading>
                <FormControl>
                    <FormLabel>Description</FormLabel>
                    <Input
                        placeholder="What's on your mind?"
                        onChange={(e) => setDescription(e.target.value)}
                        bg="white"
                        type="text"
                    />
                    <FormLabel pt='20px'>Image</FormLabel>
                    <Input
                        onChange={(e) => setPostImage(e.target.files[0])}
                        type="file"
                        variant="unstyled"
                        p={1} 
                    />
                    {post_image && (
                        <Image
                            src={URL.createObjectURL(post_image)}
                            alt="Preview"
                            mt={3}
                            borderRadius="md"
                            maxH="200px"
                            objectFit="cover"
                        />
                    )}
                </FormControl>
                <Button onClick={handlePost} w="100%" colorScheme="blue">
                    Create Post
                </Button>
            </VStack>
        </Flex>
    );
};

export default CreatePost;
