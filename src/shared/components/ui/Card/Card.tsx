import {FC} from 'react';

import { CardProps } from './types';
import Image from 'next/image';

const Card: FC<CardProps> = ({name, image, species, location, status, gender}) => {
    return (
        <div
          className="group rounded-lg px-5 py-4 transition-colors border-b border-gray-300 bg-gradient-to-b from-zinc-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <Image 
            src={image} 
            width={80} 
            height={80} 
            alt={image} 
            className="w-full height-[80px] object-cover rounded-xl mb-4"
          />
          <h2 className={`mb-3 text-2xl font-semibold`}>
            {name}{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <div className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            <div className='flex items-center gap-1 mb-2'>
                Species: {species}
            </div>
            <div className='flex items-center gap-1 mb-2'>
                location: {location.name}
            </div>
            <div className='flex items-center gap-1 mb-2'>
                Status: {status}
            </div>
            <div className='flex items-center gap-1'>
                Gender: {gender}
            </div>
          </div>
        </div>
    );
};

export default Card;