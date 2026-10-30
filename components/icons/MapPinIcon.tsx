import IconBase, { type IconProps } from "./IconBase";

const MapPinIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </IconBase>
);

export default MapPinIcon;
