import { useEffect, useState } from "react";

const themes = [
    "light",
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
    "dracula",
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
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ?? "dracula"
    );

    useEffect(() => {
        document.getElementById("root")?.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <div className="dropdown px-1">
            <label tabIndex={0} className="btn flex gap-2">
                <span>
                    <svg
                        width="20"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                        ></path>
                    </svg>
                </span>
                <span>Theme</span>
                <span>
                    <svg
                        width="12px"
                        height="12px"
                        className="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 2048 2048"
                    >
                        <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                    </svg>
                </span>
            </label>
            <ul
                tabIndex={0}
                className="dropdown-content menu rounded-box max-h-96 w-52 overflow-auto bg-base-100 p-2 shadow"
            >
                <div className="flex flex-col">
                    {themes.map(($theme, index) => (
                        <li
                            key={index}
                            className={`${
                                theme === $theme ? "bg-base-200" : ""
                            }`}
                        >
                            <button onClick={() => setTheme($theme)}>
                                {index + 1}. {$theme}
                            </button>
                        </li>
                    ))}
                </div>
            </ul>
        </div>
    );
};

export default ThemeDropDown;
