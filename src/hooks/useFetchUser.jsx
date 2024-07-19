import axios from "axios";
import { useState, useEffect } from "react";

export const useFetchUser = (token) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!token) {
        setError("No token provided");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_BASE_API}/users`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        setData(response.data.payload.datas[0]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [token]);

  return { data, loading, error };
};
