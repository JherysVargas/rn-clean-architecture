import {CategoryGateway} from '../../interfaces';
import {useQuery} from '@tanstack/react-query';

type Props = {
  categoryGateway: CategoryGateway;
};

export const useCategoryUseCase = ({categoryGateway}: Props) => {
  const response = useQuery({
    queryKey: ['categories'],
    queryFn: () => categoryGateway.getCategories(),
  });
  return {
    categories: {
      data: response.data,
      error: response.error,
      isLoading: response.isLoading,
    },
  };
};
