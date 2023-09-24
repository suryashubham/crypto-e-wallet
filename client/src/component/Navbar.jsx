import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import logo from '../../image/logo.png';

const NavbarItem = ( { title ,classProps}) => {
    return (
        <li className ={'mx-4 cursor-pointer ${classProps}'}>
        {title}
        </li>
    )
}


const Navbar = () => {
    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-4" >
            <diV className="md:flex-[0.5] flex-initial justify-center items-center">
                <img src= {logo} alt="logo" width="150em" height="70em"className=" cursor-pointer"/>
            </diV>
            <ul className="text-white md:flex hidden list-none flex-row justify-between item-center flex-initial">
                {["Market", "Exchange", "Tutorial", "Wallet"].map( (item, index) => (
                    <NavbarItem key = {item + index} title={item}/>
                ))}
                <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2953bd]">
                    login
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;