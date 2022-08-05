import React from 'react';

const BotInfo = () => {
    return (
        <>
            <div className="w-full p-2 rounded-large border flex flex-wrap items-center mt-8 mb-8">
                <div className="w-16 h-16 bg-gray-100 rounded-large p-2">
                    <img src={`${process.env.NEXT_PUBLIC_FAVICON}/logo.png`} className="" alt={'logo'}/>
                </div>
                <div className="ml-4 w-3/4">
                    <p className={'font-bold'}>Телеграмм бот 🚀 GET VPN 🚀</p>
                    <p className={'text-sm text-gray-600'}>Быстрый способ получить лучший VPN</p>
                </div>
            </div>
        </>
    );
};

export default BotInfo;
