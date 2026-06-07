"use client";
import { useState } from "react";
import SectionEditor from "./SectionEditor";
import type { FieldDef } from "@/types/cms";

export default function EditBtn({
  moduleId,
  config,
  schema,
  label = "✏ Szerkesztés",
  positionClass = "absolute top-10 right-3",
}: {
  moduleId: string;
  config: Record<string, unknown>;
  schema: FieldDef[];
  label?: string;
  positionClass?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`${positionClass} bg-black/60 hover:bg-black/80 text-white text-xs px-3 py-1.5 z-10 transition-colors`}
      >
        {label}
      </button>
      {open && (
        <SectionEditor
          moduleId={moduleId}
          initialConfig={config}
          schema={schema}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
