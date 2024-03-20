import useJsonFetch from "../hooks/useJsonFetch"

export default function Data({ url }: { url: string}) {
    const [data, loading, error] = useJsonFetch(url, { dataInitial: {status: null} });

    return (
        <>
            {data.status && <p>Данные загружены, статус: {data && data.status}</p>}
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}            
        </>
        
    )
}