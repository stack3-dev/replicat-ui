import { Center, Flex, Float, Icon, Text } from '@chakra-ui/react';
import { LuCircleCheck } from 'react-icons/lu';

export default function SuccessOverlay() {
  return (
    <Float placement={'middle-center'} w='full' h='full' bgColor={'black/85'}>
      <Center>
        <Flex gap='2' alignItems='center'>
          <Icon size='xl' color='green.500'>
            <LuCircleCheck />
          </Icon>
          <Text fontSize='xl'>Success</Text>
        </Flex>
      </Center>
    </Float>
  );
}
