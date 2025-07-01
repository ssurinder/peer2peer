import React, { useState,useEffect } from 'react'
import { getData } from '../../api/protectedApi';

export default function Teams() {
    const [activeTab, setActiveTab] = useState('Directs');
    const [directList , setDirectList] = useState([])
    useEffect(() => {
        getData('/user/direct', {})
        .then((res) => { setDirectList(res.data.data.directs), console.log('data ', res.data.data) })
        .catch((err) => console.error(err));

        console.log('NOW WE HAVE TO CALL DIRECTS API')
    }, []);

    const changeTab = ( tab = 'Directs') =>{
        setActiveTab(tab)
        if(tab  === 'LevelTeam'){
            console.log('now we have to show level team')
        }
    }
    return (

        <div className="max-w-[900px] mx-auto px-4 py-8">

            <div className="flex space-x-2 justify-center mb-6">
                <button
                    onClick={() => changeTab('Directs')}
                    className={`px-6 py-2 rounded-lg border ${activeTab === 'Directs'
                        ? 'bg-gray-200 text-black'
                        : 'bg-white text-gray-500 border-gray-300'
                        }`}
                >
                    Directs
                </button>
                <button
                    onClick={() => changeTab('LevelTeam')}
                    className={`px-6 py-2 rounded-lg border ${activeTab === 'LevelTeam'
                        ? 'bg-gray-200 text-black'
                        : 'bg-white text-gray-500 border-gray-300'
                        }`}
                >
                    Level Team
                </button>
            </div>


            <div className="overflow-x-auto">
                <table className={`min-w-full text-left border-collapse  ${activeTab != 'Directs' ? 'hidden' : ''}`}>
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
                        {
                            directList.length === 0 ? (
                                <p>No deals found.</p>
                            ) : (directList.map((direct, index) => (
                                 <tr className="border-b text-sm text-gray-700" key={index}>
                                    <td className="px-4 py-2">{index+1}</td>
                                    <td className="px-4 py-2">{direct.userId}</td>
                                    <td className="px-4 py-2">{direct.name}</td>
                                    <td className="px-4 py-2">{direct.email}</td>
                                    <td className="px-4 py-2">{direct.rank}</td>
                                </tr>
                                ))
                            )}
                        
                    </tbody>
                </table>

                <table className={`min-w-full text-left border-collapse  ${activeTab == 'Directs' ? 'hidden' : ''}`}>
                    <thead className="text-sm text-gray-500">
                        <tr className="border-b">
                            <th className="px-4 py-2 font-medium">Sno</th> 
                            <th className="px-4 py-2 font-medium">Level</th>
                            <th className="px-4 py-2 font-medium">Team</th>
                            <th className="px-4 py-2 font-medium">View</th>
                        </tr>
                    </thead>
                    <tbody> 
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
}


