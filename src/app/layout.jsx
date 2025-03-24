// src/app/layout.jsx
import './globals.css';
import Header from '../components/Header';

export const metadata = {
    title: 'HRnet - Gestion des employés',
    description: 'Application interne pour gérer les dossiers des employés avec React & Next.js',
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <body className="bg-gray-100 text-gray-900 min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow container mx-auto px-4 py-6">{children}</main>
            </body>
        </html>
    );
}
