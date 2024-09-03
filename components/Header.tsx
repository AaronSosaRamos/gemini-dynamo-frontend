"use client";

import { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Link from 'next/link';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

const navigation = [
    { name: "Home", href: "/" },
    { name: "Dynamo", href: "/dynamo" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <header className="bg-white dark:bg-gray-800 shadow-lg">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center py-6">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link href="/">
                            <span className="flex items-center">
                                <span className="sr-only">Gemini Dynamo</span>
                                <span className="ml-3 text-xl font-bold text-gray-900 dark:text-gray-100">
                                    Gemini Dynamo
                                </span>
                            </span>
                        </Link>
                    </div>
                    <nav className="hidden md:flex space-x-10 items-center">
                        {navigation.map((item) => (
                            <Link key={item.name} href={item.href}>
                                <span className="text-base font-medium text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-300">
                                    {item.name}
                                </span>
                            </Link>
                        ))}
                        <button
                            onClick={toggleTheme}
                            className="ml-4 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 p-2 rounded-md focus:outline-none"
                        >
                            {theme === 'dark' ? (
                                <SunIcon className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <MoonIcon className="h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </nav>
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleTheme}
                            className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 p-2 rounded-md focus:outline-none"
                        >
                            {theme === 'dark' ? (
                                <SunIcon className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <MoonIcon className="h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="ml-4 bg-white dark:bg-gray-700 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        >
                            <span className="sr-only">Open menu</span>
                            {isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navigation.map((item) => (
                            <Link key={item.name} href={item.href}>
                                <span
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-600 transition duration-300"
                                >
                                    {item.name}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
