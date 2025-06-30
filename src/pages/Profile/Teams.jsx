import React, { useState } from 'react'

export default function Teams() {
    const [activeTab, setActiveTab] = useState('Directs');
    return (

        <div className="max-w-[900px] mx-auto px-4 py-8">

            <div className="flex space-x-2 justify-center mb-6">
                <button
                    onClick={() => setActiveTab('Directs')}
                    className={`px-6 py-2 rounded-lg border ${activeTab === 'Directs'
                        ? 'bg-gray-200 text-black'
                        : 'bg-white text-gray-500 border-gray-300'
                        }`}
                >
                    Directs
                </button>
                <button
                    onClick={() => setActiveTab('Level Team')}
                    className={`px-6 py-2 rounded-lg border ${activeTab === 'Level Team'
                        ? 'bg-gray-200 text-black'
                        : 'bg-white text-gray-500 border-gray-300'
                        }`}
                >
                    Level Team
                </button>
            </div>


            <div className="overflow-x-auto">
                <table className="min-w-full text-left border-collapse">
                    <thead className="text-sm text-gray-500">
                        <tr className="border-b">
                            <th className="px-4 py-2 font-medium">Sno</th>
                            <th className="px-4 py-2 font-medium">User ID</th>
                            <th className="px-4 py-2 font-medium">Name</th>
                            <th className="px-4 py-2 font-medium">Email</th>
                            <th className="px-4 py-2 font-medium">Package</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Sample Row */}
                        <tr className="border-b text-sm text-gray-700">
                            <td className="px-4 py-2">1</td>
                            <td className="px-4 py-2">U1234</td>
                            <td className="px-4 py-2">John Doe</td>
                            <td className="px-4 py-2">john@example.com</td>
                            <td className="px-4 py-2">Gold</td>
                        </tr>
                        {/* Add more rows dynamically here */}
                    </tbody>
                </table>
            </div>
        </div>
    );
}


