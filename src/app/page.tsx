import { Flex, Section, Text } from '@radix-ui/themes';

export default function Home() {
  return (
    <Section>
      <Flex direction="column" gap="3">
        <Text as="p" size="7">
          Hello! I'm Paul, a software engineer based in New York City.
        </Text>
        <Text as="p" size="3">
          I'm also a big travel, food, and music enthusiast. I forget anything
          that isn't written down, so I made this website to document all of my
          experiences as well as share them with others!
        </Text>
      </Flex>
    </Section>
  );
}
