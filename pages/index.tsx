import React, { useEffect, useState } from 'react';
import { Tag, Htag, Ptag, Button, Rating } from '../components';
import { withLayout } from '../layout/Layout';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { Input } from '../components/Input/Input';
import { Textarea } from '../components/Textarea/Textarea';

function Home({ menu }: HomeProps): JSX.Element {
    const [rating, setRating] = useState<number>(0);
    return (
        <>
            <Ptag>Текст</Ptag> <Ptag size="big">Текст</Ptag>
            <Tag>Приветик</Tag>
            <Tag size="big" color="green">
                Приветик
            </Tag>
            <Tag size="big" color="green" href="www.ya.ru">
                Ссылка
            </Tag>
            <Button
                appearance="ghost"
                arrow="down"
                onClick={() => console.log('sdsd')}
            >
                Кнопка
            </Button>
            <Rating isEditable={true} rating={rating} setRating={setRating} />
            <Input placeholder="тест" />
            <Textarea placeholder="тест" />
        </>
    );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.post<MenuItem[]>(
        process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
        {
            firstCategory,
        }
    );
    return {
        props: {
            menu,
            firstCategory,
        },
    };
};

interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: number;
}
