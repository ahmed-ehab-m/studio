import type { SVGProps } from "react";

export function FirebaseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4.62 16.32L12 22l7.38-5.68" />
      <path d="M12 2L4.62 7.68 12 13.36l7.38-5.68L12 2z" />
      <path d="M4.62 7.68L12 13.36V22" />
      <path d="M19.38 7.68L12 13.36V22" />
    </svg>
  );
}
