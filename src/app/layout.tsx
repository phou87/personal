import { Box, Container, Flex, Grid, Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import type { Metadata } from 'next';
import { Alegreya } from 'next/font/google';

import { NavBar } from './components/navbar';

import './globals.css';
import styles from './layout.module.css';

const alegreya = Alegreya({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-alegreya',
});

export const metadata: Metadata = {
  title: 'Paul Hou',
  description: 'Personal website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={alegreya.className}>
        <Theme hasBackground={false} scaling="110%">
          <main className={styles.main}>
            <Container size="4" width="100%">
              <Grid columns="12">
                <Box gridColumn="1 / 13">
                  <NavBar />
                </Box>
                <Box gridColumn="2 / 12">{children}</Box>
              </Grid>
            </Container>
          </main>
        </Theme>
      </body>
    </html>
  );
}
