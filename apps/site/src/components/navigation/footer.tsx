import { Avatar } from '@nextui-org/avatar';
import { Link } from '@nextui-org/link';

export function Footer() {
  return (
    <footer className='bg-background border-t-divider fixed z-20 bottom-0 left-0 flex w-screen items-center justify-center border-t py-3'>
      <Link
        isBlock
        showAnchorIcon
        color='foreground'
        className='text-xs'
        href='https://github.com/galfrevn'
      >
        <Avatar src='https://avatars.githubusercontent.com/u/89883616' className='mr-2 h-5 w-5' />
        <p className='text-xs'>
          Built by <span className='underline'>Valentín Galfré</span>
        </p>
      </Link>
    </footer>
  );
}
