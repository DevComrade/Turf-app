// ExportActions.js
import React from 'react';
import { FileSpreadsheet, FileIcon as FilePdf, Printer } from 'lucide-react';
import * as XLSX from 'xlsx';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';  // Import autoTable plugin
import Swal from 'sweetalert2';

const ExportActions = ({ columns, currentData, printElementId }) => {

  const exportToExcel = () => {
    const headers = columns.map(column => column.label);
    const data = currentData.map(user => columns.map(column => user[column.accessor]));
    const ws = XLSX.utils.aoa_to_sheet([headers, ...data]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Users');
    XLSX.writeFile(wb, 'users.xlsx');
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    const headers = columns.map(column => column.label);
    const data = currentData.map(user => columns.map(column => user[column.accessor]));

    // Adding table to the PDF using autoTable
    doc.autoTable({
      head: [headers],
      body: data,
    });

    doc.save('users.pdf');
  };

  const printTable = () => {
    const printContent = document.getElementById(printElementId);
    
    if (!printContent) {
      Swal.fire('Error!', 'Table element not found. Please try again later.', 'error');
      return;
    }

    const newWindow = window.open('', '', 'height=700,width=900');
    newWindow.document.write('<html><head><title>Print</title></head><body>');
    newWindow.document.write(printContent.outerHTML);
    newWindow.document.write('</body></html>');
    newWindow.document.close();
    newWindow.print();
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={exportToExcel}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center"
      >
        <FileSpreadsheet className="mr-2" size={18} />
        Excel
      </button>
      <button
        onClick={exportToPDF}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center"
      >
        <FilePdf className="mr-2" size={18} />
        PDF
      </button>
      <button
        onClick={printTable}
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded flex items-center"
      >
        <Printer className="mr-2" size={18} />
        Print
      </button>
    </div>
  );
};

export default ExportActions;
