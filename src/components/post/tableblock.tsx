interface TableBlockProps {
  tableHeaders: string // JSON string
  tableRows: string // JSON string
}

export function TableBlock({ tableHeaders, tableRows }: TableBlockProps) {
  const headers: string[] = JSON.parse(tableHeaders)
  const rows: string[][] = JSON.parse(tableRows)

  return (
    <div className="my-6 overflow-x-auto rounded-lg border border-border">
      <table className="w-full">
        <thead className="bg-muted">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-muted/50 transition-colors">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-3 text-sm text-foreground">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
