import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Pages/Home";
import Jobs from "./Pages/Jobs";
import JobDetails from "./Pages/JobDetails"
import SavedJobs from "./Pages/SavedJobs";
import NotFound from "./Pages/NotFound";
function App() {
  return <>
 <BrowserRouter> 
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/jobs" element={<Jobs />} />
  <Route path="/jobs/:id" element={<JobDetails/>}/>
  <Route path="/saved-jobs" element={<SavedJobs />} />
  
  <Route path="*"element={<NotFound />} />
  
 </Routes>
 </BrowserRouter>
  </>;
}

export default App;