import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { RangeDatepicker } from './date_picker';
function App() {
  const [selectedDates, setSelectedDates] = React.useState([
    new Date(),
    new Date(),
  ]);
  const dateStyleProps = {
    dateNavBtnProps: {
      colorScheme: 'teal',
      variant: 'outline',
    },
    dayOfMonthBtnProps: {
      borderColor: 'teal.300',
      selectedBg: 'teal.200',
      _hover: {
        bg: 'teal.400',
      },
    },
    inputProps: {
      focusBorderColor: 'teal.500',
    },
  };

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />

            <RangeDatepicker
              selectedDates={selectedDates}
              onDateChange={setSelectedDates}
              propsConfigs={dateStyleProps}
            />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
