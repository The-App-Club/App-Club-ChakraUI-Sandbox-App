import {Suspense} from 'react';
import {css} from '@emotion/css';
import {
  Box,
  ChakraProvider,
  Button,
  useDisclosure,
  HStack,
  Center,
  Spinner,
} from '@chakra-ui/react';
import {Issues} from './Issues';

const Bebop = ({page, isPending, decrementPage, incrementPage}) => {
  return (
    <Box
      className={css`
        max-width: 40rem;
        width: 100%;
        margin: 0 auto 0;
        padding: 1rem;
      `}
    >
      <HStack
        justifyContent="flex-end"
        className={css`
          position: sticky;
          top: 1rem;
          @media (max-width: 768px) {
          }
        `}
      >
        {isPending && <Spinner />}
        <Button
          colorScheme="twitter"
          onClick={decrementPage}
          isDisabled={isPending}
        >
          prev
        </Button>
        <Button
          colorScheme="twitter"
          onClick={incrementPage}
          isDisabled={isPending}
        >
          next
        </Button>
      </HStack>
      <Box className={css``}>
        <Suspense
          fallback={
            <Center>
              <Spinner size="xl" />
            </Center>
          }
        >
          <Issues page={page} />
        </Suspense>
      </Box>
    </Box>
  );
};

export {Bebop};
