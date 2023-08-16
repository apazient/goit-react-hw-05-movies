import React from 'react';

const useHttp = (appiFnc, param) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchAll = async () => {
      try {
        const res = await appiFnc(param);
        setData(res);
      } catch (error) {
      } finally {
      }
    };
    fetchAll();
  }, [param]);
  return [data, setData];
};

export default useHttp;
