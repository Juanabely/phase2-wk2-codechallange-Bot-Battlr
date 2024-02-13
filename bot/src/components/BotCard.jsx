// src/components/BotCard.js
import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';

const BotCard = ({ bot }) => {
  return (
    <Box
      borderWidth="1px"
      p={4}
      mb={4}
      borderRadius="md"
      boxShadow="md"
      bg="white"
    >
      <img src={bot.avatar_url} alt="" />
      <Text fontSize="lg" fontWeight="bold">
        {bot.name} 
        
      </Text>
      <Text color="gray.600">{bot.abilities}</Text>
      <Button
        mt={2}
        colorScheme="purple"
        size="sm"
        onClick={() => console.log('Added to army:', bot.name)}
      >
        Add to Army
      </Button>
    </Box>
  );
};

export default BotCard;
