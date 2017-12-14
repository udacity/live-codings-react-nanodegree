import App from './App'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getData } from './actions'

const mapStateToProps = state => ({
  items: state.items,
  error: state.error,
  fetching: state.fetching
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getData: getData
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)