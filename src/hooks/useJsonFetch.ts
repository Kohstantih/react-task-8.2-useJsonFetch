import { useEffect, useRef, useState } from "react";
import { TuseJsonFetch } from "../types/TuseJsonFetch";
import { TOpts } from "../types/TOpts";
import { TData } from "../types/Tdata";

const useJsonFetch: TuseJsonFetch<TOpts, TData> = (url, opts) => {
    const [data, setData] = useState(opts.dataInitial);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const timestampRef = useRef<number>();

    useEffect(() => {
        const timestamp = Date.now();
        timestampRef.current = timestamp;
        
        setLoading(true);

        fetch(url)
            .then((response) => {
                if (response.ok) return response.json();
                throw new Error('Не удалось загрузить данные');
            }).then((data) => {
                if (data) {
                    if (timestampRef.current === timestamp) return setData(data)
                    else return;
                }
                throw new Error('Не удалось прочитать загруженные данные');
            }).catch((err) => {
                setError(err.message)
            }).finally(() => {
                setLoading(false)
            })
    }, [url]);

    return [data, loading, error];
}

export default useJsonFetch;