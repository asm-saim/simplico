import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../components/Footer/Footer';
import { Bars, ColorRing } from 'react-loader-spinner';

const Root = () => {

    const navigation = useNavigation();

    return (
        <>
            <Navbar></Navbar>
            <div className='max-w-7xl mx-auto'>
                {
                    navigation.state === "loading" ?
                        (<div className='flex justify-center items-center min-h-[50vh]'>
                            <ColorRing
                                visible={true}
                                height="80"
                                width="80"
                                ariaLabel="color-ring-loading"
                                wrapperStyle={{}}
                                wrapperClass="color-ring-wrapper"
                                colors={['#3B82F6', '#3B82F6', '#3B82F6', '#3B82F6', '#3B82F6']}
                            />
                        </div>)
                        : (<Outlet></Outlet>)
                }
            </div>
            <Footer></Footer>
        </>
    );
};

export default Root;