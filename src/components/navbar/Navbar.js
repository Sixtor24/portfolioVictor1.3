import React from 'react';
import logo from "../../assets/images/logo.png";
import { navLinksdata } from '../../constants';

const Navbar = () => {
    return (
        <div className="w-full h-20 mx-auto flex justify-between items-center font-titleFont">
            <div>
                <img src={logo} alt='logo' />
            </div>
            <div>
                <ul className="flex items-center gap-10">
                    {navLinksdata.map(({ _id, title, link }) => (
                            <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300" key={_id}>
                                {title}
                            </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Navbar