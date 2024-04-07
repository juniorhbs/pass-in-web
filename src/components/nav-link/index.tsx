import { ComponentProps } from "react";

interface NavLinkProps extends ComponentProps<"a"> {
  children: string;
}

export function NavLink({ children }: NavLinkProps) {
  return (
    <a {...NavLink} href="" className="font-medium text-sm">
      {children}
    </a>
  );
}
