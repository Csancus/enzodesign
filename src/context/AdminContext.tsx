"use client";
import { createContext, useContext, useState } from "react";

type AdminCtx = { isAdmin: boolean; setAdmin: (v: boolean) => void };

const AdminContext = createContext<AdminCtx>({ isAdmin: false, setAdmin: () => {} });

export function AdminProvider({
  children,
  initialAdmin,
}: {
  children: React.ReactNode;
  initialAdmin: boolean;
}) {
  const [isAdmin, setAdmin] = useState(initialAdmin);
  return <AdminContext.Provider value={{ isAdmin, setAdmin }}>{children}</AdminContext.Provider>;
}

export function useAdmin() {
  return useContext(AdminContext);
}
