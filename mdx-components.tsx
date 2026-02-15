import type { MDXComponents } from 'mdx/types';

import { P } from '@/app/components/mdx/p';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    p: P,
    ...components,
  };
}
