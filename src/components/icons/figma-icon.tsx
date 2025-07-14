import type { SVGProps } from "react";

export function FigmaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 12a3 3 0 100-6 3 3 0 000 6z" />
      <path d="M12 18a3 3 0 100-6 3 3 0 000 6z" />
      <path d="M18 12a3 3 0 10-6 0 3 3 0 006 0z" />
      <path d="M6 12a3 3 0 10-6 0 3 3 0 006 0z" />
      <path d="M15 6a3 3 0 10-6 0 3 3 0 006 0z" />
    </svg>
  );
}
