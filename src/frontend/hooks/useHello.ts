import { useEffect, useState } from "react";
import { api } from "../api";

export const useHello = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [hello, setHello] = useState<{ message: string } | undefined>();
    const [error, setError] = useState<Error | undefined>();

    useEffect(() => {
        const abortController = new AbortController();

        setIsLoading(true);
        api.v1.hello.$get({ signal: abortController.signal })
            .then((response) => response.json())
            .then((data) => {
                setHello(data);
                setError(undefined);
            })
            .catch((error) => setError(error))
            .finally(() => setIsLoading(false));

        return () => {
            setIsLoading(true);
            abortController.abort();
        };
    }, [setIsLoading, setHello, setError]);

    return { isLoading, error, hello };
};
