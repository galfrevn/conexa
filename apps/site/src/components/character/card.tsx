import Link from 'next/link';

import { Character } from '@conexa/schemas';
import { Card, CardHeader } from '@nextui-org/card';

import { starwarsEntityId } from '@/lib/params';

interface CharacterCardProps extends Character {}
export function CharacterCard(props: CharacterCardProps) {
  return (
    <Card isHoverable isPressable as={Link} href={`/characters/${starwarsEntityId(props.url)}`}>
      <CardHeader>{props.name}</CardHeader>
    </Card>
  );
}
