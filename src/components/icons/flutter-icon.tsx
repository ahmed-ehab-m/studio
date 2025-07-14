import type { SVGProps } from "react";

export function FlutterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M7 14l5-5 5 5" />
      <path d="M7 20l10-10" />
    </svg>
  );
}
