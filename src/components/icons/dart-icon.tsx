import type { SVGProps } from "react";

export function DartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2l10 10L12 22 2 12 12 2z" />
      <path d="M12 2v20" />
      <path d="M22 12H2" />
    </svg>
  );
}
