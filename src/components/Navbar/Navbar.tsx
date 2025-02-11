import { FC } from "react";
import Logo from "../../assets/images/logo.png";

interface NavLinks {
    href: string;
    label: string;
}

const navLinks: NavLinks[] = [
    { href: "#products", label: "Products" },
    { href: "#stories", label: "Stories" },
    { href: "#about", label: "About" },
    { href: "#blogs", label: "Blogs" },
];

export const Navbar: FC = () => {
    return (
        <header>
            <div className="flex items-center justify-between container">
                {/* {logo section} */}
                <div>
                    <img src={Logo} alt="logo" className="w-40" />
                </div>

                {/* {NavLinks section} */}
                <nav>
                    <ul className="hidden md:flex items-center gap-5">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a href={link.href}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Button section */}
                <div>
                    <button className="border border-gray-400 px-4 py-2 rounded-lg hover:text-white hover:bg-[#F36A7E] duration-300 text-primary-color cursor-pointer">
                        Get in touch
                    </button>
                </div>
            </div>
        </header>
    );
};
