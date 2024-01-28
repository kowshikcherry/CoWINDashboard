import {Component} from 'react'

import Loader from 'react-loader-spinner'
import Coverage from '../VaccinationCoverage'
import Byage from '../VaccinationByAge'
import Bygender from '../VaccinationByGender'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class CowinDashboard extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    last7days: [],
    byage: [],
    bygender: [],
  }

  componentDidMount() {
    this.getPrimeDeals()
  }

  getPrimeDeals = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const apiUrl = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(apiUrl)
    if (response.ok === true) {
      const fetchedData = await response.json()
      this.setState({
        apiStatus: apiStatusConstants.success,
        last7days: fetchedData.last_7_days_vaccination,
        byage: fetchedData.vaccination_by_age,
        bygender: fetchedData.vaccination_by_gender,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderPrimeDealsList = () => {
    const {last7days, byage, bygender} = this.state
    return (
      <>
        <h1>Vaccination Coverage</h1>
        <Coverage last7days={last7days} />
        <h1>Vaccination by gender</h1>
        <Bygender bygender={bygender} />
        <h1>Vaccination by Age</h1>
        <Byage byage={byage} />
      </>
    )
  }

  renderPrimeDealsFailureView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="register-prime-image"
      />
      <h1>Something went wrong</h1>
    </>
  )

  renderLoadingView = () => (
    <div className="loader" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderwhatiswhat = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderPrimeDealsList()
      case apiStatusConstants.failure:
        return this.renderPrimeDealsFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="mainbg1">
        <img
          alt="website logo"
          src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
        />
        <h1>CoWIN Vaccination in India</h1>

        {this.renderwhatiswhat()}
      </div>
    )
  }
}
export default CowinDashboard
