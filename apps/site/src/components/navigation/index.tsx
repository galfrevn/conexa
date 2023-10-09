import Link from 'next/link';

import { Icons } from '@/components/icons';
import { Button } from '@nextui-org/button';

export function Navigation() {
  return (
    <header className='bg-background fixed top-0 z-10 w-screen'>
      <nav className='font-heading mx-auto flex max-w-3xl items-center justify-center space-x-10'>
        <NavigationButton href='/characters'>Characters</NavigationButton>
        <NavigationButton href='/movies'>Movies</NavigationButton>

        <Link href='/'>
          <Icons.starwars width={200} height={150} />
        </Link>

        <NavigationButton href='/planets'>Planets</NavigationButton>
        <NavigationButton href='/starships'>Starships</NavigationButton>
      </nav>
    </header>
  );
}

interface NavigationButtonProps extends React.PropsWithChildren {
  href: string;
}

function NavigationButton(props: NavigationButtonProps) {
  return (
    <Button variant='light' color='primary' as={Link} href={props.href}>
      {props.children}
    </Button>
  );
}
