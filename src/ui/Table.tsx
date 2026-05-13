import { createContext, useContext, type ReactNode } from "react";
import { Link } from "react-router-dom";

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
        className="border-brand-100 grid overflow-hidden rounded-2xl border bg-white/60 shadow-sm backdrop-blur-xl"
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
      className="border-brand-100 bg-brand-100/60 grid items-center justify-items-end border-b px-5 py-3 text-xs font-semibold tracking-wide text-slate-500 uppercase"
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
      className="border-brand-100 hover:bg-brand-50/80 grid items-center justify-items-end border-b px-5 py-4 text-sm text-slate-700 transition last:border-b-0"
    >
      {children}
    </div>
  );
}

type RowLinkProps = {
  children: ReactNode;
  to: string;
};

function RowLink({ children, to }: RowLinkProps) {
  const { columns } = useTable();
  return (
    <Link
      to={to}
      role="row"
      style={{ gridTemplateColumns: columns }}
      className="border-brand-100 hover:bg-brand-50/80 grid items-center justify-items-end border-b px-5 py-4 text-sm text-slate-700 transition last:border-b-0"
    >
      {children}
    </Link>
  );
}

function Body({ children }: ChildrenProps) {
  return <div role="rowgroup">{children}</div>;
}

function Footer({ children }: ChildrenProps) {
  return (
    <div className="border-brand-100 flex justify-end border-t bg-white/60 px-5 py-4 text-sm text-slate-500">
      {children}
    </div>
  );
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.RowLink = RowLink;
Table.Footer = Footer;

export default Table;
