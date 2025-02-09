import getUsers from '@/lib/getusers';
import React, { useEffect, useState } from 'react';

const GetUsers = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await getUsers();
        if (!result) {
          throw new Error('No data received');
        }
        setData(result);
      } catch (err) {
        setError(err);
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data || !data.message) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <h1>Data from API</h1>
      <p>{data.message}</p>
    </div>
  );
};

export default GetUsers;