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
        <NavSection title="Fases">
          <NavLink
            title="Criar fases"
            icon={<svg width="18" height="19" xmlns="http://www.w3.org/2000/svg"><path d="M9.463 16.072a2.3 2.3 0 0 0-2.177-1.563 2.313 2.313 0 0 0-2.315 2.332v1.295H1.714A1.72 1.72 0 0 1 0 16.41v-3.282h1.286A2.313 2.313 0 0 0 3.6 10.795a2.313 2.313 0 0 0-2.314-2.331H0V5.182c0-.95.771-1.727 1.714-1.727h3.429V2.159C5.143.967 6.103 0 7.286 0c1.183 0 2.143.967 2.143 2.16v1.295h3.428a1.72 1.72 0 0 1 1.714 1.727v3.454h1.286a2.152 2.152 0 0 1 1.997 2.928 5.112 5.112 0 0 0-3.283-1.2c-2.837 0-5.142 2.323-5.142 5.181 0 .173 0 .354.034.527Zm4.251-3.981v2.59h-2.571v1.728h2.571V19h1.715v-2.59H18v-1.728h-2.571V12.09h-1.715Z"/></svg>}
            link="/phases/create"
            isActive={activeRoute === "/phases/create"}
          />
          <NavLink
            title="Listar fases"
            icon={<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M15.857 8.571h-1.286V5.143c0-.952-.771-1.714-1.714-1.714H9.43V2.143a2.143 2.143 0 1 0-4.286 0v1.286H1.714A1.714 1.714 0 0 0 0 5.143V8.4h1.286A2.305 2.305 0 0 1 3.6 10.714a2.305 2.305 0 0 1-2.314 2.315H0v3.257A1.714 1.714 0 0 0 1.714 18h3.257v-1.286A2.305 2.305 0 0 1 7.286 14.4 2.305 2.305 0 0 1 9.6 16.714V18h3.257a1.714 1.714 0 0 0 1.714-1.714v-3.429h1.286a2.143 2.143 0 1 0 0-4.286Z"/></svg>}
            link="/phases"
            isActive={activeRoute === "/phases"}
          />
        </NavSection>
      </div>
    </aside>
  )
}