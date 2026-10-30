import IconBase, { type IconProps } from "./IconBase";

const HouseIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path d="M3 11.5 12 4l9 7.5M5.5 9.5V20h13V9.5M10 20v-5h4v5" />
  </IconBase>
);

export default HouseIcon;
