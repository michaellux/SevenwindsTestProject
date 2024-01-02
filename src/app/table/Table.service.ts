import { useMutation } from '@tanstack/react-query';

export const createEntity = async () => {
  const response = await fetch(`http://185.244.172.108:8081/v1/outlay-rows/entity/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.json();
};

export const getTreeRows = async (eID: number) => {
  const response = await fetch(`http://185.244.172.108:8081/v1/outlay-rows/entity/${eID}/row/list`);
  return response.json();
};

export const useCreateEntity = () => {
  return useMutation({
    mutationFn: createEntity
  });
};
