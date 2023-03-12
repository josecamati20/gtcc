import React from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import "./styles.css";
import { DeleteOutlined } from "@material-ui/icons";

const DeleteDialog = ({ handleDelete ,title,description }) => (
  <AlertDialog.Root>
    <AlertDialog.Trigger asChild>
      <DeleteOutlined />
    </AlertDialog.Trigger>
    <AlertDialog.Portal>
      <AlertDialog.Overlay className="AlertDialogOverlay" />
      <AlertDialog.Content className="AlertDialogContent">
        <AlertDialog.Title className="AlertDialogTitle">
          {title}
        </AlertDialog.Title>
        <AlertDialog.Description className="AlertDialogDescription">
         {description}
        </AlertDialog.Description>
        <div style={{ display: "flex", gap: 25, justifyContent: "flex-end" }}>
          <AlertDialog.Cancel asChild>
            <button className="btn mauve">Cancelar</button>
          </AlertDialog.Cancel>
          <AlertDialog.Action asChild>
            <button className="btn red" onClick={handleDelete}>
              Sim, apagar
            </button>
          </AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog.Root>
);

export default DeleteDialog;
