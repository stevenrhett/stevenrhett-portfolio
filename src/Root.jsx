
import React from 'react';
import {Outlet} from "react-router-dom";
import MainNavigation from "./components/MainNavigation.jsx";
import{useNavigation} from "react-router-dom";
function Root() {
    const navigation = useNavigation();
    return (
        <>
            <MainNavigation/>
            <main>
                {navigation.state === 'loading' && <p>Loading...
                    <progress className="progress w-56"></progress></p>

                }
                {navigation.state === 'error' && <p>Error!</p>}

                <Outlet/>
            </main>

        </>
    );
}


export default Root;
