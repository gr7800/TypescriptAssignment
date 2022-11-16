import React, { FunctionComponent } from 'react'
import "./loading.scss";

interface ILoadingProps {
    loading: boolean;
}


const Loading: FunctionComponent<ILoadingProps> = (props) => {
    const { loading } = props;
    if (loading) {
        return (
            <section className='loading'>
                <h1 className='="loading__text'>Loading...</h1>
            </section>
        );
    }
    return (
        <>{props.children}</>
    )
}

export default Loading