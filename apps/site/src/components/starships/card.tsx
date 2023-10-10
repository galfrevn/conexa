import Link from 'next/link';

import { Starship } from '@conexa/schemas';
import { Card, CardHeader } from '@nextui-org/card';

import { starwarsEntityId } from '@/lib/params';

interface StarshipCardProps extends Starship {}
export function StarshipCard(props: StarshipCardProps) {
  return (
    <Card isHoverable isPressable as={Link} href={`/starships/${starwarsEntityId(props.url)}`}>
      <CardHeader>{props.name}</CardHeader>
    </Card>
  );
}
