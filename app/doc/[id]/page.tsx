"use client";

import { use } from "react";
import Document from "@/components/Document";

function DocumentPage({
  params,
}: {
  params: Promise<{ id: string }> | { id: string };
}) {
  // If it's a Promise, unwrap it
  const { id } =
    typeof (params as any).then === "function"
      ? use(params as Promise<{ id: string }>)
      : (params as { id: string });

  return (
    <div className="flex flex-col flex-1 min-h-screen">
      <Document id={id} />
    </div>
  );
}

export default DocumentPage;
