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
      <div className="flex flex-col gap-9">
        <NavSection title="Mapas">
          <NavLink 
            title="Criar mapas" 
            icon={<svg width="19" height="19" xmlns="http://www.w3.org/2000/svg"><path d="M14 11h2v3h3v2h-3v3h-2v-3h-3v-2h3v-3ZM2 0h14a2 2 0 0 1 2 2v7.8c-.61-.35-1.28-.6-2-.72V2h-3.22c-.11 1-.95 1.79-1.98 1.79h-2v2c0 .56-.45 1-1 1h-2v2h6c.43 0 .8.27.94.65A6.013 6.013 0 0 0 9 14.83c-1.3-.04-2.2-.93-2.2-2.04v-1L2 7.29V16h7.08c.12.72.37 1.39.72 2H2a2 2 0 0 1-2-2V2C0 .89.89 0 2 0Z"/></svg>} 
            link="/maps/create"
            isActive={activeRoute === "/maps/create"}
          />
          <NavLink 
            title="Listar mapas" 
            icon={<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M2 0C.89 0 0 .89 0 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm10.78 2H16v12.18c-.26-.8-1.31-1.39-2.2-1.39h-1v-3a1 1 0 0 0-1-1h-6v-2h2a1 1 0 0 0 1-1v-2h2c1.03 0 1.87-.79 1.98-1.79ZM2 7.29l4.8 4.5v1a2 2 0 0 0 2 2V16H2V7.29Z"/></svg>}
            link="/maps"
            isActive={activeRoute === "/maps"}
          />
        </NavSection>
      </div>
    </aside>
  )
}