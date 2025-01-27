
import { useQuery } from '@tanstack/react-query';
import useAxiosCommon from './useAxiosCommon'; 

const useContactData = (pageName = 'Contact Us', sectionName) => {
  const axiosCommon = useAxiosCommon();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["headerdata", pageName],
    queryFn: async () => {
      let { data } = await axiosCommon.get(`cms/?page_name=${pageName}`);
      return data?.data || [];
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

export default useContactData;
