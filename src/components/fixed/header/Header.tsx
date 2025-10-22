"use client"; // add this if you’re using Next.js App Router (app/)

import { useState } from "react";
import {
    Home,
    TrendingUp,
    Cpu,
    Map,
    FileText,
    ChevronLeft,
    ChevronRight,
    Menu,
    X,
} from "lucide-react";
import Image from "next/image";
import imgss from '../.././../../public/icons/logo.png'
import Link from "next/link";

interface NavItem {
    label: string;
    href: string;
}

interface IconNavItem {
    icon: React.ComponentType<{ size?: number }>;
    label: string;
    href?: string;
}

const navItems: NavItem[] = [
    { label: "Aptitude", href: "https://codolog.in/aptitude-preprations/" },
    { label: "C Language", href: "https://codolog.in/c-programming-language/" },
    { label: "C++", href: "https://codolog.in/c-plus-plus/" },
    { label: "Core Java", href: "#" },
    { label: "Python", href: "#" },
    { label: "PHP", href: "#" },
    { label: "AI", href: "#" },
    { label: "Software Engineering", href: "#" },
    { label: "Project Management", href: "#" },
    { label: "Embedded System", href: "#" },
    { label: "IOT", href: "#" },
    { label: "APP Development", href: "#" },
    { label: "Flutter", href: "#" },
    { label: "Raspberry PI", href: "#" },
    { label: "Operating System", href: "#" },
];

const iconNavItems: IconNavItem[] = [
    { icon: Home, label: "Home", href: "/" },
    { icon: TrendingUp, label: "Trending", href: "#" },
    { icon: Cpu, label: "Tech", href: "#" },
    { icon: Map, label: "Roadmap", href: "#" },
    { icon: FileText, label: "Resume", href: "#" },
];

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const scrollNav = (direction: "left" | "right") => {
        const navMenu = document.getElementById("navMenu");
        if (navMenu) {
            const scrollAmount = 200;
            const currentScroll = navMenu.scrollLeft;
            const newPosition =
                direction === "left"
                    ? Math.max(0, currentScroll - scrollAmount)
                    : currentScroll + scrollAmount;

            navMenu.scrollTo({
                left: newPosition,
                behavior: "smooth",
            });
        }
    };

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <div className="w-full font-['Roboto'] z-[9989]">
{/* fixed */}
            <header className=" w-full fixed  top-1 z-50 bg-black/10   backdrop-blur-md text-black shadow-md rounded-3xl mb-2">
                <div className="flex items-center justify-between px-4 py-3">


<Link href="/">
                    <div className="flex items-center gap-2">
                        <div className="bg-white rounded-full ">
                            <Image
                                src={imgss}
                                alt="Codolog Logo"
                                width={52}
                                height={52}
                            />
                        </div>
                        <div className="pt-2">
                            <div className="leading-[20px]">
                                <h1 className="text-[28px] font-bold font-sans">Codolog</h1>
                                <p className="pt-[1px] text-[10px] font-sans pl-[2px]">Always Learn Unique</p>
                            </div>
                        </div>
                    </div>
</Link>
                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-6">
                            {iconNavItems.map((item, i) => (
                                <li key={i} className="relative group">
                                    <a
                                        href={item.href}
                                        className="flex items-center justify-center p-2 rounded-md hover:bg-white/10"
                                    >
                                        <item.icon size={20} />
                                        <span className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 bg-white text-black text-xs font-medium px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap">
                                            {item.label}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <button
                        className="md:hidden p-2 rounded hover:bg-white/10"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>

{/* fixed w */}
   <div className="w-full fixed top-[80px] z-100 bg-white/90 border-b border-gray-200  hidden md:block">
                <div className="flex items-center h-12">
                    <button
                        onClick={() => scrollNav("left")}
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-800 mx-2"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <div className="flex-1 overflow-hidden">
                        <ul
                            id="navMenu"
                            className="flex overflow-x-auto scroll-smooth whitespace-nowrap no-scrollbar"
                        >
                            {navItems.map((item, i) => (
                                <li key={i} className="flex-shrink-0">
                                    <a
                                        href={item.href}
                                        className="block px-4 py-3 text-sm font-light text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button
                        onClick={() => scrollNav("right")}
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-800 mx-2"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            <div
                className={`fixed inset-0 bg-black/50 z-60 transition-all ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
            >
                <div
                    className={`top-2 z-50 bg-black/30 text-white backdrop-blur-md  shadow-md  w-72 h-full p-4 transform transition-transform ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                >
                    <div className="flex justify-between items-center mb-6 border-b pb-4">
                        <h2 className="text-lg font-bold">Menu</h2>
                        <button
                            onClick={toggleMobileMenu}
                            className="p-1 rounded hover:bg-gray-100"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <nav className="">
                        <div className="mb-6">
                            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
                                Quick Access
                            </h3>
                            <ul className="space-y-2">
                                {iconNavItems.map((item, i) => (
                                    <li key={i}>
                                        <a
                                            href={item.href}
                                            className="flex items-center gap-3 p-3 rounded-md text-white hover:bg-gray-100"
                                        >
                                            <item.icon size={20} />
                                            <span>{item.label}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                                Categories
                            </h3>
                            <ul className="space-y-2">
                                {navItems.map((item, i) => (
                                    <li key={i}>
                                        <a
                                            href={item.href}
                                            className="block px-3 py-2 rounded-md text-sm text-white hover:bg-gray-100"
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;
