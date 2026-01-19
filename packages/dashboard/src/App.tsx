// import React from 'react';

function App() {
    return (
        <div className="min-h-screen bg-slate-50 p-8">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900">Aegis Dashboard</h1>
                <p className="text-slate-600">Your personal web guardian overview</p>
            </header>
            <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <h2 className="text-xl font-semibold mb-4">Protection Map</h2>
                    <div className="h-64 bg-slate-100 rounded flex items-center justify-center">
                        <span className="text-slate-500">Visualization Placeholder</span>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
