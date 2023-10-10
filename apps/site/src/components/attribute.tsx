import { Card, CardHeader, CardBody } from '@nextui-org/card';
import { Divider } from '@nextui-org/divider';

export function AttributeCard({ title, value }) {
  return (
    <Card className='border-divider border'>
      <CardHeader className='flex items-center justify-center text-center'>
        <h4 className='font-semibold'>{title}</h4>
      </CardHeader>
      <Divider />
      <CardBody className='text-center flex items-center justify-center capitalize bg-neutral-950 py-3'>
        <p>{value}</p>
      </CardBody>
    </Card>
  );
}
