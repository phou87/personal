import { Flex, Heading, Link, Quote, Section, Text } from '@radix-ui/themes';

export default function Me() {
  return (
    <Section>
      <Flex direction="column" gap="3">
        <Text as="p" size="7">
          <Quote>
            One day you'll leave this world behind, so live a life you will
            remember.
          </Quote>{' '}
          - Avicii
        </Text>
        <Text as="p" size="3">
          I was born in Boston on September 1st, 1987. That city has very little
          relevance to my life otherwise, as I wouldn't end up going back until
          more than three decades later. My earliest memories, rather, were of
        </Text>
      </Flex>
    </Section>
  );
}
