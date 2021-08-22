import { useState } from 'react';
import { Icon } from '@/components/Icon';
import { Input } from '@/components/input';
import { SEO } from '@/components/SEO';
import { colors, icons } from '@/config/constants';
import { siteMetadata } from '@/config/index';

interface IndexProps {}

const Index: React.FC<IndexProps> = ({}) => {
    const HOSTNAME = process.env.HOSTNAME;

    const [formData, setFormData] = useState<FormDataProps>({
        username: '',
        reponame: '',
        color: undefined,
        icon: undefined,
    });
    const [errors, setErrors] = useState<FormErrors>();
    const [generatedLink, setGeneratedLink] = useState<string>();
    const [linkCopied, setLinkCopied] = useState<boolean>();

    const validate = (): boolean => {
        let newErrors: FormErrors = {
            isValid: true,
            isGithubDataValid: true,
            errors: {
                username: null,
                reponame: null,
                color: null,
                icon: null,
            },
        };
        if (!formData.username) {
            newErrors.errors.username = 'Github username is required';
            newErrors.isValid = false;
        }
        if (!formData.reponame) {
            newErrors.errors.reponame = 'Github repository name is required';
            newErrors.isValid = false;
        }
        if (!formData.color) {
            newErrors.errors.color = 'Please select anyone color';
            newErrors.isValid = false;
        }
        if (!formData.icon) {
            newErrors.errors.icon = 'Please select anyone icon';
            newErrors.isValid = false;
        }
        setErrors(newErrors);
        return newErrors.isValid;
    };

    const validateGithubData = async (username, repositoryName): Promise<boolean> => {
        let response = await fetch(`https://api.github.com/repos/${username}/${repositoryName}`);
        let repositoryInfo = await response.json();
        // github sends repo information with id if repository exists
        return !!repositoryInfo.id;
    };

    const handleSubmit = async () => {
        // validating empty values
        const isFormValid = validate();
        if (!isFormValid) return;

        // validating valid github data
        const isGithubDataValid = await validateGithubData(formData.username, formData.reponame);
        if (!isGithubDataValid) {
            setErrors({ isGithubDataValid: false, isValid: true, errors: null });
            return;
        }

        setLinkCopied(false);
        // encoding link id
        let encodedString = window.btoa(
            `${formData.username}/${formData.reponame};${formData.color};${formData.icon}`
        );

        let link = `${siteMetadata.siteUrl}/links/${encodedString}`;
        setGeneratedLink(link);
    };
    const copyLink = () => {
        const el = document.createElement('textarea');
        el.value = generatedLink;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        setLinkCopied(true);
    };
    const reset = () => {
        setFormData({
            username: '',
            reponame: '',
            color: undefined,
            icon: undefined,
        });
        setErrors(undefined);
        setGeneratedLink(undefined);
        setLinkCopied(false);
    };

    let buttonContent = (
        <button
            onClick={handleSubmit}
            className="text-white m-1 bg-green border-0 py-2 px-8 transition-colors focus:outline-none hover:bg-shades-1 rounded text-lg"
        >
            Generate Link
        </button>
    );
    if (generatedLink) {
        buttonContent = (
            <button
                onClick={copyLink}
                className="text-white m-1 bg-indigo-600 border-0 py-2 px-8 transition-colors focus:outline-none hover:bg-indigo-500 rounded text-lg"
            >
                Link Generated! Click to copy
            </button>
        );
    }

    return (
        <>
            <SEO title="Generate Link" />
            <div className="bg-green min-h-screen flex flex-col items-center p-1">
                <p className="mt-3 mb-1 text-dustWhite hover:text-white hover:underline cursor-pointer transition-colors font-semibold italic text-4xl font-serif">
                    CrazyGithubLinks
                </p>
                <div className="bg-dustWhite shadow-md rounded-md min-h-3/4 p-5 w-full max-w-5xl mb-6 space-y-4">
                    <div className="py-2">
                        <label className="text-xl font-sans font-medium">
                            1. Write your github username &amp; repository name
                        </label>
                        <div className="flex flex-row">
                            <Input
                                value={formData?.username}
                                onChange={(e) =>
                                    setFormData({ ...formData, username: e.currentTarget.value })
                                }
                                id="username"
                                type="text"
                                placeholder="username"
                                className="rounded-l-md"
                                isInvalid={!!errors?.errors?.username}
                                error={errors?.errors?.username}
                            />
                            <Input
                                value={formData?.reponame}
                                onChange={(e) =>
                                    setFormData({ ...formData, reponame: e.currentTarget.value })
                                }
                                id="repo"
                                type="text"
                                placeholder="repository"
                                className="rounded-r-md"
                                isInvalid={!!errors?.errors?.reponame}
                                error={errors?.errors?.reponame}
                            />
                        </div>
                    </div>

                    <div className="py-2">
                        <label className="text-xl font-sans font-medium">2. Pick a color</label>
                        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-1 md:gap-2 w-full">
                            {colors.map((color, i) => (
                                <div
                                    key={i}
                                    className={`h-11 border-2 cursor-pointer transition-all duration-200 border-gray-900 rounded-md hover-lift-up`}
                                    style={{ backgroundColor: color }}
                                    onClick={() => setFormData({ ...formData, color: color })}
                                >
                                    {color === formData?.color ? (
                                        <Icon icon="check" size="lg" />
                                    ) : null}
                                </div>
                            ))}
                        </div>
                        {errors?.errors?.color && (
                            <p className="input-error">{errors.errors.color}</p>
                        )}
                    </div>

                    <div className="py-2">
                        <label className="text-xl font-sans font-medium">3. Pick an Icon</label>
                        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-1 md:gap-2 w-full">
                            {icons.map((icon, i) => (
                                <div
                                    key={i}
                                    className={`py-2 flex flex-col hover-lift-up transition-all duration-200 items-center md:flex-row gap-1 justify-center cursor-pointer ${
                                        formData.icon === icon ? 'bg-gray-300' : 'bg-gray-100'
                                    } border-2 duration-200 hover:bg-gray-300 border-gray-900 rounded-md`}
                                    onClick={() => setFormData({ ...formData, icon: icon })}
                                >
                                    <Icon icon={icon} size="md" />
                                    {formData?.icon === icon ? (
                                        <Icon icon="check" />
                                    ) : (
                                        <span className="self-center text-lg capitalize">
                                            {icon}
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                        {errors?.errors?.icon && (
                            <p className="input-error">{errors.errors.icon}</p>
                        )}
                    </div>

                    {errors && !errors.isGithubDataValid && (
                        <p className="mx-1 input-error">
                            It seems like github{' '}
                            <span className="font-medium">username/repository-name</span> are not
                            valid, please try again with valid data.
                        </p>
                    )}

                    {/* Dynamic button for submit, generate and copy link */}
                    {buttonContent}
                    <button
                        onClick={reset}
                        className="text-black inline-block m-1 bg-gray-400 border-0 py-2 px-8 transition-colors focus:outline-none hover:bg-gray-300 rounded text-lg"
                    >
                        Reset
                    </button>

                    {linkCopied && (
                        <p className="mx-1 text-base text-green font-medium">
                            <Icon icon="check" size="sm" className="inline-block" />
                            Link Copied to clipboard! <br />
                            Share, collaborate and advertise repo anywhere on internet.
                        </p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Index;
