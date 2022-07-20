import {Stack} from '@chakra-ui/react';
import {useEffect} from 'react';
import useSWR from 'swr';
import {Issue} from './Issue';

const Issues = ({page}) => {
  const {data: issues} = useSWR(
    ['facebook/react/issues', page],
    async () => {
      const url = `https://api.github.com/repos/facebook/react/issues?per_page=10&state=all&page=${page}`;
      const response = await fetch(url);
      const json = await response.json();
      return json;
    },
    {
      suspense: true,
    }
  );
  return (
    <Stack spacing="4" as={`article`}>
      {issues?.map((issue) => (
        <Issue key={issue.id} issue={issue} />
      ))}
    </Stack>
  );
};

export {Issues};
