'use client';

export default function GlobalError({ error, reset }) {
    return (
        <html>
            <body>
                <div className="text-center p-10">
                    <h2 className="text-xl text-red-600">Une erreur est survenue</h2>
                    <button onClick={() => reset()} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
                        Réessayer
                    </button>
                </div>
            </body>
        </html>
    );
}
