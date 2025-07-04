"use client";

import { doc, updateDoc } from "firebase/firestore";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  FormEvent,
  startTransition,
  useEffect,
  useState,
  useTransition,
} from "react";
import { db } from "@/firebase";
import { useDocumentData } from "react-firebase-hooks/firestore";
import Editor from "./Editor";

function Document({ id }: { id: string }) {
  const [data, loading, error] = useDocumentData(doc(db, "documents", id));
  const [input, setInput] = useState("");
  const [isUpdating, satrtTransition] = useTransition();

  useEffect(() => {
    if (data) {
      setInput(data.title);
    }
  }, [data]);

  const updateTittle = (e: FormEvent) => {
    e.preventDefault();

    if (input.trim()) {
      startTransition(async () => {
        await updateDoc(doc(db, "documents", id), {
          title: input,
        });
      });
    }
  };

  return (
    <div>
      <div className="flex max-w-6xl mx-auto justify-between pb-5">
        <form className="flex flex-1 space-x-2" onSubmit={updateTittle}>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />

          <Button disabled={isUpdating} type="submit">
            {isUpdating ? "Updating..." : "Update"}
          </Button>
        </form>
      </div>
      <div></div>
      <hr className="pb-10" />
      <Editor />
    </div>
  );
}

export default Document;
