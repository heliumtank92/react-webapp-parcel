import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'

export default function withRouter (Child) {
  return (props) => {
    const location = useLocation()
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const params = useParams()
    const navigateTo = (route, options = {}) => navigate(route, options)

    return (
      <Child
        {...props}
        setSearchParams={setSearchParams}
        searchParams={searchParams}
        navigate={navigate}
        location={location}
        params={params}
        navigateTo={navigateTo}
      />
    )
  }
}
