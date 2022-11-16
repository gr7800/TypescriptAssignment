import React, { useState } from "react";
import axios from "axios";
import { CountryTypes } from "./typesCountries";
import Country from "./components/country/Country";
import Loading from "./components/loading/Loading";
import {
  Box,
  TextField,
  Button,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
} from "@mui/material";
import {ChevronRightIcon} from "@chakra-ui/icons";



import "./App.scss";

const App = () => {
  const [countries, setCountries] = useState<CountryTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const [inputSearch, setInputSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  const [errInputMessage, setErrInputMessage] = useState<string>("");
  const [errCategoryMessage, setErrCategoryMessage] = useState<string>("");

  const [errValidSearch, setErrValidSearch] = useState<boolean>(false);
  const [errValidCategory, setErrValidCategory] = useState<boolean>(false);

  const [errorStatus, setErrorStatus] = useState<boolean>(false);

  const getCountries = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get<CountryTypes[]>(
        `https://restcountries.com/v3.1/${category}/${inputSearch}`
      );

      setCountries(data);
      setErrorStatus(false);
      console.log(errorStatus);

    } catch {
      setErrorStatus(true);
      console.log("olmadi");
      console.log(errorStatus);

    } finally {
      setLoading(false);
    }
  };




  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearch(e.target.value);
  };

  const countriesMap = () => {
    if (!errorStatus) {
      return ( countries.map((country) => (
        <div key={country.population} className="countryCardContainer">
          <Country country={country} category={category} />
        </div>
      ))
      )
    }

    return (
      <div className="error-page">
        <div className="error-message">
          <h1> there is no RESULT </h1>
          <p>--- please check if the spelling of information is correct---</p>
        </div>
      </div>
    );
  };

  const handleSubmit = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();

 
    setErrInputMessage("");
    setErrCategoryMessage("");

    setErrValidSearch(false);
    setErrValidCategory(false);

    if (inputSearch === "") {
      setErrInputMessage("this feild is required");
      setErrValidSearch(true);
    }

    if (category === "") {
      setErrCategoryMessage("selection category is required");
      setErrValidCategory(true);
    }


   
      getCountries();
    }
  

  return (
    <div className="container">

    <div className="form_container">
    <form
      className="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Box sx={{ minWidth: 120 }} className="category">
        <FormControl fullWidth error={errValidCategory}>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="category"
            onChange={(e) => setCategory(e.target.value)}
          >
            <MenuItem value="">
              <em>select country</em>
            </MenuItem>
            <MenuItem value="name">name</MenuItem>
            <MenuItem value="currency">currency</MenuItem>
            <MenuItem value="lang">language</MenuItem>
            <MenuItem value="capital">capital</MenuItem>

            <MenuItem value="lang">language</MenuItem>

            <MenuItem value="region">region</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <TextField
        className="countryName"
        onChange={handleChange}
        placeholder="Search Country"
        label="Name of country"
        name="country"
        variant="outlined"
        fullWidth
        required
        error={errValidSearch}
        helperText={errInputMessage}
      />

      <Button
        className="button"
        onSubmit={handleSubmit}
        type="submit"
        variant="contained"
        endIcon={<ChevronRightIcon />}
      >
        Submit
      </Button>
    </form>
  </div>
  

      <Loading loading={loading}>
        <div>
          <div className="country-container">{countriesMap()}</div>
        </div>
      </Loading>
    </div>
  );
};

export default App;