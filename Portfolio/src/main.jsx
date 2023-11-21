import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "../node_modules/react-router-dom/dist/index";
import App from './components/App/App'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  {/* <React.StrictMode> */}
    <App />
  {/* </React.StrictMode> */}
</BrowserRouter>
)
