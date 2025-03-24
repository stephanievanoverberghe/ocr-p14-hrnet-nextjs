'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    // Fermer le menu quand on clique à l'extérieur
    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        }
        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <header className="bg-[#5a6f07] text-white p-4 shadow-md">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-xl font-bold">
                    <Link href="/" className="focus:outline-none focus:ring-2 ring-white rounded">
                        HRnet
                    </Link>
                </h1>

                {/* Menu burger pour mobile */}
                <button
                    className="md:hidden focus:outline-none focus:ring-2 ring-white rounded"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-expanded={menuOpen}
                    aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                >
                    {menuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
                </button>

                {/* Navigation */}
                <nav
                    ref={menuRef}
                    role="navigation"
                    aria-label="Navigation principale"
                    className={`absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-[#5a6f07] md:bg-transparent text-center md:flex md:items-center transition-all duration-300 ease-in-out transform ${
                        menuOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-5 pointer-events-none'
                    } md:opacity-100 md:scale-100 md:translate-y-0 md:pointer-events-auto`}
                >
                    <ul className="md:flex md:space-x-6">
                        <li className="py-2 md:py-0">
                            <Link href="/create" className="block md:inline hover:underline focus:outline-none focus:ring-2 ring-white rounded" onClick={() => setMenuOpen(false)}>
                                Créer un employé
                            </Link>
                        </li>
                        <li className="py-2 md:py-0">
                            <Link href="/list" className="block md:inline hover:underline focus:outline-none focus:ring-2 ring-white rounded" onClick={() => setMenuOpen(false)}>
                                Liste des employés
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
