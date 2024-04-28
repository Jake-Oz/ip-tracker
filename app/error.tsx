"use client";

import { useEffect } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  // const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  function handleStartAgain() {
    const params = new URLSearchParams(searchParams);
    params.delete("query");
    router.replace(`${pathname}?${params.toString()}`);
    router.push("/");
  }

  return (
    <main className="flex h-full flex-col items-center justify-center p-24">
      <h2 className="text-center">Something went wrong!</h2>
      <span>{error.message}</span>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={handleStartAgain}
      >
        Start again
      </button>
    </main>
  );
}
