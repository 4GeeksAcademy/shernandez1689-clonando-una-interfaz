import IconBase, { type IconProps } from "./IconBase";

const UserIcon = (props: IconProps) => (
  <IconBase filled {...props}>
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 4a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm0 14a8 8 0 0 1-6.2-2.95C7.2 15.4 9.5 14.5 12 14.5s4.8.9 6.2 2.55A8 8 0 0 1 12 20Z" />
  </IconBase>
);

export default UserIcon;
