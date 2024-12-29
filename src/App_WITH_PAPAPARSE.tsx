import Papa from "papaparse";

type ExportToCsvProps = {
  data: Customer[];
  fileName: string;
};

const ExportToCsv = ({ data, fileName }: ExportToCsvProps) => {
  const handleExport = () => {
    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");

    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `${fileName}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleExport}>
      Export to CSV
    </button>
  );
};

export default function App() {
  const data = [
    { id: 1, name: "John Doe", age: 30 },
    { id: 2, name: "Jane Smith", age: 25 },
  ];

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Export Example</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <ExportToCsv data={data} fileName="UserList" />
    </div>
  );
}
