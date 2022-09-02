import Link from "next/link";

interface NavLink {
  isActive?: boolean;
  title: string;
  icon: JSX.Element;
  link: string;
}

export function NavLink({ isActive = false, title, icon, link }: NavLink) {
  return (
    <Link href={link}>
      <a className={`flex gap-2 ${isActive ? 'text-blue-350' : 'text-white'}`}>
        {icon}
        <span className="text-sm">
          {title}
        </span>
      </a>
    </Link>
  )
}