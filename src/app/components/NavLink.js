import Link from "next/link";



const NavLink = ({ href, title }) => {
    return (
        <Link 
            href={href} 
            className="block py-2 pl-3 pr-4 md:text-3xl text-[#000000] sm:text-xl rounded md:p-0 hover:text-custom-pink"
        >
            {title}
        </Link>
    )
}

export default NavLink;