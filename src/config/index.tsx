const siteMetadata = {
    title: `CrazyGithubLinks`,
    description: `CrazyGithubLinks is a place to create unique sharable links for your repositories, that encourages its users to star and view the repository.`,
    image: `/og/default.png`,
    siteUrl:
        process.env.NODE_ENV === 'production'
            ? 'https://crazygithublinks.herokuapp.com'
            : 'http://localhost:3000',
};

export { siteMetadata };
