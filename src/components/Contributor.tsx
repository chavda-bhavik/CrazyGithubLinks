import React from 'react';

interface ContributorProps {
    href?: string;
    imageUrl: string;
    name: string;
}

export const Contributor: React.FC<ContributorProps> = ({ href, imageUrl, name }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener norefferer"
            className="inline-flex items-center p-2 cursor-pointer hover:bg-gray-300 transition-colors duration-200 group"
        >
            <img
                alt={name}
                src={imageUrl}
                className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center transition-colors duration-200 border-2 border-transparent group-hover:border-gray-400"
            />
            <span className="flex-grow flex flex-col pl-4">
                <span className="link font-medium">{name}</span>
            </span>
        </a>
    );
};
