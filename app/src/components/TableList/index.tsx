import * as S from "./styles";

type Column = {
  field: string;
  headerName: string;
};

export type Row = {
  [key: string]: string;
};

type Props = {
  columns: Column[];
  rows: Row[];
};

const TableList: React.FC<Props> = ({ columns, rows }) => {
  return (
    <S.GuardianTable>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={`table-list-header-${index}`}>
              <span>{column.headerName}</span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => {
          const variant = index % 2 === 0 ? "" : "grey";

          return (
            <tr className={variant} key={"tablelist-" + index}>
              {columns.map((column, index) => (
                <td key={`tablelist-item-${index}`}>
                  {row[column.field] || "-"}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </S.GuardianTable>
  );
};

export default TableList;
