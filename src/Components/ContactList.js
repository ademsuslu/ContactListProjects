import { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'contact_number', headerName: 'Contact Number', width: 130 },
  { field: 'type', headerName: 'Type', width: 10 },
  { field: 'company_name', headerName: 'Company Name', width: 130 },
  { field: 'title_formula', headerName: 'Title Formula', width: 130 },
  { field: 'title', headerName: 'Title', width: 130 },
  { field: 'firstname', headerName: 'First Name', width: 130 },
  { field: 'surname', headerName: 'Sur Name', width: 130 },
  { field: 'address', headerName: 'Address', width: 130 },
  { field: 'zip', headerName: 'Zip', width: 30 },
  { field: 'City', headerName: 'City', width: 100 },
  { field: 'state', headerName: 'State', width: 100 },
  { field: 'country', headerName: 'Country', width: 100 },
  { field: 'email1', headerName: 'Email1', width: 100 },
  { field: 'email2', headerName: 'Email2', width: 100 },
  { field: 'phone1', headerName: 'Phone1', width: 100 },
  { field: 'phone2', headerName: 'Phone2', width: 100 },
  { field: 'mobile', headerName: 'Mobil', width: 100 },
  { field: 'fax', headerName: 'Fax', width: 100 },
  { field: 'website', headerName: 'Web', width: 100 },
  { field: 'skype', headerName: 'Sqype', width: 100 },
  { field: 'contact_with', headerName: 'Contact With', width: 100 },
  { field: 'make_from', headerName: 'Make From', width: 100 },
  { field: 'contact_through', headerName: 'Contact Through', width: 100 },
  { field: 'note', headerName: 'Note', width: 100 },
  { field: 'categories', headerName: 'Categories', width: 100 },
  { field: 'sectors', headerName: 'Sectors', width: 100 },
  { field: 'number_of_collaborators', headerName: 'Number Of Collaborators', width: 100 },
  { field: 'registry_number', headerName: 'Registry Number', width: 100 },
  { field: 'vat_number', headerName: 'Vat Number', width: 100 },
  { field: 'vat_number_intra', headerName: 'Vat Number İntra', width: 100 },
  { field: 'formula_of_greeting', headerName: 'Formula Of Greeting', width: 100 },
  { field: 'birthday', headerName: 'Birthday', width: 100 },
  { field: 'parent_id', headerName: 'Parent İd', width: 100 },
  { field: 'created_by', headerName: 'Created By', width: 100 },
  { field: 'updated_by', headerName: 'Updated By', width: 100 },
  { field: 'created_date', headerName: 'Created Date', width: 100 },
  { field: 'updated_date', headerName: 'Updated Date', width: 100 },
];

 export const  ContactList = ()=> {
  const [list,setList] = useState([]) // datayı içine alıp maplıyoruz
  useEffect(async() => {
    // heroku ile proxy kullandık cors hatası verdiği için
    const res = await axios("https://cors-anywhere.herokuapp.com/https://newcrmdb.weboost.dev/basic/web/index.php/contacts");
    // Apiden gelen datayı liste ekledık 
    setList(res.data)
  },[])
 const rows = [] = list; // listi rowa attık 
  return (
    <div style={{ height: 400, width: '100%' }}> 
    {/* Tablo */}
    <DataGrid 
    sx={{backgroundColor:"#A8A8A8",color:"#fff"}}
      rows={rows}
      columns={columns}
      pageSize={1}
      rowsPerPageOptions={[5]}
      checkboxSelection
    />
  </div>
  );
}