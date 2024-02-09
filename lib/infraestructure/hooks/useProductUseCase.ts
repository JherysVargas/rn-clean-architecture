import {useQuery} from '@tanstack/react-query';
import {ProductGateway} from '../../domain/interfaces';

type Props = {
  productUseCase: ProductGateway;
};

export const useProductsUseCase = ({productUseCase}: Props) => {
  const response = useQuery({
    queryKey: ['products'],
    queryFn: () => productUseCase.getProducts(),
  });
  return {
    products: {
      data: response.data,
      error: response.error,
      isLoading: response.isLoading,
    },
  };
};
