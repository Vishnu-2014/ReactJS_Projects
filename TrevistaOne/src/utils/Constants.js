export const fieldTypes = {
  textInput: 'TEXT_INPUT',
  dropDown: 'DROPDOWN',
  date: 'DATE',
  multilineTextInput: 'MULTILINE_TEXTINPUT',
};

export const addMedicineFields = [
  {title: 'Batch Number', type: fieldTypes.textInput},
  {title: 'Medicine Name', type: fieldTypes.dropDown},
  {title: 'Specifications', type: fieldTypes.textInput},
  {title: 'Batch Number', type: fieldTypes.dropDown},
  {title: 'Type Name', type: fieldTypes.dropDown},
  {title: 'Supplier Name', type: fieldTypes.dropDown},
  {title: 'Measurement', type: fieldTypes.dropDown},
  {title: 'Remarks', type: fieldTypes.dropDown},
  {title: 'Price', type: fieldTypes.dropDown},
  {title: 'Expiry Date', type: fieldTypes.date},
  {title: 'Quantity On Hand', type: fieldTypes.textInput},
];

export const addReceiveFields = [
  {title: 'Batch Number', type: fieldTypes.textInput},
  {title: 'Medicine Name', type: fieldTypes.dropDown},
  {title: 'Supplier Name', type: fieldTypes.textInput},
  {title: 'Price', type: fieldTypes.dropDown},
  {title: 'Quantity', type: fieldTypes.dropDown},
  {title: 'Amount', type: fieldTypes.dropDown},
  {title: 'Remarks', type: fieldTypes.textInput},
  {title: 'Reference Number', type: fieldTypes.textInput},
  {title: 'Date Received', type: fieldTypes.date},
  {title: 'Processed By', type: fieldTypes.textInput},
];

export const addRequestFields = [
  {title: 'Batch Number', type: fieldTypes.textInput},
  {title: 'Medicine Name', type: fieldTypes.dropDown},
  {title: 'Specifications', type: fieldTypes.textInput},
  {title: 'Supplier Name', type: fieldTypes.dropDown},
  {title: 'Category Name', type: fieldTypes.dropDown},
  {title: 'Type Name', type: fieldTypes.dropDown},
  {title: 'Price', type: fieldTypes.textInput},
  {title: 'Quantity', type: fieldTypes.textInput},
  {title: 'Amount', type: fieldTypes.textInput},
  {title: 'Description', type: fieldTypes.multilineTextInput},
  {title: 'Date Received', type: fieldTypes.date},
  {title: 'Processed By', type: fieldTypes.textInput},
];

export const addStockFields = [
  {title: 'Batch Number', type: fieldTypes.textInput},
  {title: 'Medicine Name', type: fieldTypes.dropDown},
  {title: 'Supplier Name', type: fieldTypes.dropDown},
  {title: 'Price', type: fieldTypes.dropDown},
  {title: 'Quantity', type: fieldTypes.dropDown},
  {title: 'Amount', type: fieldTypes.dropDown},
  {title: 'Remarks', type: fieldTypes.textInput},
  {title: 'Reference Number', type: fieldTypes.textInput},
  {title: 'Date Received', type: fieldTypes.date},
  {title: 'Processed By', type: fieldTypes.textInput},
];
export const returningInformationFields = [
  {title: 'Batch Number', type: fieldTypes.textInput},
  {title: 'Medicine Name', type: fieldTypes.dropDown},
  {title: 'Supplier Name', type: fieldTypes.dropDown},
  {title: 'Price', type: fieldTypes.dropDown},
  {title: 'Quantity', type: fieldTypes.dropDown},
  {title: 'Amount', type: fieldTypes.dropDown},
  {title: 'Remarks', type: fieldTypes.textInput},
  {title: 'Reference Number', type: fieldTypes.textInput},
  {title: 'Date Received', type: fieldTypes.date},
  {title: 'Processed By', type: fieldTypes.textInput},
];
