import { Accordion, Span } from '@chakra-ui/react';

const items = [
  { value: 'a', title: 'How do it work', text: 'Some value 1...' },
  { value: 'b', title: 'blabla ...', text: 'Some value 2...' },
  { value: 'c', title: 'blabla ...', text: 'Some value 3...' },
];

export default function FAQ() {
  return (
    <Accordion.Root collapsible defaultValue={['b']}>
      {items.map((item, index) => (
        <Accordion.Item key={index} value={item.value}>
          <Accordion.ItemTrigger>
            <Span flex='1'>{item.title}</Span>
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Accordion.ItemBody>{item.text}</Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
