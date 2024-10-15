import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

type FetchResult<T> = {
  data: T | null;
  isLoading: boolean;
  error: string | null;
};

function useFetch<T>(url: string): FetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    setIsLoading(true);
    setError(null);
    axios
      .get(url)
      .then((response: AxiosResponse<T>) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Erro ao carregar os dados.");
        setIsLoading(false);
      });
  }, [url]);
  return { data, isLoading, error };
}
export default useFetch;
