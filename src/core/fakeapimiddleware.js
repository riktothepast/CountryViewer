import {data} from './fakeapi'
import {GetCountriesAPI,
  GetCountryAPI,
  GetSubdivisionsAPI,
  GetSubdivisionAPI,
  AddCountryAPI,
  AddSubdivisionAPI,
  UpdateCountryAPI,
  DeleteCountryAPI,
  UpdateSubdivisionAPI,
  DeleteSubdivisionAPI} from './CountryApi'

export function GetCountries (callback) {
  GetCountriesAPI(callback)
}

export function GetCountry (id, callback, error) {
  GetCountryAPI(id, callback, error)
}

export function GetNextCountryCount () {
  let max = 0
  if (data.countries.length > 0) {
    data.countries.forEach((element) => {
      if (element.id > max) {
        max = element.id
      }
    })
  }
  return max
}

export function AddCountry (newCountry, callback, error) {
  AddCountryAPI(newCountry, callback, error)
}

export function EditCountry (newCountryInfo, countryid, callback, error) {
  UpdateCountryAPI(countryid, newCountryInfo, callback, error)
}

export function DeleteCountry (countryid, callback) {
  DeleteCountryAPI(countryid, callback)
}

export function GetCountryIndex (countryid) { // aca no se, te dejo a discrecion; creo que declarar una variable para almacenar el index esta demas.
  return data.countries.find((element, index) => {
    if (element.id === countryid) {
      return index
    }
    return -1
  })
}

export function GetSubdivisionIndex (countryIndex, subdivisionid) {
  let realIndex = -1
  data.countries[countryIndex].subdivisions.find((element, index) => {
    if (element.id === subdivisionid) {
      realIndex = index
      return
    }
  })
  return realIndex
}

export function GetNextSubdivisionCount (countryid) {
  const country = GetCountry(countryid) // country no va a cambiar, es aconsejable dejar variables estaticas como const en lugar de let :)
  let max = 0
  country.subdivisions.forEach((element) => {
    if (element.id > max) {
      max = element.id
    }
  })
  return max
}

export function AddSubdivision (countryid, newSubdivision, callback, error) {
  AddSubdivisionAPI(countryid, newSubdivision, callback, error)
}

export function EditSubdivision (countryid, newSubInfo, subdivisionid, callback, error) {
  UpdateSubdivisionAPI(countryid, subdivisionid, newSubInfo, callback, error)
}

export function DeleteSubdivision (countryid, subdivisionid, callback) {
  DeleteSubdivisionAPI(countryid, subdivisionid, callback)
}

export function GetSubdivisions (countryid, callback) {
  GetSubdivisionsAPI(countryid, callback)
}

export function GetSubdivision (countryid, subdivisionid, callback, error) {
  GetSubdivisionAPI(countryid, subdivisionid, callback, error)
}
