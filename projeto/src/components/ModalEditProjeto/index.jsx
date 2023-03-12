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
import { useDispatch } from "react-redux";
import { getAllAlunos } from "../../store/feactures/alunosSlice";
import { getAllProjetos } from "../../store/feactures/projetosSlice";

const ModalEditProjeto = ({ projetoData }) => {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();
  const [cursos] = useFetch("http://localhost:3000/tcc/v1/cursos");
  const [estado_projetos] = useFetch(
    "http://localhost:3000/tcc/v1/estados_projetos"
  );

  const [tutores] = useFetch("http://localhost:3000/tcc/v1/tutores");

  const fetchUpdateProjeto = async (data) => {
    try {
      const res = await axios.put(
        `http://localhost:3000/tcc/v1/projetos/${projetoData.id_projeto}`,
        data
      );
    } catch (error) {
    } finally {
      dispatch(getAllProjetos());
    }
  };
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <EditOutlined />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Editar projeto</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Faça alterações deste projeto aqui. Clica em salvar quando
            terminares.
          </Dialog.Description>

          <div className="Sets">
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="name">
                Tema
              </label>
              <input
                className="Input"
                id="name"
                defaultValue={projetoData.projeto}
                {...register("projeto")}
              />
            </fieldset>

            <fieldset className="Fieldset">
              <label className="Label" htmlFor="level">
                Estado do projeto
              </label>
              <select className="mySelect" {...register("id_estado_projeto")}>
                {projetoData && (
                  <option value={`${projetoData.id_estado_projeto}`}>
                    {projetoData.estado_projeto}
                  </option>
                )}

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
                {projetoData && (
                  <option value={`${projetoData.id_curso}`}>
                    {projetoData.curso}
                  </option>
                )}

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
                {projetoData && (
                  <option value={`${projetoData.id_tutor}`}>
                    {projetoData.nome} {projetoData.apelido}
                  </option>
                )}

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
              <input
                className="Input"
                type={"number"}
                defaultValue={projetoData.grupo}
                {...register("grupo")}
              />
            </fieldset>
            <fieldset className="Fieldset">
              <fieldset className="Fieldset">
                <label className="Label" htmlFor="username">
                  Classificação
                </label>
                <input
                  className="Input"
                  defaultValue={projetoData.classificacao}
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
                
                  className="Input"
                  defaultValue={projetoData.data_defesa}
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
                defaultValue={projetoData.descricao}
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
                onClick={handleSubmit(fetchUpdateProjeto)}
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
export default ModalEditProjeto;
