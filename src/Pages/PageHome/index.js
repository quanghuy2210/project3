import React from "react";
import Banner from '../../Components/Banner';
import ListTech from '../../Components/ListTech';
import ListSolution from '../../Components/ListSolution';
import Outstanding from '../../Components/Outstanding';
import Service from '../../Components/Service';
import Client from '../../Components/Client';
import Technology from '../../Components/Technology';
import Optima from '../../Components/Optima';

const PageHome = () => {
    return (
        <>
                <Banner />
                <ListTech />
                 <ListSolution />
                 <Outstanding />
                 <Service />
                 <Client />
                <Technology />
                <Optima />
        </>
    )
}

export default PageHome