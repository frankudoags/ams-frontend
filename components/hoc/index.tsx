import { useRouter } from 'next/navigation';
import React, { Fragment } from 'react'
import Cookies from 'js-cookie';

interface Props {
    children: React.ReactNode
}

const HOC = ({ children }: Props) => {
    const router = useRouter();
    const accessToken = Cookies.get('access_token');

    // Redirect to login if access token does not exist
    if (!accessToken) {
        router.push('/login');
        return null;  
    }
    return (
        <Fragment>
            {children}
        </Fragment>
    )
}

export default HOC
