import Image from 'next/image';
import { useContext } from 'react';
import logo from '../../public/logo.svg';
import { AuthContext } from '../contexts/AuthContext';

export function Header() {
  const { signOut } = useContext(AuthContext);

  function handleSignOut() {
    signOut();
  }

  return (
    <div className="flex w-full items-center justify-between bg-gray-950 py-8 px-14">
      <Image src={logo} alt="" />
      <button
        onClick={handleSignOut}
        className="flex items-center justify-center rounded-md bg-red w-20 h-8 text-white text-base hover:brightness-90"
      >
        Sair
      </button>
    </div>
  )
}