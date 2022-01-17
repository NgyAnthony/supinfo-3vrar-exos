import React, {useState} from "react";
import {Avatar, Button, List, Modal, Tag} from "antd";
import { DeleteOutlined } from '@ant-design/icons';
import {ModifyUser} from "./ModifyUser";
import {css} from "@emotion/css";

export function UserList({users, deleteUser, modifyUser}) {
  const [userSelected, setUserSelected] = useState()

  const handleDeleteUser = (user) => {
    deleteUser(user)
  }

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (user) => {
    setUserSelected(user)
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={users}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={item.firstName}
              description={item.lastName}
            />
            {item.isAdmin ? (
              <Tag color="red">Admin</Tag>
            ):(
              <Tag color="blue">Utilisateur</Tag>
            )
            }
            <Button onClick={() => showModal(item)} className={css`margin-right: 0.67em`}>
              Modifier
            </Button>
            <Button danger onClick={() => handleDeleteUser(item)}>
              <DeleteOutlined />
            </Button>
          </List.Item>
        )}
      />

      <Modal title="Modifier"
             visible={isModalVisible}
             footer={[
               <Button key="back" onClick={handleCancel}>
                 Annuler
               </Button>
             ]}>
        <ModifyUser user={userSelected} modifyUser={modifyUser}/>
      </Modal>
    </>
  )
}
