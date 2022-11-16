import React from 'react'
import { CountryTypes } from "../../typesCountries";

interface ICountryProps {
    country:CountryTypes;
    category:string;
}

const Country:React.FunctionComponent<ICountryProps> = ({country}) => {
  return (
    <>
    <section className='country-card'>
        <img src={country.flags.png} alt="flag" className='country-card__img' />
    <div>
        <h3 className='country-card__country-name'>{country.name.official}</h3>
    </div>
    <ul className='country-card__list'>
        <li>Capital city : {country.capital}</li>
        {Object.values(country.languages).map((item:any)=>{
            return <li key={item}>Language:{item}</li>;
        })}
        <li>Population: {country.population}</li>
        <li>
            {" "}
            Area: {country.area} km<sup>2</sup>
        </li>
    </ul>
    </section>
    </>
  )
}

export default Country