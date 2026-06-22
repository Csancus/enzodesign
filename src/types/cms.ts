export type SimpleField = {
  key: string;
  label: string;
  type: "text" | "textarea" | "image" | "url";
};

export type ArrayField = {
  key: string;
  label: string;
  type: "array";
  addLabel?: string;
  itemFields: FieldDef[];
};

export type FieldDef = SimpleField | ArrayField;
