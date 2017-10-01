import Vue from 'vue'
import Router from 'vue-router'
import CountriesGrid from '@/components/countries/CountriesGrid'
import CountryView from '@/components/countries/CountryView'
import AddCountryView from '@/components/countries/AddCountryView'
import SubdivisionsGrid from '@/components/subdivisions/SubdivisionsGrid'
import SubdivisionView from '@/components/subdivisions/SubdivisionView'
import AddSubdivisionView from '@/components/subdivisions/AddSubdivisionView'
import EditSubdivisionView from '@/components/subdivisions/EditSubdivisionView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/countries'
    },
    {
      path: '/countries',
      name: 'CountriesGrid',
      component: CountriesGrid
    },
    {
      path: '/countries/:countryid',
      name: 'CountryView',
      component: CountryView,
      props: (route) => ({countryid: route.params.countryid})
    },
    {
      path: '/subdivisions',
      name: 'SubdivisionsGrid',
      component: SubdivisionsGrid
    },
    {
      path: '/subdivisions/:subdivisionid',
      name: 'SubdivisionView',
      component: SubdivisionView,
      props: (route) => ({subdivisionid: route.params.subdivisionid})
    },
    {
      path: '/AddCountry',
      name: 'AddCountryView',
      component: AddCountryView
    },
    {
      path: '/subdivisions/AddSubdivision',
      name: 'AddSubdivisionView',
      component: AddSubdivisionView
    },
    {
      path: '/subdivisions/:subdivisionid/Edit',
      name: 'EditSubdivisionView',
      component: EditSubdivisionView,
      props: (route) => ({subdivisionid: route.params.subdivisionid})
    }
  ]
})
