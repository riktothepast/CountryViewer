import {data} from './fakeapi'

var state = {
  countryId: 0,
  subdivisionId: 0
}

export function GetCountries () {
  return data.countries
}

export function GetCountry (id) {
  let indexedCountry = -1
  data.countries.find((element, index) => {
    if (element.id === id) {
      indexedCountry = index
      return
    }
  })
  let country = data.countries[indexedCountry]
  state.countryId = country.id
  return country
}

export function AddCountry (newCountry) {
  data.countries.push({
    id: data.countries.length + 1,
    name: newCountry.name,
    alpha2: newCountry.alpha2,
    alpha3: newCountry.alpha3,
    code: newCountry.code,
    'iso_3166_2': newCountry['iso_3166_2'],
    'is_independent': newCountry['is_independent'],
    subdivisions: [
    ]
  })
  return data.countries.length
}

export function EditCountry (newCountryInfo, countryid) {
  let indexedCountry = GetCountry(countryid)
  indexedCountry.name = newCountryInfo.name
  indexedCountry.alpha2 = newCountryInfo.alpha2
  indexedCountry.alpha3 = newCountryInfo.alpha3
  indexedCountry.code = newCountryInfo.code
  indexedCountry['iso_3166_2'] = newCountryInfo.iso31662
  indexedCountry['is_independent'] = newCountryInfo.isindependent
  data.countries[indexedCountry.id] = indexedCountry
}

export function DeleteCountry (countryid) {
  let indexedCountry = 0
  data.countries.find((element, index) => {
    if (element.id === countryid) {
      indexedCountry = index
      return
    }
  })
  data.countries.splice(indexedCountry, 1)
}

export function GetLastCountry () {
  return data.countries[state.countryId]
}

export function GetSubdivisions () {
  let country = GetCountry(state.countryId)
  return country.subdivisions
}

export function GetSubdivision (id) {
  let country = GetCountry(state.countryId)
  console.log(country)
  let indexedSub = country.subdivisions.find((element) => {
    if (element.id === id) {
      return element
    }
  })
  state.subdivisionId = indexedSub.id
  return indexedSub
}

export function AddSubdivision (newSubdivision) {
  data.countries[state.countryId].subdivisions.push({
    id: data.countries[state.countryId].subdivisions.length + 1,
    name: newSubdivision.name,
    code: newSubdivision.code,
    'country_id': state.countryId + 1
  })
  return data.countries[state.countryId].subdivisions.length
}

export function EditSubdivision (newSubInfo, subdivisionid) {
  let indexedSub = subdivisionid - 1
  data.countries[state.countryId].subdivisions[indexedSub].name = newSubInfo.name
  data.countries[state.countryId].subdivisions[indexedSub].code = newSubInfo.code
}

export function DeleteSubdivision (subdivisionid) {
  let indexedSub = subdivisionid - 1
  data.countries[state.countryId].subdivisions.splice(indexedSub, 1)
}
