import React from 'react';
import classnames from 'classnames';

const icons = {
    user: {
        path: (
            <path d="M10 13.554l3.517 1.85-.672-3.917 2.846-2.774-3.932-.571L10 4.579 8.241 8.142l-3.932.571 2.846 2.774-.672 3.916L10 13.554zm0 2.26L3.827 19.06l1.179-6.875L.01 7.317l6.902-1.003L10 .06l3.087 6.254 6.902 1.003-4.995 4.868 1.18 6.875L10 15.814z"></path>
        ),
        viewBox: '-2 -2.5 24 24',
    },
    refresh: {
        viewBox: '-1.5 -2.5 24 24',
        path: (
            <path d="M17.83 4.194l.42-1.377a1 1 0 1 1 1.913.585l-1.17 3.825a1 1 0 0 1-1.248.664l-3.825-1.17a1 1 0 1 1 .585-1.912l1.672.511A7.381 7.381 0 0 0 3.185 6.584l-.26.633a1 1 0 1 1-1.85-.758l.26-.633A9.381 9.381 0 0 1 17.83 4.194zM2.308 14.807l-.327 1.311a1 1 0 1 1-1.94-.484l.967-3.88a1 1 0 0 1 1.265-.716l3.828.954a1 1 0 0 1-.484 1.941l-1.786-.445a7.384 7.384 0 0 0 13.216-1.792 1 1 0 1 1 1.906.608 9.381 9.381 0 0 1-5.38 5.831 9.386 9.386 0 0 1-11.265-3.328z"></path>
        ),
    },
    home: {
        viewBox: '-2 -2 24 24',
        path: (
            <path d="M18 18V7.132l-8-4.8-8 4.8V18h4v-2.75a4 4 0 1 1 8 0V18h4zm-6 2v-4.75a2 2 0 1 0-4 0V20H2a2 2 0 0 1-2-2V7.132a2 2 0 0 1 .971-1.715l8-4.8a2 2 0 0 1 2.058 0l8 4.8A2 2 0 0 1 20 7.132V18a2 2 0 0 1-2 2h-6z"></path>
        ),
    },
    github: {
        viewBox: '-2 -2 24 24',
        path: (
            <>
                <path d="M8.18 15.008c.12 0 .211-.004.271-.012a.317.317 0 0 0 .18-.107c.06-.063.09-.154.09-.274l-.004-.557c-.003-.355-.004-.637-.004-.844l-.188.033a2.41 2.41 0 0 1-.455.028 3.498 3.498 0 0 1-.57-.057 1.276 1.276 0 0 1-.548-.246 1.04 1.04 0 0 1-.36-.503l-.082-.189a2.046 2.046 0 0 0-.258-.417.989.989 0 0 0-.357-.312l-.057-.04a.602.602 0 0 1-.106-.1.455.455 0 0 1-.074-.114c-.016-.038-.003-.07.04-.094a.533.533 0 0 1 .238-.037l.164.025c.11.021.245.087.406.196.16.11.293.251.397.426.126.224.277.395.455.512a.964.964 0 0 0 .536.176c.18 0 .336-.013.467-.04a1.63 1.63 0 0 0 .369-.124c.049-.365.182-.647.4-.843a5.61 5.61 0 0 1-.839-.148 3.346 3.346 0 0 1-.77-.32 2.204 2.204 0 0 1-.66-.548c-.174-.219-.317-.505-.43-.86a4.09 4.09 0 0 1-.167-1.229c0-.66.216-1.223.647-1.687-.202-.497-.183-1.054.057-1.671.159-.05.394-.013.705.11.311.123.54.228.684.316.145.087.26.16.348.22a5.814 5.814 0 0 1 1.573-.212c.54 0 1.065.07 1.573.213l.31-.197c.214-.13.465-.251.754-.36.29-.11.511-.14.664-.09.246.617.268 1.174.065 1.67.432.465.648 1.027.648 1.688 0 .464-.056.875-.168 1.233-.112.358-.257.644-.434.86a2.29 2.29 0 0 1-.664.545 3.342 3.342 0 0 1-.77.32 5.605 5.605 0 0 1-.84.147c.284.245.426.633.426 1.163v1.957c0 .093.014.168.041.226a.226.226 0 0 0 .131.119c.06.021.114.035.16.04.047.006.113.009.2.009h-1.966-2.227z"></path>
                <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"></path>
            </>
        ),
    },
    table: {
        viewBox: '-5 -5 24 24',
        path: (
            <path d="M2,4 L2,12 L12,12 L12,4 L2,4 Z M0,2 C0,0.8954305 0.8954305,0 2,0 L12,0 C13.1045695,0 14,0.8954305 14,2 L14,12 C14,13.1045695 13.1045695,14 12,14 L2,14 C0.8954305,14 0,13.1045695 0,12 L0,2 Z"></path>
        ),
    },
    template: {
        viewBox: '-5 -5 24 24',
        path: (
            <path d="M6,12 L11,12 C11.5522847,12 12,11.5522847 12,11 L12,6 L6,6 L6,12 Z M4,12 L4,6 L2,6 L2,11 C2,11.5522847 2.44771525,12 3,12 L4,12 Z M12,3 C12,2.44771525 11.5522847,2 11,2 L3,2 C2.44771525,2 2,2.44771525 2,3 L2,4 L12,4 L12,3 Z M3,0 L11,0 C12.6568542,0 14,1.34314575 14,3 L14,11 C14,12.6568542 12.6568542,14 11,14 L3,14 C1.34314575,14 0,12.6568542 0,11 L0,3 C0,1.34314575 1.34314575,0 3,0 Z"></path>
        ),
    },
    power: {
        viewBox: '-3 -2.5 24 24',
        path: (
            <path d="M12 4.1a.973.973 0 0 1-.617-.898c0-.536.448-.972 1-.972.116 0 .228.02.332.055.001-.003.002-.004.004-.003C15.834 3.658 18 6.708 18 10.252 18 15.082 13.97 19 9 19s-9-3.917-9-8.749C0 6.732 2.137 3.7 5.218 2.31a1.022 1.022 0 0 1 .392-.076c.552 0 1 .435 1 .971a.972.972 0 0 1-.61.896c-2.365 1.092-4 3.436-4 6.15 0 3.758 3.134 6.805 7 6.805s7-3.047 7-6.805c0-2.714-1.635-5.058-4-6.15zM9 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1z"></path>
        ),
    },
    capture: {
        viewBox: '-2 -2 24 24',
        path: (
            <path d="M8.164 11.107l1.817 1.049 1.87-1.08V9.01L9.96 7.92 8.164 9.042v2.065zm-2-1.155V2.978a8.02 8.02 0 0 0-3.839 4.758l3.84 2.216zm-4.163-.094L2 10a7.97 7.97 0 0 0 2.19 5.499l3.79-2.189-5.979-3.452zm6.163-3.174l5.808-3.63A7.963 7.963 0 0 0 10 2c-.632 0-1.246.073-1.836.212v4.472zm7.503-2.33l-3.786 2.365 6.115 3.531a7.975 7.975 0 0 0-2.329-5.897zm-1.816 5.812v6.848a8.022 8.022 0 0 0 3.796-4.656l-3.796-2.192zm-7.993 6.68A7.963 7.963 0 0 0 10 18c.637 0 1.257-.074 1.85-.215v-4.4l-5.992 3.46zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"></path>
        ),
    },
    box: {
        viewBox: '-2 -4 24 24',
        path: (
            <path d="M3 0h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm0 2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3zm10.874 5a4.002 4.002 0 0 1-7.748 0H2V5h16v2h-4.126zm-2.142 0H8.268a2 2 0 0 0 3.464 0z"></path>
        ),
    },
    target: {
        viewBox: '-2 -2 24 24',
        path: (
            <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-1a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-2a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path>
        ),
    },
    thunder: {
        viewBox: '-6 -2 24 24',
        path: (
            <path d="M8.997 6.968H6.708V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v5.923a1 1 0 0 0 .966 1l1.937.061v7.404a.549.549 0 0 0 1.053.216l3.96-9.242a1 1 0 0 0-.92-1.394zM8.708 3v1.968h.289a3 3 0 0 1 2.757 4.181l-3.96 9.243a2.549 2.549 0 0 1-4.891-1.004v-5.466A3 3 0 0 1 0 8.923V3a3 3 0 0 1 3-3h2.708a3 3 0 0 1 3 3z"></path>
        ),
    },
    universe: {
        viewBox: '-3 -3 24 24',
        path: (
            <>
                <path d="M2.079 15.921c.815.816 5.102-.95 8.997-4.845 3.895-3.895 5.66-8.182 4.845-8.997-.815-.816-5.102.95-8.997 4.845-3.895 3.895-5.66 8.182-4.845 8.997zM.694 17.306c-1.91-1.912.258-7.18 4.845-11.767S15.394-1.217 17.306.694c1.91 1.912-.258 7.18-4.845 11.767S2.606 19.217.694 17.306z"></path>
                <path d="M6.924 11.076c3.895 3.895 8.182 5.66 8.997 4.845.816-.815-.95-5.102-4.845-8.997-3.895-3.895-8.182-5.66-8.997-4.845-.816.815.95 5.102 4.845 8.997zm-1.385 1.385C.952 7.874-1.217 2.606.694.694c1.912-1.91 7.18.258 11.767 4.845s6.756 9.855 4.845 11.767c-1.912 1.91-7.18-.258-11.767-4.845z"></path>
                <circle cx="9" cy="9" r="2"></circle>
            </>
        ),
    },
    star: {
        viewBox: '-2 -2.5 24 24',
        path: (
            <path d="M10 13.554l3.517 1.85-.672-3.917 2.846-2.774-3.932-.571L10 4.579 8.241 8.142l-3.932.571 2.846 2.774-.672 3.916L10 13.554zm0 2.26L3.827 19.06l1.179-6.875L.01 7.317l6.902-1.003L10 .06l3.087 6.254 6.902 1.003-4.995 4.868 1.18 6.875L10 15.814z"></path>
        ),
    },
    check: {
        viewBox: '-5 -7 24 24',
        path: (
            <path d="M5.486 9.73a.997.997 0 0 1-.707-.292L.537 5.195A1 1 0 1 1 1.95 3.78l3.535 3.535L11.85.952a1 1 0 0 1 1.415 1.414L6.193 9.438a.997.997 0 0 1-.707.292z"></path>
        ),
    },
};

const sizes = {
    sm: 24,
    md: 32,
    lg: 40,
};

interface IconProps {
    icon: IconsType;
    size?: IconsSizesType;
    className?: string;
    fill?: string;
}

export const Icon: React.FC<IconProps> = ({ icon, size = 'md', className = '', fill }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={icons[icon].viewBox}
            width={sizes[size]}
            height={sizes[size]}
            preserveAspectRatio="xMinYMin"
            className={classnames(className, ' text-center')}
            fill="currentColor"
            role="img"
        >
            {icons[icon].path}
        </svg>
    );
};