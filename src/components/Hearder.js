import Image from 'next/image';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
export default function Header() {
  const [nav, setNav] = useState(false);
  const OpenMenu = () => {
    setNav(!nav);
  };
  const CloseMenu = () => {
    setNav(false);
  };

  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <header className="flex h-[20vh] w-full flex-col space-x-1 border-2 border-solid bg-white ">
      <div className="flex h-[5vh] w-full items-center justify-between bg-black pl-8">
        <div className=" flex flex-row space-x-2">
          <Link href="https://facebook.com">
            <Image src="/agrobibi/fb.png" width={14} height={14} />
          </Link>
          <Link href="https://facebook.com">
            <Image src="/agrobibi/twt.png" width={14} height={14} />
          </Link>

          <Link href="https://facebook.com">
            <Image src="/agrobibi/whtp.png" width={14} height={14} />
          </Link>
        </div>
        <span className="pr-9 text-xs text-white"> Tél: 243 000 000 000</span>
      </div>
      <div className="flex  h-[16vh] items-center justify-between">
        <Link href="/">
          <Image src="/agrobibi/logo3.png" width={140} height={20} />
        </Link>
        {/* mobile menus */}
        <div className="mx-8 md:hidden">
          <AiOutlineMenu
            onClick={OpenMenu}
            size={30}
            className="cursor-pointer font-bold text-[#1D244E] hover:text-[#A37D45]"
          />
        </div>
        {/* Menus desktop */}
        <div className="pr- hidden   h-[11vh] items-center space-x-16 md:flex">
          <Link
            href="/"
            className={
              currentRoute === '/'
                ? 'text-[#189643] '
                : ' text-[#3E3D3D] hover:text-[#189643] '
            }
          >
            Accueil
          </Link>
          <Link
            href="/shop"
            className={
              currentRoute === '/shop'
                ? 'text-[#189643] '
                : ' text-[#3E3D3D] hover:text-[#189643] '
            }
          >
            Shop
          </Link>
          <Link
            href="/activites"
            className={
              currentRoute === '/activites'
                ? 'text-[#189643] '
                : ' text-[#3E3D3D] hover:text-[#189643] '
            }
          >
            Activités
          </Link>
          <Link
            href="/apropos"
            className={
              currentRoute === '/apropos'
                ? 'text-[#189643] '
                : ' text-[#3E3D3D] hover:text-[#189643] '
            }
          >
            Apropos
          </Link>
        </div>
        <div className=" hidden flex-row items-center justify-between space-x-10 pr-8 md:flex">
          <button className="rounded-full border border-solid border-[#189643] p-2  pl-4 pr-4 text-[#189643]">
            {' '}
            connexion
          </button>
          <button className="rounded-full border border-[#189643]  bg-[#189643] p-2 pl-4 pr-4 text-white">
            Inscription
          </button>
        </div>
      </div>

      {/* menu mobile */}
      {nav && (
        <div
          className={
            nav
              ? 'z-1000 fixed left-0 top-0 h-screen  w-full bg-black/10 md:hidden'
              : ''
          }
        >
          <div
            className={
              nav
                ? 'z-1000 fixed left-0 top-0 h-screen w-[75%] bg-white p-10 duration-500 ease-in sm:w-[60%] md:w-[45%] '
                : ' fixed left-[-100%] top-0 p-10 duration-500 ease-in '
            }
          >
            <div>
              <div className="flex w-full items-center justify-between">
                <Image
                  src="/agrobibi/logo3.png"
                  alt="Logo "
                  width={90}
                  height={80}
                />
                <AiOutlineClose
                  onClick={CloseMenu}
                  size={30}
                  className="cursor-pointer font-bold text-[#1D244E] hover:text-[#A37D45]"
                />
              </div>
            </div>
            <div>
              <ul className="flex flex-col  py-4">
                <Link
                  href="/"
                  className={
                    currentRoute === '/'
                      ? 'text-[#189643] '
                      : ' py-4 text-[#3E3D3D] hover:text-[#189643] '
                  }
                  onClick={CloseMenu}
                >
                  <li>Accueil</li>
                </Link>
                <Link
                  href="/shop"
                  className={
                    currentRoute === '/activites'
                      ? 'text-[#189643] '
                      : ' py-4 text-[#3E3D3D] hover:text-[#189643] '
                  }
                  onClick={CloseMenu}
                  g
                >
                  <li>Shop</li>
                </Link>
                <Link
                  href="/activites"
                  className={
                    currentRoute === '/activites'
                      ? 'text-[#189643] '
                      : 'py-4 text-[#3E3D3D] hover:text-[#189643] '
                  }
                  onClick={CloseMenu}
                >
                  <li>Activités</li>
                </Link>
                <Link
                  href="/apropos"
                  className={
                    currentRoute === '/apropos'
                      ? 'text-[#189643] '
                      : 'py-4 text-[#3E3D3D] hover:text-[#189643] '
                  }
                  onClick={CloseMenu}
                >
                  <li>Apropos</li>
                </Link>
              </ul>
              <div className="ml-[-10px] mt-6 w-full"></div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
