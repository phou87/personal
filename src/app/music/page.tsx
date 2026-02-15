import { Flex, Heading, Section, Text } from '@radix-ui/themes';

import { SoundcloudEmbed } from '../components/soundcloud-embed';

export default function Music() {
  return (
    <Section>
      <Flex direction="column" gap="3">
        <Text as="p" size="7">
          I never listened to music as a child.
        </Text>
        <Text as="p" size="3">
          My family never played music at home, and they always listened to talk
          radio. It wasn't until I got my first music player, an iPod Nano, that
          it began transitioning into my biggest hobby.
        </Text>
        <Heading>Mixes</Heading>
        <SoundcloudEmbed embedSrc="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/834436348&color=%23ff5500&auto_play=true&visual=true" />
        <Heading>Songs</Heading>
        <Text as="p" size="3">
          Coming soon!
        </Text>
      </Flex>
    </Section>
  );
}
