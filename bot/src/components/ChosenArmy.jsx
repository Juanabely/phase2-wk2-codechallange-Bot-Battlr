// src/components/ChosenArmy.js
import React, { useState } from 'react';
import { Box, Text, Button } from '@chakra-ui/react';

const ChosenArmy = () => {
  const [chosenBots, setChosenBots] = useState([]);

  const handleRemoveFromArmy = (botId) => {
    // Remove the bot with the specified ID from the chosen army
    const updatedChosenBots = chosenBots.filter((bot) => bot.id !== botId);
    setChosenBots(updatedChosenBots);
  };

  const handleAddToArmy = (bot) => {
    // Add the bot to the chosen army
    setChosenBots([...chosenBots, bot]);
  };

  return (
    <div>
      <Text fontSize="lg" fontWeight="bold">
        Chosen Army:
      </Text>
      {chosenBots.map((bot) => (
        <Box key={bot.id} borderWidth="1px" p={2} mb={2}>
          <Text>{bot.name}</Text>
          <Text>{bot.abilities}</Text>
          <Button
            mt={2}
            colorScheme="red"
            size="sm"
            onClick={() => handleRemoveFromArmy(bot.id)}
          >
            Remove
          </Button>
        </Box>
      ))}
      {/* Display other components or UI elements here */}
    </div>
  );
};

export default ChosenArmy;
