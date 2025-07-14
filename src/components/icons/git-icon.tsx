import type { SVGProps } from "react";

export function GitIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 19a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1h5l2 3h9a1 1 0 011 1v10z" />
      <path d="M12 14l-3-3 3-3" />
      <path d="M9 11h6" />
    </svg>
  );
}
