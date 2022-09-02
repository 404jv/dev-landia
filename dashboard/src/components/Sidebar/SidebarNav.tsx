import Image from 'next/image';
import { MapTrifold } from 'phosphor-react';
import logo from '../../../public/logo.svg';
import { NavLink } from './NavLink';
import { NavSection } from './NavSection';
import createMaps from '../../../public/createMaps.svg';
import listMaps from '../../../public/listMaps.svg';

export function SidebarNav() {
  return (
    <aside className="bg-gray-950 flex flex-col py-8 px-14">
      <div className="mb-9">
        <Image src={logo} alt="" />
      </div>
      <NavSection title="Mapas">
        <NavLink 
          title="Criar mapas" 
          icon={<Image src={createMaps} alt="" />} 
          link="/maps/create"
          isActive 
        />
        <NavLink 
          title="Listar mapas" 
          icon={<Image src={listMaps} alt="" />}
          link="/maps"
        />
      </NavSection>
    </aside>
  )
}