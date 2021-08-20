import { Contributor } from '@/components/Contributor';
import { Icon } from '@/components/Icon';
import { SEO } from '@/components/SEO';
import { GetStaticProps, GetServerSideProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import React from 'react';

interface ViewProps {
    description?: string;
    htmlUrl?: string;
    name: string;
    stars: number;
    contributors: Contributor[];
    owner: {
        name: string;
        htmlUrl: string;
    };
    icon: IconsType;
    color: string;
}

const View: React.FC<ViewProps> = (props) => {
    return (
        <>
            <SEO title={props.name} description={props.description} />
            <div
                className="min-h-screen flex flex-col items-center p-1"
                style={{ backgroundColor: props.color }}
            >
                <div className="bg-dustWhite shadow-md rounded-md min-h-3/4 p-5 w-full max-w-2xl mb-6">
                    <div className="py-2">
                        <div className="flex flex-col items-start">
                            <div className="inline-flex items-center justify-center rounded-full border-dark border-2 p-2 text-green mb-2">
                                <Icon icon={props.icon} size="lg" />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 title-font font-bold text-3xl font-serif">
                                    {props.name}
                                </h2>
                                <p>
                                    by{' '}
                                    <a
                                        href={props.owner.htmlUrl}
                                        className="link font-medium"
                                        target="_blank"
                                        rel="norefferer noopener"
                                    >
                                        {props.owner.name}
                                    </a>
                                </p>
                                <p className="leading-normal text-base">{props.description}</p>
                            </div>
                        </div>

                        <div className="flex flex-row mt-10">
                            <a
                                href={props.htmlUrl}
                                className="bg-gray-200 border-2 border-r-0 hover:bg-gray-300 transition-colors duration-200 border-gray-900 flex rounded-l-md flex-row justify-center items-center gap-2 px-3"
                                target="_blank"
                                rel="norefferer noopener"
                            >
                                <Icon icon="star" size="md" />
                                <span className="font-sans font-normal text-xl">Star it</span>
                            </a>
                            <div className="bg-gray-300 border-2 border-l-0 border-gray-900 h-full py-2 px-3 font-medium rounded-r-md font-sans text-xl">
                                {props.stars}
                            </div>
                        </div>

                        <section className="pt-5">
                            <h3 className="text-2xl underline font-medium mb-2">
                                Top Contributors
                            </h3>
                            <div className="flex flex-col divide-y divide-gray-500 divide-solid">
                                {props.contributors.map((contributor) => (
                                    <Contributor
                                        key={contributor.id}
                                        href={contributor.htmlUrl}
                                        imageUrl={contributor.avatarUrl}
                                        name={contributor.name}
                                    />
                                ))}
                            </div>
                        </section>
                    </div>

                    <p className="text-center">
                        powered by{' '}
                        <Link href="/">
                            <a className="link font-medium text-2xl italic" href="/">
                                CrazyGithubLinks
                            </a>
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking', //indicates the type of fallback
    };
};

export const getStaticProps: GetServerSideProps = async ({ params: { id } }) => {
    if (typeof id !== 'string') return;

    // decoding id from Base64
    let decoded = Buffer.from(id, 'base64').toString('utf-8');

    // id is constructed like username/reponame;color;icon
    let dataArr = decoded.split(';');

    // console.log(id);
    let response, repositoryInfo, contributorsData;

    // getting repository info
    response = await fetch(`https://api.github.com/repos/${dataArr[0]}`);
    repositoryInfo = await response.json();

    // if repository not found in case of broken link, send 404 page
    if (!repositoryInfo.id) {
        return {
            notFound: true,
        };
    }

    // getting contributors info
    response = await fetch(
        `https://api.github.com/repos/${dataArr[0]}/contributors?q=contributions&order=desc&per_page=10`
    );
    contributorsData = await response.json();

    if (!contributorsData) {
        return {
            notFound: true,
        };
    }
    contributorsData = contributorsData.map((contributor) => ({
        id: contributor.id,
        htmlUrl: contributor.html_url,
        name: contributor.login,
        avatarUrl: contributor.avatar_url,
    }));

    return {
        props: {
            name: repositoryInfo.name,
            owner: {
                name: repositoryInfo.owner.login,
                htmlUrl: repositoryInfo.owner.html_url,
            },
            htmlUrl: repositoryInfo.html_url,
            stars: repositoryInfo.stargazers_count,
            description: repositoryInfo.description,
            contributors: contributorsData,
            color: dataArr[1],
            icon: dataArr[2],
        },
    };
};

export default View;
