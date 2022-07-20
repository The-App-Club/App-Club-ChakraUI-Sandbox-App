import {useState, useCallback, useEffect, useTransition, useRef} from 'react';

const usePageNumber = () => {
  const [page, setPage] = useState(1);
  const [isPending, startTransition] = useTransition();

  const incrementPage = useCallback((e) => {
    // setPage((p) => {
    //   return p + 1;
    // });
    startTransition(() => {
      setPage((p) => {
        return p + 1;
      });
    });
  }, []);

  const decrementPage = useCallback((e) => {
    // setPage((p) => {
    //   return Math.max(p - 1, 1);
    // });
    startTransition(() => {
      setPage((p) => {
        return Math.max(p - 1, 1);
      });
    });
  }, []);

  return {
    page,
    isPending,
    incrementPage,
    decrementPage,
  };
};

export {usePageNumber};
