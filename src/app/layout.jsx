import Script from 'next/script';

import { Providers } from '@/store/provider';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import './globals.css';

export const metadata = {
    title: 'HRnet',
    description: 'Application de gestion des employés',
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <head>
                {/* Font Awesome Kit */}
                <Script src="https://kit.fontawesome.com/e5228146fd.js" crossOrigin="anonymous" strategy="beforeInteractive" />
            </head>
            <body className="bg-gray-100 text-gray-900">
                <Providers>
                    <Header />
                    <main className="container mx-auto px-4 py-6">{children}</main>
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
