import React from "react";
import {UseForm} from "react-hook-form";
import { Button, Form} from "react-bootstrap";
import { Link } from "react-router-dom";
import Data from "./Data";


export const Step1 = () => (
    <>
        <div>
        <h1> </h1>
        <h3 style={{padding:'12px'}}> Для записи на прием заполните форму ниже к</h3>
        <Form style ={{padding:'12px'}}>

            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputFIO">ФИО</label>
                    <input type="text" class="form-control" id="inputFIO" />
                </div>
                <div class="form-group col-md-6">
                    <label for="inputDate">Дата рождения</label>
                    <input class="form-control" id="inputDate" placeholder="02.03.1996" />
                </div>
            </div>
            <div class="form-group col-md-6">
                <label for="inputAddress">Адрес проживания</label>  
                <input type="text" class="form-control" id="inputAddress" placeholder="г. Москва, ул. Строителей д.5, кв. 67 " />
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputPolicy">Номер полиса</label>
                    <input type="text" class="form-control" id="inputPolicy" />
                </div>
            </div>
            <h1> </h1> 
            {/* <button  type="button" class="btn btn-warning" >Продолжить</button> */}
            <Link to="/step2"><button type="button" class="btn btn-secondary">Продолжить</button></Link>
        </Form>
        </div>
    </>
)
export default Step1;