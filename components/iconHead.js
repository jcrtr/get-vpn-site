import React from 'react';
import {FaAngleDoubleRight, FaUserCircle} from "react-icons/fa";
import {FcGlobe} from "react-icons/fc";

const IconHead = () => {
    return (
        <>
            <div className="w-full flex flex flex-wrap justify-center items-center">
                <div className="h-16 w-16 bg-gray-100 rounded-large p-4 flex items-center justify-center">
                    <FaUserCircle className={'text-4xl text-gray-700'}/>
                </div>
                <div className="px-6">
                    <FaAngleDoubleRight className={'text-4xl text-gray-700'}/>
                </div>
                <div className="h-16 w-16 bg-gray-100 rounded-large p-4 flex items-center justify-center">
                    <FcGlobe className={'text-4xl text-gray-700'}/>
                </div>
            </div>
        </>
    );
};

export default IconHead;
