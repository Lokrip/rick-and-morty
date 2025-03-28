import {FC} from 'react';

import { Container } from '@/widgets/Container/Container';
import { getListCustomers } from '@/entities/character/service';
import { CharactersListProps } from './types';
import dynamic from 'next/dynamic';
import CardSkeleton from '@/shared/components/ui/Card/CardSkeleton';

const Card = dynamic(() => import("@/shared/components/ui/Card"), {
    loading: () => {
        return <CardSkeleton />
    }
})

const CharactersList: FC<CharactersListProps> = async ({param}) => {
    const searchQuery = param!.q ?? param!.searchQuery;
    let content;
    
    try {
        const {results} = await getListCustomers(searchQuery as string);
        content = (
            <div className="grid gap-4 lg:w-full lg:grid-cols-4 lg:text-left">
                {results.map((result) => (
                    <Card 
                        key={result.id} 
                        name={result.name}  
                        image={result.image}
                        status={result.status}
                        species={result.species}
                        gender={result.gender}
                        location={result.location}
                    />
                ))}
            </div>
        )
    } catch(error) {
        console.log(error)
        content = <h1 className='font-bold text-3xl text-center'>Characters not found</h1>;
    }
    
    return (
        <section className="my-10">
            <Container>
                {content}
            </Container>
        </section>
    );
};

export default CharactersList;