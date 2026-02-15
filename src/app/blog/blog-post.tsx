import { Card, Flex, Heading } from '@radix-ui/themes';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  thumbnailUrl: string;
  title: string;
  url: string;
}

export function BlogPost(props: Props) {
  return (
    <Link href={props.url}>
      <Card>
        <Flex>
          <Image
            alt="Blog post thumbnail"
            height="100"
            src={props.thumbnailUrl}
            width="100"
          />
          <Heading>{props.title}</Heading>
        </Flex>
      </Card>
    </Link>
  );
}
