import {memo} from 'react';

export const Small = memo(({value}) => {
    console.log('dibujo');
    return(
        <small>{value}</small>
    )
})