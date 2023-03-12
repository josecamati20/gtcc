import React, { useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import "./styles.css";
import {
  AddOutlined,
  ContactsOutlined,
  EditOutlined,
  MapOutlined,
  PersonOutline,
} from "@material-ui/icons";
import useFetch from "../../hooks/useFetch";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getAllAlunos } from "../../store/feactures/alunosSlice";
import { Button } from "@material-ui/core";
import { useState } from "react";

const ModalAddAluno = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();
  const [provincias] = useFetch("http://localhost:3000/tcc/v1/provincias");
  const [cursos] = useFetch("http://localhost:3000/tcc/v1/cursos");
  const [municipios] = useFetch("http://localhost:3000/tcc/v1/municipios");
  const [projetos] = useFetch("http://localhost:3000/tcc/v1/projetos");

  const fetchAddAluno = async (data) => {
    try {
      const res = await axios.put(
        `http://localhost:3000/tcc/v1/alunos/add`,
        data
      );
      console.log("meu resultado data: ", data);
      console.log("meu resultado: ", res);
    } catch (error) {
    } finally {
      dispatch(getAllAlunos());
    }
  };
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button className="addButton">
          <AddOutlined />
          <p>Adicionar</p>
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">adicionar aluno</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Preencha correctamente todos os formularios e depois adiciona.
          </Dialog.Description>
          <h3>
            <PersonOutline /> Identificação
          </h3>
          <div className="Sets">
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="name">
                Nome
              </label>
              <input className="Input" id="name" {...register("nome")} />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="username">
                Apelido
              </label>
              <input className="Input" {...register("apelido")} />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="specialit">
                Genero
              </label>
              <select className="mySelect" {...register("genero")}>
                <option value="">selecionar</option>
                <option value="masculino">masculino</option>
                <option value="femenino">femenino</option>
              </select>
            </fieldset>
          </div>
          <div className="Sets">
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="level">
                Curso
              </label>
              <select className="mySelect" {...register("id_curso")}>
                <option value="">selecionar</option>
                {cursos.map((curso) => (
                  <option value={`${curso.id_curso}`} key={curso.id_curso}>
                    {curso.curso}
                  </option>
                ))}
              </select>
            </fieldset>

            <fieldset className="Fieldset">
              <label className="Label" htmlFor="level">
                Projeto
              </label>
              <select className="mySelect" {...register("id_projeto")}>
                <option value="">selecionar</option>
                {projetos.map((projeto) => (
                  <option
                    value={`${projeto.id_projeto}`}
                    key={projeto.id_projeto}
                  >
                    {projeto.projeto}
                  </option>
                ))}
              </select>
            </fieldset>
          </div>
          <h3>
            <MapOutlined /> Morada
          </h3>
          <div className="Sets">
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="username">
                Provincia
              </label>
              <select className="mySelect" {...register("id_provincia")}>
                <option value="">selecionar</option>
                {provincias.map((provincia) => (
                  <option
                    value={`${provincia.id_provincia}`}
                    key={provincia.id_provincia}
                  >
                    {provincia.provincia}
                  </option>
                ))}
              </select>
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="username">
                municipio
              </label>
              <select className="mySelect" {...register("id_municipio")}>
                <option value="">selecionar</option>
                {municipios.map((municipio) => (
                  <option
                    value={`${municipio.id_municipio}`}
                    key={municipio.id_municipio}
                  >
                    {municipio.municipio}
                  </option>
                ))}
              </select>
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="username">
                Bairro
              </label>
              <input className="Input" {...register("bairro")} />
            </fieldset>
          </div>

          <h3>
            {" "}
            <ContactsOutlined /> Contactos
          </h3>
          <div className="Sets">
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="username">
                Contacto
              </label>
              <input className="Input" {...register("contacto")} />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="username">
                Contacto alternativo
              </label>
              <input className="Input" {...register("contacto_alternativo")} />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="username">
                E-mail
              </label>
              <input className="Input" {...register("email")} />
            </fieldset>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
            }}
          >
            <Dialog.Close asChild>
              <button className="Button" onClick={handleSubmit(fetchAddAluno)}>
                adicionar
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button className="IconButton" aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
export default ModalAddAluno;
