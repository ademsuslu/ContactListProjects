import {
  Button,
  Container,
  TextField,
  ButtonGroup,
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import axios from "axios";
const createStyles = makeStyles({
  field: {
    margin: "5px",
  },
  cards: {
    backGroundColor: "#0CB7E2",
    margin: "1rem",
  },
});
const Form = ({ handleClose,rows }) => {
  const [values, setValues] = useState({
    contact_number: "",
    type: "",
    company_name: "",
    title_formula: "",
    title: "",
    firstname: "",
    surname: "",
    address: "",
    zip: "",
    city: "",
    state: "",
    country: "",
    email1: "",
    email2: "",
    phone1: "",
    phone2: "",
    mobile: "",
    fax: "",
    website: "",
    skype: "",
    contact_with: "",
    make_from: "",
    contact_through: "",
    language: "",
    note: "",
    categories: "",
    sectors: "",
    number_of_collaborators: "",
    registry_number: "",
    vat_number: "",
    vat_number_intra: "",
    formula_of_greeting: "",
    birthday: "",
    parent_id: "",
    created_by: "",
    updated_by: "",
    created_date: "",
    updated_date: "",
  });

  const handleChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value });
  };

  const handleCreate = (e) => {
    console.log(values);
    e.preventDefault();
    const url ="https://cors-anywhere.herokuapp.com/https://newcrmdb.weboost.dev/basic/web/index.php/contacts";
    axios.post(url, { ...values }).then(()=>rows.push(values))

    setValues({
      contact_number: "",
      type: "",
      company_name: "",
      title_formula: "",
      title: "",
      firstname: "",
      surname: "",
      address: "",
      zip: "",
      city: "",
      state: "",
      country: "",
      email1: "",
      email2: "",
      phone1: "",
      phone2: "",
      mobile: "",
      fax: "",
      website: "",
      skype: "",
      contact_with: "",
      make_from: "",
      contact_through: "",
      language: "",
      note: "",
      categories: "",
      sectors: "",
      number_of_collaborators: "",
      registry_number: "",
      vat_number: "",
      vat_number_intra: "",
      formula_of_greeting: "",
      birthday: "",
      parent_id: "",
      created_by: "",
      updated_by: "",
      created_date: "",
      updated_date: "",
    });
  };

  const customClass = createStyles();
  return (
    <>
      <form  className={customClass.cards} onSubmit={handleCreate}>
        <TextField
          label="Contac Number"
          value={values.contact_number}
          onChange={handleChange("contact_number")}
          className={customClass.field}
        />
        <TextField
          label="Type"
          value={values.type}
          onChange={handleChange("type")}
          className={customClass.field}
        />
        <TextField
          label="company_name"
          value={values.company_name}
          onChange={handleChange("company_name")}
          className={customClass.field}
        />
        <TextField
          label="title_formula"
          value={values.title_formula}
          onChange={handleChange("title_formula")}
          className={customClass.field}
        />
        <TextField
          label="title"
          value={values.title}
          onChange={handleChange("title")}
          className={customClass.field}
        />
        <TextField
          label="firstname"
          value={values.firstname}
          onChange={handleChange("firstname")}
          className={customClass.field}
        />
        <TextField
          label="surname"
          value={values.surname}
          onChange={handleChange("surname")}
          className={customClass.field}
        />
        <TextField
          label="address"
          value={values.address}
          onChange={handleChange("address")}
          className={customClass.field}
        />
        <TextField
          label="zip"
          value={values.zip}
          onChange={handleChange("zip")}
          className={customClass.field}
        />
        <TextField
          label="city"
          value={values.city}
          onChange={handleChange("city")}
          className={customClass.field}
        />
        <TextField
          label="state"
          value={values.state}
          onChange={handleChange("state")}
          className={customClass.field}
        />
        <TextField
          label="country"
          value={values.country}
          onChange={handleChange("country")}
          className={customClass.field}
        />
        <TextField
          label="email1"
          value={values.email1}
          onChange={handleChange("email1")}
          className={customClass.field}
        />
        <TextField
          label="email2"
          value={values.email2}
          onChange={handleChange("email2")}
          className={customClass.field}
        />
        <TextField
          label="phone1"
          value={values.phone1}
          onChange={handleChange("phone1")}
          className={customClass.field}
        />
        <TextField
          label="phone2"
          value={values.phone2}
          onChange={handleChange("phone2")}
          className={customClass.field}
        />
        <TextField
          label="mobile"
          value={values.mobile}
          onChange={handleChange("mobile")}
          className={customClass.field}
        />
        <TextField
          label="fax"
          value={values.fax}
          onChange={handleChange("fax")}
          className={customClass.field}
        />
        <TextField
          label="website"
          value={values.website}
          onChange={handleChange("website")}
          className={customClass.field}
        />
        <TextField
          label="skype"
          value={values.skype}
          onChange={handleChange("skype")}
          className={customClass.field}
        />
        <TextField
          label="contact_with"
          value={values.contact_with}
          onChange={handleChange("contact_with")}
          className={customClass.field}
        />
        <TextField
          label="make_from"
          value={values.make_from}
          onChange={handleChange("make_from")}
          className={customClass.field}
        />
        <TextField
          label="contact_through"
          value={values.contact_through}
          onChange={handleChange("contact_through")}
          className={customClass.field}
        />
        <TextField
          label="language"
          value={values.language}
          onChange={handleChange("language")}
          className={customClass.field}
        />
        <TextField
          label="note"
          value={values.note}
          onChange={handleChange("note")}
          className={customClass.field}
        />
        <TextField
          label="categories"
          value={values.categories}
          onChange={handleChange("categories")}
          className={customClass.field}
        />
        <TextField
          label="sectors"
          value={values.sectors}
          onChange={handleChange("sectors")}
          className={customClass.field}
        />
        <TextField
          label="number_of_collaborators"
          value={values.number_of_collaborators}
          onChange={handleChange("number_of_collaborators")}
          className={customClass.field}
        />
        <TextField
          label="registry_number"
          value={values.registry_number}
          onChange={handleChange("registry_number")}
          className={customClass.field}
        />
        <TextField
          label="vat_number"
          value={values.vat_number}
          onChange={handleChange("vat_number")}
          className={customClass.field}
        />
        <TextField
          label="vat_number_intra"
          value={values.vat_number_intra}
          onChange={handleChange("vat_number_intra")}
          className={customClass.field}
        />
        <TextField
          label="formula_of_greeting"
          value={values.formula_of_greeting}
          onChange={handleChange("formula_of_greeting")}
          className={customClass.field}
        />
        <TextField
          label="birthday"
          value={values.birthday}
          onChange={handleChange("birthday")}
          className={customClass.field}
        />
        <TextField
          label="parent_id"
          value={values.parent_id}
          onChange={handleChange("parent_id")}
          className={customClass.field}
        />
        <TextField
          label="created_by"
          value={values.created_by}
          onChange={handleChange("created_by")}
          className={customClass.field}
        />
        <TextField
          label="updated_by"
          value={values.updated_by}
          onChange={handleChange("updated_by")}
          className={customClass.field}
        />
        <TextField
          label="created_date"
          value={values.created_date}
          onChange={handleChange("created_date")}
          className={customClass.field}
        />
        <TextField
          label="updated_date"
          value={values.updated_date}
          onChange={handleChange("updated_date")}
          className={customClass.field}
        />
        <Container>
          <ButtonGroup disableElevation variant="outlined" color="primary">
            <Button color="error" onClick={handleClose}>
              Close
            </Button>
            <Button color="primary" type="submit">
              Create
            </Button>
          </ButtonGroup>
        </Container>
      </form>
    </>
  );
};
export default Form;
