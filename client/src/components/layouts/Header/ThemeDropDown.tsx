import { useState, useEffect } from "react";

const ThemeIcon = () => (
    <svg
        width={20}
        height={20}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
    </svg>
);

const DownIcon = () => (
    <svg
        width="12px"
        height="12px"
        className="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2048 2048"
    >
        <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z" />
    </svg>
);

const MarkIcon = ({ visible = false }: { visible?: boolean }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`${visible ? "" : "invisible"} h-3 w-3`}
    >
        <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
    </svg>
);

const themes = [
    "light",
    "dracula",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
];

const ThemeDropDown = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "dracula");

    useEffect(() => {
        document.getElementById("root")?.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <div title="Change Theme" className="dropdown-end dropdown ">
            <div tabIndex={0} className="btn-ghost btn gap-1 normal-case">
                <ThemeIcon />
                <span className="hidden md:inline">Theme</span>
                <DownIcon />
            </div>
            <div className="dropdown-content rounded-t-box rounded-b-box top-px mt-16 h-[70vh] max-h-96 w-52 overflow-y-auto bg-base-200 text-base-content shadow-2xl">
                <div className="grid grid-cols-1 gap-3 p-3" tabIndex={0}>
                    {themes.map(($theme, index) => (
                        <button
                            key={index}
                            onClick={() => setTheme($theme)}
                            className="overflow-hidden rounded-lg text-left outline-base-content"
                            data-set-theme={$theme}
                            data-act-class="[&_svg]:visible"
                        >
                            <div
                                data-theme={$theme}
                                className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
                            >
                                <div className="grid grid-cols-5 grid-rows-3">
                                    <div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                        <MarkIcon visible={$theme === theme} />
                                        <div className="flex-grow text-sm font-bold">
                                            {$theme}
                                        </div>
                                        <div className="flex h-full flex-shrink-0 flex-wrap gap-1">
                                            <div className="w-2 rounded bg-primary" />
                                            <div className="w-2 rounded bg-secondary" />
                                            <div className="w-2 rounded bg-accent" />
                                            <div className="w-2 rounded bg-neutral" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ThemeDropDown;
