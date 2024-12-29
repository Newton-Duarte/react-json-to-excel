import * as XLSX from "xlsx";

type ExportToExcelProps = {
  data: Customer[]
  fileName: string
}

const ExportToExcel = ({ data, fileName }: ExportToExcelProps) => {
  const handleExport = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  };

  return (
    <button onClick={handleExport}>
      Export to Excel
    </button>
  );
};

export default function App() {
  const data = [
    { id: 1, name: "John Doe", age: 30 },
    { id: 2, name: "Jane Smith", age: 25 },
  ];

  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h1>Export Example</h1>
      <pre>{JSON.stringify(data)}</pre>
      <ExportToExcel data={data} fileName="UserList" />
    </div>
  );
}