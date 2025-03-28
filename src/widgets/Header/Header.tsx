import {FC} from 'react';

import { Container } from '../Container/Container';
import Image from 'next/image';
import Search from '@/features/Search';

const Header: FC = () => {
    return (
        <header className="pt-10">
            <Container>
                <div className='flex p-8 items-center justify-between border-b border-gray-300 bg-gradient-to-b from-zinc-300 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit rounded-xl h-[80px]'>
                    <Image 
                        src={"https://i5.walmartimages.com/seo/Rick-and-Morty-Metal-Wall-Art_bcc4085e-c311-4886-a7a4-aa58127883d7.5958f8a36f96aa4c08dbc4a8a580e57c.png"}
                        alt="Rick and Morty logo"
                        width={50} 
                        height={50}
                    />
                    <Search />
                </div>
            </Container>
        </header>
    );
};

export default Header;