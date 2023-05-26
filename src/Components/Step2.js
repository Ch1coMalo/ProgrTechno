import React from "react";
import {UseForm} from "react-hook-form";
import { Button, Form} from "react-bootstrap";
import Swal from 'sweetalert2';
import { withAlert } from 'react-alert';
import { Link } from "react-router-dom";



/*Swal.fire({
    title: 'Готово!',
    text: 'Do you want to continue',
    icon: 'success',
    confirmButtonText: 'Cool'})*/

    
 const Step2 = () => {
    // const alert = useAlert() 
    return(
    <>

        <h1> </h1>
        <h3 style={{padding:'12px'}}> Лечение </h3>
        <Form style ={{padding:'12px'}}>

            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputPrepar">Препарат и доза</label>
                    <input type="text" class="form-control" id="inputPrepar" placeholder="Цитрамон; 0.5" />
                </div>
            </div>
            <h1> </h1> 
            {/* <button type="button" class="btn btn-warning" >Продолжить</button> */}
            {/* <button onClick={() => {alert('Oh look, an alert!')}}>Продолжить</button> */}
            <Link to="/"><button onClick={() => {alert('Поздравляем! Форма заполнена!')}} type="button" class="btn btn-secondary">Продолжить</button></Link>
        </Form>
    </>
    )
}
export default Step2;