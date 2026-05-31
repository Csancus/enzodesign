export type SimpleField = {
  key: string;
  label: string;
  type: "text" | "textarea" | "image" | "url";
};

export type ArrayField = {
  key: string;
  label: string;
  type: "array";
  itemFields: SimpleField[];
};

export type FieldDef = SimpleField | ArrayField;
