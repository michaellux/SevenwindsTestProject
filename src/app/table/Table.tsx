import { useEffect, useState } from 'react';
import { useCreateEntity } from './Table.service';
interface Props {}

export default function Table(props: Props) {
  const mutation = useCreateEntity();
  const [response, setResponse] = useState(null);

  useEffect(() => {
    mutation.mutateAsync().then((res) => {
      setResponse(res);
    });
  }, []);

  return <div>{JSON.stringify(response)}</div>;
}
