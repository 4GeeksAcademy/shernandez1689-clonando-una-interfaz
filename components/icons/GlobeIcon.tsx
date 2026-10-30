import IconBase, { type IconProps } from "./IconBase";

const GlobeIcon = (props: IconProps) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
  </IconBase>
);

export default GlobeIcon;
