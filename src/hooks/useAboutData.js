import { useQuery } from '@tanstack/react-query';
import useAxiosCommon from './useAxiosCommon'; 

const useAboutData = (pageName = 'About Us', sectionName) => {
  const axiosCommon = useAxiosCommon();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["headerdata", pageName],
    queryFn: async () => {
      const response = await axiosCommon.get(`cms/?page_name=${pageName}`);
      return response.data?.data || [];
    },
  });

  const section = Array.isArray(data) ? data.find(item => item.section_name === sectionName) : null;

  return {
    isLoading,
    isError,
    section,
    data,
  };
};

export default useAboutData;
