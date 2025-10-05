"use client";

import { motion } from "framer-motion";

interface Column {
  header: string;
  accessor: string;
  className?: string;
}

interface DataTableProps {
  columns: Column[];
  data: any[];
  title?: string;
  description?: string;
  striped?: boolean;
  hoverable?: boolean;
}

export function DataTable({
  columns,
  data,
  title,
  description,
  striped = true,
  hoverable = true,
}: DataTableProps) {
  return (
    <div className="mb-8">
      {title && (
        <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
      )}
      {description && (
        <p className="mb-4 text-sm text-gray-600">{description}</p>
      )}
      <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="px-4 py-3 text-left text-sm font-semibold text-gray-900"
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((row, rowIndex) => (
              <motion.tr
                key={rowIndex}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: rowIndex * 0.05, duration: 0.3 }}
                className={`
                  ${striped && rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  ${hoverable ? "transition-colors hover:bg-blue-50" : ""}
                `}
              >
                {columns.map((column, colIndex) => (
                  <td
                    key={colIndex}
                    className={`px-4 py-3 text-sm ${
                      column.className || "text-gray-700"
                    }`}
                  >
                    {row[column.accessor]}
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
