type IconsType =
    | 'user'
    | 'refresh'
    | 'home'
    | 'github'
    | 'table'
    | 'template'
    | 'power'
    | 'capture'
    | 'box'
    | 'target'
    | 'thunder'
    | 'universe'
    | 'star'
    | 'check';

type IconsSizesType = 'xs' | 'sm' | 'md' | 'lg';

interface Contributor {
    id: number;
    name: string;
    htmlUrl: string;
    avatarUrl: string;
}

interface FormDataProps {
    username: string;
    reponame: string;
    color: string;
    icon: string;
}
interface FormErrors {
    isValid: boolean;
    isGithubDataValid: boolean;
    errors: FormDataProps;
}
