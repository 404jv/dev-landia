import { ReactNode } from "react";

interface NavSectionProps {
  title: string;
  children: ReactNode;
}

export function NavSection({ title, children }: NavSectionProps) {
  return (
    <div>
      <h1 className="mb-4 text-base uppercase text-gray-450 tracking-wider">
        {title}
      </h1>
      <div className="flex flex-col gap-3">
        {children}
      </div>
    </div>
  )
}