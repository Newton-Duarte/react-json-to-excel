# Export to Excel with React + TypeScript + Vite

This project demonstrates how to export a list of data to an Excel file using React, TypeScript, and Vite. The implementation leverages the popular [SheetJS (xlsx)](https://github.com/SheetJS/sheetjs) library to create Excel files directly in the browser.

## Features
- Export JSON data to an Excel file (.xlsx).
- Simple and fast implementation.
- Built with React, TypeScript, and Vite for modern web development.

## Prerequisites
To run this project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Getting Started

### 1. Clone the Repository
```bash
git clone <repository-url>
cd <repository-folder>
```

### 2. Install Dependencies
```bash
npm install
```
Or, if you're using Yarn:
```bash
yarn install
```

### 3. Run the Development Server
```bash
npm run dev
```
Or, with Yarn:
```bash
yarn dev
```

The application will be available at `http://localhost:5173`.

## How It Works

The key functionality lies in the `ExportToExcel` component:

```tsx
import * as XLSX from "xlsx";

const ExportToExcel = ({ data, fileName }: { data: any[]; fileName: string }) => {
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

export default ExportToExcel;
```

### Steps:
1. Convert the JSON data into a worksheet using `XLSX.utils.json_to_sheet`.
2. Create a new workbook with `XLSX.utils.book_new` and append the worksheet.
3. Trigger the download of the Excel file using `XLSX.writeFile`.

### Example Data
The sample data exported is an array of objects:
```tsx
const data = [
  { id: 1, name: "John Doe", age: 30 },
  { id: 2, name: "Jane Smith", age: 25 },
];
```

## Project Structure
```
.
├── src
│   ├── components
│   │   └── ExportToExcel.tsx
│   ├── App.tsx
│   └── main.tsx
├── public
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Build for Production
To build the project for production:
```bash
npm run build
```
Or, with Yarn:
```bash
yarn build
```

The optimized files will be generated in the `dist/` directory.

## Learn More
- [React Documentation](https://reactjs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Vite Documentation](https://vitejs.dev/)
- [SheetJS Documentation](https://docs.sheetjs.com/)

## License
This project is open-source and available under the [MIT License](LICENSE).