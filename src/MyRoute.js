import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import First from './First'
import Second from './Second'
import Third from './Third'


const MyRoute = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<First/>}></Route>
            <Route path = "/test" element = {<Second/>}></Route>
            <Route path = "/third" element= {<Third/>}></Route>
        </Routes>
    </Router>
  )
}

export default MyRoute
