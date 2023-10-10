'use client';

import Link from 'next/link';
import Image from 'next/image';

import { useState } from 'react';

import { Icons } from '@/components/icons';

import { Button } from '@nextui-org/button';
import { Navbar, NavbarContent, NavbarMenu, NavbarMenuItem } from '@nextui-org/navbar';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBlurred
      isBordered
      classNames={{ wrapper: 'px-2 lg:h-40' }}
    >
      <NavbarContent className='flex !justify-center lg:hidden'>
        <Button
          isIconOnly
          radius='full'
          variant='light'
          data-testid={isMenuOpen ? 'menu-close-button' : 'menu-open-button'}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <Icons.close className='h-5 w-5' /> : <Icons.menu className='h-5 w-5' />}
        </Button>

        <Link href='/'>
          <Image src='/starwars-small.png' alt='Starwars Logo' width={233} height={24} />
        </Link>

        <div className='h-10 w-10'></div>
        {/* <Button isIconOnly radius='full' variant='light'>
          <Icons.search className='h-5 w-5' />
        </Button> */}
      </NavbarContent>

      <NavbarContent className='hidden flex-col !justify-center lg:flex'>
        <Link href='/'>
          <Image src='/starwars.png' alt='Starwars Logo' width={160} height={67} />
        </Link>
        <ul className='flex translate-y-[10px] items-center justify-center space-x-8'>
          <NavigationButton label='Characters' href='/characters' />
          <NavigationButton label='Movies' href='/movies' />
          <NavigationButton label='Starships' href='/starships' />
          <NavigationButton label='Planets' href='/planets' />
          {/* <NavigationButton label='Saved' href='/saved' /> */}
        </ul>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <NavigationButton
            onClick={() => setIsMenuOpen(false)}
            label='Characters'
            href='/characters'
          />
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NavigationButton onClick={() => setIsMenuOpen(false)} label='Movies' href='/movies' />
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NavigationButton
            onClick={() => setIsMenuOpen(false)}
            label='Starships'
            href='/starships'
          />
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NavigationButton onClick={() => setIsMenuOpen(false)} label='Planets' href='/planets' />
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

function NavigationButton({ label, href, onClick = () => {} }) {
  return (
    <Button
      variant='light'
      as={Link}
      href={href}
      onClick={onClick}
      className='text-foreground/80 h-8 uppercase'
    >
      {label}
    </Button>
  );
}
