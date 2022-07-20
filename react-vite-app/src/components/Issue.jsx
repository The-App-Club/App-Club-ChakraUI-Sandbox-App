import {Heading, Link, Stack, Text} from '@chakra-ui/react';

const Issue = ({issue}) => {
  return (
    <Stack
      as="section"
      key={issue.id}
      borderRadius="md"
      border="1px solid"
      borderColor="whiteAlpha.100"
      paddingY="4"
      paddingX="4"
      boxShadow="md"
    >
      <Heading fontSize="lg">
        <Link isExternal href={issue.html_url}>
          {issue.title}
        </Link>
      </Heading>
      <Text color="blackAlpha.600" fontSize="sm">
        opened by{' '}
        <Link isExternal href={issue.user.html_url}>
          {issue.user.login}
        </Link>
      </Text>
    </Stack>
  );
};

export {Issue};
