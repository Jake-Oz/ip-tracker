"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

const Header = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [term, setTerm] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  function handleSearch() {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  useEffect(() => {
    const currentInputRef = inputRef.current;
    currentInputRef?.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        handleSearch();
      }
    });
    return () => {
      currentInputRef?.removeEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          handleSearch();
        }
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [term]);

  return (
    <div className="flex flex-col gap-4 pt-8 items-center bg-[url('/pattern-bg-mobile.png')] sm:bg-[url('/pattern-bg-desktop.png')] h-[300px] sm:h-[280px]">
      <h1 className="text-2xl sm:text-4xl font-bold text-white">
        IP Address Tracker
      </h1>
      <div className="flex justify-center sm:min-w-[800px]">
        <Input
          ref={inputRef}
          type="text"
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search for any IP address or domain"
          className="cursor-pointer w-[270px] sm:min-w-[300px] sm:max-w-[500px] rounded-l-xl rounded-r-none h-[60px]"
          defaultValue={searchParams.get("query")?.toString()}
        />
        <Button
          className="flex justify-center items-center rounded-r-xl rounded-l-none h-[60px] w-[60px] hover:opacity-85"
          onClick={() => handleSearch()}
        >
          <Image src="/icon-arrow.svg" alt="Arrow" width={11} height={14} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
