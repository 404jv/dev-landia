import Image from 'next/image';
import { MapTrifold } from 'phosphor-react';
import logo from '../../../public/logo.svg';
import { NavLink } from './NavLink';
import { NavSection } from './NavSection';
import createMaps from '../../../public/createMaps.svg';
import listMaps from '../../../public/listMaps.svg';
import { useRouter } from 'next/router';

export function SidebarNav() {
  const router = useRouter();

  const activeRoute = router.pathname;

  return (
    <aside className="bg-gray-950 flex flex-col py-8 px-14">
      <div className="mb-9">
        <Image src={logo} alt="" />
      </div> 
      <NavSection title="Mapas">
        <NavLink 
          title="Criar mapas" 
          icon={<MapTrifold alt="" />} 
          link="/maps/create"
          isActive={activeRoute === "/maps/create"}
        />
        <NavLink 
          title="Listar mapas" 
          icon={<MapTrifold alt="" />}
          link="/maps"
          isActive={activeRoute === "/maps"}
        />
      </NavSection>
    </aside>
  )
}