"use client"

import {ChangeEvent, FC, FormEvent, useCallback, useState} from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { useDebounce } from '@/utils/hooks';
import { useRouter } from 'next/navigation';

const Search: FC = () => {
    const [search, setSearch] = useState<string>("");
    const router = useRouter()

    const changeSearch = (value: string) => {
        setSearch(value);
    }

    const debouncedChange = useDebounce(changeSearch, 200)

    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        debouncedChange(event.target.value)
    }, [debouncedChange])

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(search) {
            router.push(`/?q=${search}`)
        } else {
            router.push("/")
        }
    }


    return (
        <form onSubmit={handleSubmit} className="relative flex w-42 h-8 border border-gray-400 hgr from-zinc-200 rounded-xl">
            <input onChange={handleChange} type="text" placeholder='Search...' className='absolute left-0 top-0 bottom-0 w-3/4 h-full outline-none p-2' />
            <button type='submit' className='absolute flex items-center justify-center right-0 top-0 bottom-0 w-1/4 h-full outline-none p-2 cursor-pointer'>
                <SearchIcon width={20} height={20} />
            </button>
        </form>
    );
};

export default Search;