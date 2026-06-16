import { createContext, useContext, type ReactNode } from "react";

type TableContextValue = {
  columns: string;
};

const TableContext = createContext<TableContextValue | null>(null);

function useTable() {
  const context = useContext(TableContext);

  if (!context) {
    throw new Error("Table components must be used inside <Table>");
  }

  return context;
}

type TableProps = {
  columns: string;
  children: ReactNode;
};

function Table({ columns, children }: TableProps) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div
        role="table"
        className="grid overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm"
      >
        {children}
      </div>
    </TableContext.Provider>
  );
}

type ChildrenProps = {
  children: ReactNode;
};

function Header({ children }: ChildrenProps) {
  const { columns } = useTable();

  return (
    <div
      role="row"
      style={{ gridTemplateColumns: columns }}
      className="grid items-center border-b border-slate-200 bg-slate-50 px-5 py-3 text-xs font-semibold tracking-wide text-slate-500 uppercase"
    >
      {children}
    </div>
  );
}

function Row({ children }: ChildrenProps) {
  const { columns } = useTable();
  return (
    <div
      role="row"
      style={{ gridTemplateColumns: columns }}
      className="grid items-center border-b border-slate-100 px-5 py-4 text-sm text-slate-700 transition last:border-b-0 hover:bg-slate-50"
    >
      {children}
    </div>
  );
}

function Body({ children }: ChildrenProps) {
  return <div role="rowgroup">{children}</div>;
}

function Footer({ children }: ChildrenProps) {
  return (
    <div className="flex justify-end border-t border-slate-200 bg-slate-50 px-5 py-3 text-sm text-slate-500">
      {children}
    </div>
  );
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;

export default Table;
