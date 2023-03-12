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
import { getAllTutores } from "../../store/feactures/tutoresSlice";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";

const ModalAddTutor = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();
  const [provincias] = useFetch("http://localhost:3000/tcc/v1/provincias");
  const [estados] = useFetch("http://localhost:3000/tcc/v1/estados");
  const [graus] = useFetch("http://localhost:3000/tcc/v1/graus");
  const [municipios] = useFetch("http://localhost:3000/tcc/v1/municipios");
  const [especialidades] = useFetch(
    "http://localhost:3000/tcc/v1/especialidades"
  );
  const fetchAddTutor = async (data) => {
    try {
      const res = await axios.put(
        `http://localhost:3000/tcc/v1/tutores/add/`,
        data
      );
      console.log("resposta:", res);
    } catch (error) {
    } finally {
      dispatch(getAllTutores());
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
          <Dialog.Title className="DialogTitle">Adicionar tutor</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Preencha correctamente todos os formularios e depois adiciona.
          </Dialog.Description>
          <h3 className="tittle_section">
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
                <option value=" ">selecionar</option>
                <option value="masculino">masculino</option>
                <option value="femenino">femenino</option>
              </select>
            </fieldset>
          </div>
          <div className="Sets">
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="level">
                Estado
              </label>
              <select className="mySelect" {...register("id_estado")}>
                <option value=" ">selecionar</option>
                {estados.map((estados) => (
                  <option
                    value={`${estados.id_estado}`}
                    key={estados.id_estado}
                  >
                    {estados.estado}
                  </option>
                ))}
              </select>
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="level">
                Especialidade
              </label>
              <select className="mySelect" {...register("id_especialidade")}>
                <option value=" ">selecionar</option>
                {especialidades.map((especialidade) => (
                  <option
                    value={`${especialidade.id_especialidade}`}
                    key={especialidade.id_especialidade}
                  >
                    {especialidade.especialidade}
                  </option>
                ))}
              </select>
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="username">
                Grau academico
              </label>
              <select className="mySelect" {...register("id_grau")}>
                <option value=" ">selecionar</option>
                {graus.map((grau) => (
                  <option value={`${grau.id_grau}`} key={grau.id_grau}>
                    {grau.grau}
                  </option>
                ))}
              </select>
            </fieldset>
          </div>
          <h3 className="tittle_section">
            <MapOutlined /> Morada
          </h3>
          <div className="Sets">
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="username">
                Provincia
              </label>
              <select className="mySelect" {...register("id_provincia")}>
                <option value=" ">selecionar</option>
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
                <option value=" ">selecionar</option>
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

          <h3 className="tittle_section">
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
              <button className="Button" onClick={handleSubmit(fetchAddTutor)}>
                Adicionar
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
export default ModalAddTutor;
