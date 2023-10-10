import Link from 'next/link';

import { Movie } from '@conexa/schemas';
import { Card, CardHeader } from '@nextui-org/card';

import { starwarsEntityId } from '@/lib/params';

interface MovieCardProps extends Movie {}
export function MovieCard(props: MovieCardProps) {
  return (
    <Card isHoverable isPressable as={Link} href={`/movies/${starwarsEntityId(props.url)}`}>
      <CardHeader>{props.title}</CardHeader>
    </Card>
  );
}
