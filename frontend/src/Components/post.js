import { VStack, Text, Image, HStack, Flex, Button, Box } from "@chakra-ui/react";
import { SERVER_URL } from "../constants/constants";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { toggleLike } from "../api/endpoints";



const Post = ({id, username, post_image, description, formatted_date, liked, likes_count} ) => {

    const [clientLiked, setClientLiked] = useState(liked)
    const [clientLikedCount, setClientLikedCount] = useState(likes_count)

    const handleToggleLike = async () => {
        const data = await toggleLike(id)
        if (data.now_liked){
            setClientLiked(true)
            setClientLikedCount(clientLikedCount+1)
        } else {
            setClientLiked(false)
            setClientLikedCount(clientLikedCount-1)
        }
    }

    return (

        <VStack w='100%' maxW='400px' h='500px' border='1px solid' borderColor='gray.400' borderRadius='8px'>
            
            <HStack w='100%' flex='1' p='5px 0 5px 10px' borderBottom='1px solid' borderColor='gray.300' bg='gray.100' borderRadius='8px 8px 0 0'>
                <Text fontWeight="bold">@{username}</Text>
            </HStack>
            
            <Flex flex='6' w='95%' >
                {post_image && (
                    <Box w="100%" h="350px" overflow="hidden" borderRadius="md">
                        <Image src={`${SERVER_URL}${post_image}`} alt="Post" w="100%" h="100%" objectFit="cover" />
                    </Box>
                )}
            </Flex>


            <Flex w='100%' justifyContent='center' alignItems='center' borderTop='1px solid' borderColor='gray.400' borderRadius='0 0 8px 8px' p='8px 0 0 0'>
                <HStack w='90%' justifyContent='space-between' >
                    <HStack>
                        <Box>
                            {
                                clientLiked ?
                                <Box color='red'>
                                <FaHeart onClick={handleToggleLike} />
                                    </Box>
                                :
                                <FaRegHeart onClick={handleToggleLike} />

                            }
                        </Box>
                        <Text>{clientLikedCount}</Text>
                    </HStack>
                    <Text fontSize="sm" color="gray.500">{formatted_date}</Text>
                </HStack>
            </Flex>

            <HStack w='100%' p='0 0 10px 15px'>
            <Text fontWeight="bold">@{username}</Text>
            <Text>{description}</Text>
            </HStack>
            
        </VStack>

    )
}

export default Post;
