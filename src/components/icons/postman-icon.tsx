import type { SVGProps } from "react";

export function PostmanIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
        <path d="M12 6v-4m0 20v-4m6-8h4m-20 0h4m14.485 7.515l2.829-2.829m-14.142 0l-2.829 2.829m14.142 2.829l2.829 2.829m-14.142 0l-2.829-2.829" />
    </svg>
  );
}
