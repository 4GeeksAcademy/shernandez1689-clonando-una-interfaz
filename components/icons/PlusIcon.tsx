import IconBase, { type IconProps } from "./IconBase";

const PlusIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path d="M12 5v14M5 12h14" />
  </IconBase>
);

export default PlusIcon;
