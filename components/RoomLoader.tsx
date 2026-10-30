"use client";

import { useEffect, useState } from "react";
import { getRoomById } from "@/data/listings";
import type { Room } from "@/types/listing";
import Breadcrumbs from "./Breadcrumbs";
import RoomContent from "./RoomContent";
import RoomNotFound from "./RoomNotFound";
import RoomSkeleton from "./RoomSkeleton";

const RoomLoader = ({ id }: { id: string }) => {
  const [room, setRoom] = useState<Room | null>(null);
  const [loading, setLoading] = useState(true);

  // Simula la petición de la habitación con el id de la URL.
  useEffect(() => {
    const timer = setTimeout(() => {
      setRoom(getRoomById(id) ?? null);
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [id]);

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 pb-16 sm:px-6 sm:pt-6 lg:px-10">
      <Breadcrumbs title={room?.title} />
      {loading ? <RoomSkeleton /> : room ? <RoomContent room={room} /> : <RoomNotFound />}
    </main>
  );
};

export default RoomLoader;
