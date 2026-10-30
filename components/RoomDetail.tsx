"use client";

import { useParams } from "next/navigation";
import RoomLoader from "./RoomLoader";

const RoomDetail = () => {
  const { id } = useParams<{ id: string }>();
  // `key` reinicia el estado (y la carga) si se navega a otra habitación.
  return <RoomLoader key={id} id={id} />;
};

export default RoomDetail;
