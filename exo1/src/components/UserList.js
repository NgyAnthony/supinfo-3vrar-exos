import React from "react";
import {Avatar, Button, List, Tag} from "antd";
import { DeleteOutlined } from '@ant-design/icons';

export function UserList({users, deleteUser}) {
  const handleDeleteUser = (user) => {
    deleteUser(user)
  }
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
            <Button danger onClick={() => handleDeleteUser(item)}>
              <DeleteOutlined />
            </Button>

          </List.Item>
        )}
      />
    </>
  )
}
