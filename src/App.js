import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Details from "./Components/Details";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import "./stylee.css";
import { Provider } from "react-redux";
import { store } from "./redux/Store";


const App= ()=>{


    return(
        <Provider store={store}>
            <div>
                    <BrowserRouter>
                        <Routes>
                            <Route path="" element={<Navbar />} >
                                <Route path="" element={<Home />} />
                                <Route path="/details/:postId" element={<Details />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
            </div>
        </Provider>
    )
}

export default App