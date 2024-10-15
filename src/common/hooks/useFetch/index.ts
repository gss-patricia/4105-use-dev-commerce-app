import { useEffect, useState } from "react";
import Http from "../../lib/httpClient";
import { IHttp } from "../../lib/httpClient/http.interface";

type FetchResult<T> = {
  data: T | null;
  isLoading: boolean;
  error: string | null;
};

function useFetch<T>(url: string): FetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const http: IHttp = Http();

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    http
      .get<T>(url)
      .then((response: T) => {
        setData(response);
        setIsLoading(false);
      })
      .catch((err: any) => {
        setError("Erro ao carregar os dados.");
        setIsLoading(false);
      });
  }, [url]);

  return { data, isLoading, error };
}

export default useFetch;
