import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = ({ setIsNavOpen }) => {
    const { pathname } = useRouter();

    //Define an array of navigation items
    const NavItems = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' },
        { name: 'Skills', link: '/skills' },
        { name: 'Projects', link: '/projects?page=1' },
        { name: 'Contact', link: '/contact' },
    ];

    return (
        <ul className='font-poppins text-base md:text-lg relative z-50'>
            {NavItems.map(({ name, link }, index) => {
                const active = link === pathname;
                return (
                    <li
                        key={`nav-item-${index}`}
                        className={`relative py-2 group hover:text-primary-white transition-all duration-300 ${
                            active && ' bg-primary-300 text-primary-white'
                        }`}
                        onClick={() => setIsNavOpen(false)}>
                        <Link href={link} className='relative z-50 block uppercase'>
                            {name}
                        </Link>
                        <div className='absolute z-0 left-0 bottom-0 w-0 h-full bg-primary-300 transition-all duration-500 group-hover:w-full'></div>
                    </li>
                );
            })}
        </ul>
    );
};

export default Navbar;
