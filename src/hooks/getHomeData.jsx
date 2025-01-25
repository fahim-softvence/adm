import React from 'react'
import useAxiosCommon from './useAxiosCommon';
import { useQuery } from '@tanstack/react-query';

function getHomeData() {
const axiosCommon = useAxiosCommon()

const {data: homepageData= {}}=useQuery({
  queryKey: ['homepageData'],
  queryFn: async()=>{
    const res = await axiosCommon.get('cms/?page_name=Home');
    return res.data?.data;
  }
})
  return {homepageData}
}

export default getHomeData
