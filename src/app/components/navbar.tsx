'use client';

import { Avatar, Box, Card, Flex, TabNav, Text } from '@radix-ui/themes';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavBar() {
  const pathname = usePathname();

  return (
    <Flex align="center" justify="between">
      <Link href="/me">
        <Card>
          <Flex align="center" gap="3">
            <Avatar fallback="Profile" radius="full" src="/profile.jpg" />
            <Text>Paul Hou</Text>
          </Flex>
        </Card>
      </Link>
      <TabNav.Root>
        <TabNav.Link active={pathname === '/'} asChild>
          <Link href="/">Home</Link>
        </TabNav.Link>
        <TabNav.Link active={pathname === '/blog'} asChild>
          <Link href="/blog">Blog</Link>
        </TabNav.Link>
        <TabNav.Link active={pathname === '/travel'} asChild>
          <Link href="/travel">Travel</Link>
        </TabNav.Link>
        <TabNav.Link active={pathname === '/music'} asChild>
          <Link href="/music">Music</Link>
        </TabNav.Link>
        <TabNav.Link active={pathname === '/survival_guides'} asChild>
          <Link href="/survival_guides">Survival Guides</Link>
        </TabNav.Link>
      </TabNav.Root>
      <Flex gap="1">
        <a href="https://www.instagram.com/phou87">
          <Image
            alt="Instagram link"
            height={24}
            src="/ig-icon.png"
            width={24}
          />
        </a>
        <a href="https://www.linkedin.com/in/paulmhou">
          <Image
            alt="LinkedIn link"
            height={24}
            src="/linkedin-icon.png"
            width={24}
          />
        </a>
      </Flex>
    </Flex>
  );
}
