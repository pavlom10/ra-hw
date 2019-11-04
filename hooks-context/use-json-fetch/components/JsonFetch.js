import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';

export default function JsonFetch(props) {

    const {url} = props;
    const [data, loading, error] = useJsonFetch(url);

    return (
        <>
            {loading && <p>Loading...</p>}
            Data: {data ? data.status : 'none'} <br />
            Error: {error ? error : 'none'} <br />
            <br /><br />
        </>
    )

}