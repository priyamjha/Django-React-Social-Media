import { Button, Flex, Heading, Text } from "@chakra-ui/react"
import { get_posts } from "../api/endpoints";
import { useEffect, useState } from "react";
import Post from "../Components/post";

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nextPage, setNextPage] = useState(1);

    const fetchData = async () => {
        const data = await get_posts(nextPage);
        setPosts([...posts, ...data.results]);
        setNextPage(data.next ? nextPage + 1 : null);
    };

    useEffect(() => {
        try {
            fetchData();
        } catch {
            alert("error getting posts");
        } finally {
            setLoading(false);
        }
    }, []);

    const loadMorePosts = () => {
        if (nextPage) {
            fetchData();
        }
    };

    return (
        <Flex direction="column" w="100%" alignItems="center" pb="50px">
            <Heading m="30px" textAlign="center">
                Posts
            </Heading>

            <Flex w='90%' wrap='wrap' gap='30px' pb='50px'>
                {loading ? (
                    <Text>Loading...</Text>
                ) : posts ? (
                    posts.map((post) => (
                        <Post
                            key={post.id}
                            id={post.id}
                            username={post.username}
                            post_image={post.post_image}
                            description={post.description}
                            formatted_date={post.formatted_date}
                            liked={post.liked}
                            likes_count={post.likes_count}
                        />
                    ))
                ) : (
                    <></>
                )}
            </Flex>

            {nextPage && !loading && (
                <Button onClick={loadMorePosts} mt="30px" w="100%" color="gray.800">
                    Load More
                </Button>
            )}
        </Flex>
    );
};

export default Home;
