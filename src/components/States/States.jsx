import React from 'react';

const States = () => {
    return (
        <section className="bg-gradient-to-br from-[#0B2F5B] to-[#3B82F6] py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4">

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
                    Trusted by Millions, Built for You
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">

                    <div className="text-center space-y-3">
                        <p className="text-gray-200 text-sm md:text-base">
                            Total Downloads
                        </p>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                            29.6M
                        </h2>

                        <p className="text-sm md:text-base text-gray-200">
                            21% more than last month
                        </p>
                    </div>

                    <div className="text-center space-y-3">
                        <p className="text-gray-200 text-sm md:text-base">
                            Total Reviews
                        </p>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                            906K
                        </h2>

                        <p className="text-sm md:text-base text-gray-200">
                            46% more than last month
                        </p>
                    </div>

                    <div className="text-center space-y-3 sm:col-span-2 lg:col-span-1">
                        <p className="text-gray-200 text-sm md:text-base">
                            Active Apps
                        </p>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                            132+
                        </h2>

                        <p className="text-sm md:text-base text-gray-200">
                            31 more will launch
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default States;