import React, { Component } from 'react';
import Navigation from './Navigation';
import CreateTask from './CreateTask';
import '../App.css';

class CreateNote extends Component {

    render() {
        return (
            <div className="section diario">
                <Navigation titulo="Notardo"></Navigation>
                <form action="post" id="diario" className="forms">
                    <h2>Fecha</h2>
                    <div className="inputs">
                        <textarea
                            name="dia"
                            id="textareaDiario"
                            cols={30}
                            rows={15}
                            defaultValue={""}
                        />
                    </div>
                    <input type="submit" defaultValue="Guardar" />
                </form>;

            </div>
        );
    }
}

export default CreateNote;

