import React from "react";

function Heading(){
    return(
        <div className="mx-auto">
            <div className="flex bg-gradient-to-l from-sky-600 to-indigo-500 h-[200px] w-[700px] text-center mt-16 rounded-tl-lg rounded-br-lg">
                <div className="grid grid-cols-1 mx-auto">
                    <div className="grid grid-rows-1">
                    <p className="text-7xl font-bold text-white my-auto">CSS</p>
                    </div>
                    <div className="grid grid-rows-1">
                    <p className="text-4xl font-semibold text-white my-auto">History and Responsive Web Design</p>
                    </div>
                </div>
            </div>

            <div className="flex bg-heading-complement h-[100px] w-[400px] text-center mx-auto mt-12 rounded-tl-lg rounded-br-lg">
                <div className="grid grid-rows-2 mx-auto my-auto">
                    <div className="grid grid-cols-2 mx-auto text-white text-right">
                        <div className="col-span-1">
                            <p className="text-2xl font-light">Siddharth Gupta</p>
                        </div>
                        <div className="col-span-1">
                            <p className="text-2xl font-light">11419210007</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 mx-auto text-white text-right">
                        <div className="col-span-1">
                            <p className="text-2xl font-light pr-6">Varun Sharma</p>
                        </div>
                        <div className="col-span-1">
                            <p className="text-2xl font-light">11419210012</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Heading;