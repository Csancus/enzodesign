export type SimpleField = {
  key: string;
  label: string;
  // "note": read-only info box (e.g. "images are edited on another page"); not saved.
  // "boolean": on/off switch (stored as true/false).
  type: "text" | "textarea" | "image" | "url" | "note" | "boolean";
};

export type ArrayField = {
  key: string;
  label: string;
  type: "array";
  addLabel?: string;
  itemFields: FieldDef[];
};

export type FieldDef = SimpleField | ArrayField;
