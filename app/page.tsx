import dynamic from "next/dynamic";

import Header from "@/components/header";
import Geoapi from "./server/geoapi";
import { MapProps } from "@/lib/types";
import Banner from "@/components/main-bannner";

const DynamicMap = dynamic(() => import("@/components/ui/map"), {
  ssr: false,
});

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || "";
  const data: MapProps = await Geoapi(query);

  return (
    <main className="mx-auto max-w-[1440px]">
      <Header />
      <Banner data={data} />
      <div className="-translate-y-[18.25rem] sm:-translate-y-40">
        <DynamicMap data={data} />
      </div>
    </main>
  );
}
