import type { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;

interface IconBaseProps extends IconProps {
  /** Relleno sólido en vez de trazo (usuario, estrella). */
  filled?: boolean;
}

const IconBase = ({ filled = false, children, ...props }: IconBaseProps) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    {...(filled
      ? { fill: "currentColor" }
      : {
          fill: "none",
          stroke: "currentColor",
          strokeWidth: 2,
          strokeLinecap: "round" as const,
          strokeLinejoin: "round" as const,
        })}
    {...props}
  >
    {children}
  </svg>
);

export default IconBase;
