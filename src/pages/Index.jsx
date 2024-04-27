// Hacker News Clone using Chakra UI and React Icons
import { Box, Container, Heading, List, ListItem, Link, Text, VStack, Icon } from "@chakra-ui/react";
import { FaHackerNews, FaExternalLinkAlt } from "react-icons/fa";

const Index = () => {
  // Sample data mimicking Hacker News posts
  const newsItems = [
    {
      id: 1,
      title: "Introducing the new React framework",
      url: "https://reactjs.org",
      points: 156,
      author: "reactlover",
      time: "3 hours ago",
      commentsCount: 47,
    },
    {
      id: 2,
      title: "Understanding Async/Await in JavaScript",
      url: "https://javascript.info",
      points: 99,
      author: "asyncmaster",
      time: "1 hour ago",
      commentsCount: 21,
    },
    {
      id: 3,
      title: "Why functional programming matters",
      url: "https://functional.org",
      points: 73,
      author: "lambda",
      time: "5 hours ago",
      commentsCount: 13,
    },
  ];

  return (
    <Container maxW="container.md" py={5}>
      <VStack spacing={4} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">
            <Icon as={FaHackerNews} /> Hacker News Clone
          </Heading>
        </Box>
        <List spacing={3}>
          {newsItems.map((item) => (
            <ListItem key={item.id} p={3} shadow="md" borderWidth="1px">
              <Heading fontSize="md">{item.title}</Heading>
              <Link href={item.url} isExternal color="blue.500">
                {item.url} <Icon as={FaExternalLinkAlt} mx="2px" />
              </Link>
              <Text mt={2}>
                {item.points} points by {item.author} {item.time} | {item.commentsCount} comments
              </Text>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;
