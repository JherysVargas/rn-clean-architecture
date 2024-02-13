import {ProductGateway} from '../../interfaces';
import {useQuery} from '@tanstack/react-query';

type Props = {
  productGateway: ProductGateway;
};

export const useProductsUseCase = ({productGateway}: Props) => {
  const response = useQuery({
    queryKey: ['products'],
    queryFn: () => productGateway.getProducts(),
  });
  return {
    products: {
      data: response.data,
      error: response.error,
      isLoading: response.isLoading,
    },
  };
};
