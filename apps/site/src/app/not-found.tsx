import Image from 'next/image';

export default function NotFoundPage() {
  return (
    <div className='mt-10 flex flex-col w-full items-center justify-center'>
      <Image src='/404.png' alt='Darth Vader' className='bg-background' width={80} height={80} />
      <p className='mt-5'>This page is not fully armed and operational.</p>
    </div>
  );
}
