import React, { Component } from 'react';
import * as XLSX from 'xlsx';
import './ExcelImporter.css';


class ExcelImporter extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          };
      }
      
  handleFile = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      const sheetName = workbook.SheetNames[0]; // Assuming you want the first sheet
      const worksheet = workbook.Sheets[sheetName];
      const excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      this.setState({ data: excelData });
    };

    reader.readAsBinaryString(file);
  };

  render() {
    return (
      <div className={`ExcelImporter ${this.props.isDarkMode ? 'dark' : ''}`}>
        <input type="file" accept=".xlsx, .xls" onChange={this.handleFile} />
        <br/>
        <br/>
        <br/>

        <div className="ExcelTableContainer">
          <table className={`ExcelTable ${this.props.isDarkMode ? 'dark' : ''}`}>
            <thead>
              <tr>
                {this.state.data.length > 0 &&
                  this.state.data[0].map((header, index) => (
                    <th key={index}>{header}</th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {this.state.data.length > 1 &&
                this.state.data.slice(1).map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex}>{cell}</td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <br/>
        <br/>
        <br/>

      </div>
    );
  }
}

export default ExcelImporter;
