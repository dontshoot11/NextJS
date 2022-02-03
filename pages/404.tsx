import React from 'react';
import { Ptag } from '../components';
import { withLayout } from '../layout/Layout';

function Error(): JSX.Element {
    return (
        <>
            <Ptag>Ошибка 404</Ptag>
        </>
    );
}

export default withLayout(Error);
