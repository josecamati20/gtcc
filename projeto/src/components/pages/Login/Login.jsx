import React from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { Button } from "@material-ui/core";
import {
  LockOutlined,
  PersonAddOutlined,
  PersonOutlined,
  VpnKeyOutlined,
} from "@material-ui/icons";
export default function Login() {
  const { register, handleSubmit } = useForm();
  return (
    <div className="login">
      <div className="card">
        <div className="ilustration">
          <img src="/src/assets/login.svg" alt="login_ilustration" />
        </div>
        <div className="form">
          <div className="title">
            <p className="my_title">bem vindo de volta</p>
            <p className="sub_title">
              Insere as tuas credencias para continuar
            </p>
          </div>
          <div className="inputElement">
            <PersonOutlined />
            <input type="email" placeholder="Insire o e-mail*" />
          </div>
          <div className="inputElement">
            <LockOutlined />
            <input type="password" placeholder="Insere a palavra-passe*" />
          </div>

          <Button className="button" disabled>
            iniciar sessão
          </Button>
        </div>
      </div>
    </div>
  );
}
