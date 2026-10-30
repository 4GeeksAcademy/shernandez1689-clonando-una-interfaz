import IconBase, { type IconProps } from "./IconBase";

const StarIcon = (props: IconProps) => (
  <IconBase filled {...props}>
    <path d="m12 2.5 2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8Z" />
  </IconBase>
);

export default StarIcon;
