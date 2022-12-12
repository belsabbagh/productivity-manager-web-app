import React from 'react';
import './../../../css/App.css';
import {Link, Head, useForm} from '@inertiajs/inertia-react';
import {Autocomplete, TextField} from "@mui/material";

export default function create() {
    const resource = 'project'
    const { data, setData, errors, post } = useForm({});
    function handleSubmit(e) {
        e.preventDefault();
        post(route(`${resource}s.store`));}

        return (
            <div className="App">
                <header className="App-header">
                    <dive className="upper_container">
                    </dive>
                    <div className= "side_navbar_container">

                    </div>

                    <div className="container">

                        <h3 className="container_title"> add new project</h3>


                         <div className= "form_container">
                             <form action="/action_page.php">
                                 <label className="form_inputs" htmlFor="project_name">Project Name</label>
                                 <input className="form_inputs" type="text" id="P_name" name="project_name" placeholder="Project name.."/>

                                 <Autocomplete
                                     disablePortal
                                     id="combo-box-demo"
                                     //options={}
                                     sx={{ width: 300 }}
                                     renderInput={(params) => <TextField {...params} label="Movie" />}
                                 />


                                         <input type="submit" value="Submit"/>
                             </form>

                        </div>
                   </div>


                </header>

            </div>
        );

}
