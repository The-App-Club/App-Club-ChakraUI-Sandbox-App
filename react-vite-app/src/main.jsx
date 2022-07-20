import {createRoot} from 'react-dom/client';
import {Suspense, useEffect} from 'react';
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
import {usePageNumber} from './hooks/usePageNumber';
import {Issues} from './components/Issues';

import '@fontsource/inter';
import './styles/index.scss';
import {usePrevious} from './hooks/usePrevious';
import {Bebop} from './components/Bebop';

const App = () => {
  const {page, isPending, incrementPage, decrementPage} = usePageNumber();
  return (
    <Bebop
      page={page}
      isPending={isPending}
      incrementPage={incrementPage}
      decrementPage={decrementPage}
    />
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
