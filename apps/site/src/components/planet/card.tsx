import Link from 'next/link';

import { Planet } from '@conexa/schemas';
import { Card, CardHeader } from '@nextui-org/card';

import { starwarsEntityId } from '@/lib/params';

interface PlanetCardProps extends Planet {}
export function PlanetCard(props: PlanetCardProps) {
  return (
    <Card isHoverable isPressable as={Link} href={`/planets/${starwarsEntityId(props.url)}`}>
      <CardHeader>{props.name}</CardHeader>
    </Card>
  );
}
