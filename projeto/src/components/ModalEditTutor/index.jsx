import React, { useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import "./styles.css";
import {
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


const ModalEditTutor = ({ tutorData }) => {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();
  const [provincias] = useFetch("http://localhost:3000/tcc/v1/provincias");
  const [estados] = useFetch("http://localhost:3000/tcc/v1/estados");
  const [graus] = useFetch("http://localhost:3000/tcc/v1/graus");
  const [municipios] = useFetch("http://localhost:3000/tcc/v1/municipios");
  const [especialidades] = useFetch(
    "http://localhost:3000/tcc/v1/especialidades"
  );
  const fetchUpdateTutor = async (data) => {
    try {
      
      const res = await axios.post(
        `http://localhost:3000/tcc/v1/tutores/${tutorData.id_tutor}`,
        data
      );
    
    } catch (error) {
    } finally {
      dispatch(getAllTutores());
    }
  };
  console.log('modal edit tutor data: ', tutorData)
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <EditOutlined />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">
            Editar tutor
          </Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Faça alterações deste tutor aqui. Clica em salvar quando terminares.
          </Dialog.Description>
          <h3>
            <PersonOutline /> Identificação
          </h3>
          <div className="Sets">
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="name">
                Nome
              </label>
              <input
                className="Input"
                id="name"
                defaultValue={tutorData.nome}
                {...register("nome")}
              />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="username">
                Apelido
              </label>
              <input
                className="Input"
                defaultValue={tutorData.apelido}
                {...register("apelido")}
              />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="specialit">
                Genero
              </label>
              <select className="mySelect" {...register("genero")}>
                {!tutorData && <option value="">selecionar</option>}
                {tutorData && (
                  <option value={`${tutorData.genero}`}>
                    {tutorData.genero}
                  </option>
                )}

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
                {tutorData && (
                  <option value={`${tutorData.id_estado}`}>
                    {tutorData.estado}
                  </option>
                )}
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
                {tutorData && (
                  <option value={`${tutorData.id_especialidade}`}>
                    {tutorData.especialidade}
                  </option>
                )}

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
                {tutorData && (
                  <option value={`${tutorData.id_grau}`}>
                    {tutorData.grau}
                  </option>
                )}

                {graus.map((grau) => (
                  <option value={`${grau.id_grau}`} key={grau.id_grau}>
                    {grau.grau}
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
                {tutorData && (
                  <option value={`${tutorData.id_provincia}`}>
                    {tutorData.provincia}
                  </option>
                )}

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
                {tutorData && (
                  <option value={`${tutorData.id_municipio}`}>
                    {tutorData.municipio}
                  </option>
                )}

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
              <input
                className="Input"
                defaultValue={tutorData.bairro}
                {...register("bairro")}
              />
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
              <input
                className="Input"
                defaultValue={tutorData.contacto}
                {...register("contacto")}
              />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="username">
                Contacto alternativo
              </label>
              <input
                className="Input"
                defaultValue={tutorData.contacto_alternativo}
                {...register("contacto_alternativo")}
              />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="username">
                E-mail
              </label>
              <input
                className="Input"
                defaultValue={tutorData.email}
                {...register("email")}
              />
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
              <button
                className="Button"
                onClick={handleSubmit(fetchUpdateTutor)}
              >
                Salvar alterações
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
export default ModalEditTutor;
