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
import { getAllProjetos } from "../../store/feactures/projetosSlice";
import { Button } from "@material-ui/core";

const ModalAddProjeto = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, resetField, reset } = useForm();
  const [cursos] = useFetch("http://localhost:3000/tcc/v1/cursos");
  const [estado_projetos] = useFetch(
    "http://localhost:3000/tcc/v1/estados_projetos"
  );

  const [tutores] = useFetch("http://localhost:3000/tcc/v1/tutores");

  const fetchAddProjeto = async (data) => {
    try {
      const res = await axios.post(
        `http://localhost:3000/tcc/v1/projetos/`,
        data
      );
      console.log("minha resposta do server: ", res);
    } catch (error) {
    } finally {
      dispatch(getAllProjetos());
      reset();
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
          <Dialog.Title className="DialogTitle">Adicionar projeto</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Preencha correctamente todos os formularios e depois adiciona.
          </Dialog.Description>

          <div className="Sets">
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="name">
                Tema
              </label>
              <input className="Input" id="name" {...register("projeto")} />
            </fieldset>

            <fieldset className="Fieldset">
              <label className="Label" htmlFor="level">
                Estado do projeto
              </label>
              <select className="mySelect" {...register("id_estado_projeto")}>
                <option value={""}>selecionar</option>
                {estado_projetos.map((estado_projeto) => (
                  <option
                    value={`${estado_projeto.id_estado_projeto}`}
                    key={estado_projeto.id_estado_projeto}
                  >
                    {estado_projeto.estado_projeto}
                  </option>
                ))}
              </select>
            </fieldset>
          </div>
          <div className="Sets">
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="level">
                Curso
              </label>
              <select className="mySelect" {...register("id_curso")}>
                <option value={""}>selecionar</option>
                {cursos.map((curso) => (
                  <option value={`${curso.id_curso}`} key={curso.id_curso}>
                    {curso.curso}
                  </option>
                ))}
              </select>
            </fieldset>

            <fieldset className="Fieldset">
              <label className="Label" htmlFor="level">
                Tutor
              </label>
              <select className="mySelect" {...register("id_tutor")}>
                <option value={""}>selecionar</option>
                {tutores.map((tutor) => (
                  <option value={`${tutor.id_tutor}`} key={tutor.id_tutor}>
                    {tutor.nome} {tutor.apelido}
                  </option>
                ))}
              </select>
            </fieldset>
          </div>

          <div className="Sets">
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="username">
                N do grupo
              </label>
              <input className="Input" {...register("grupo")} />
            </fieldset>
            <fieldset className="Fieldset">
              <fieldset className="Fieldset">
                <label className="Label" htmlFor="username">
                  Classificação
                </label>
                <input
                  className="Input"
                  type={"number"}
                  {...register("classificacao")}
                />
              </fieldset>
            </fieldset>
            <fieldset className="Fieldset">
              <fieldset className="Fieldset">
                <label className="Label" htmlFor="username">
                  Data da defesa
                </label>
                <input
                  type={"date"}
                  className="Input"
                  {...register("data_defesa")}
                />
              </fieldset>
            </fieldset>
          </div>
          <div className="sets">
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="username">
                Descrição do projeto
              </label>
              <textarea
                className="Input descricao"
                {...register("descricao")}
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
                onClick={handleSubmit(fetchAddProjeto)}
              >
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
export default ModalAddProjeto;
