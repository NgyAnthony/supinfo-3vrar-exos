import React from "react";
import {Card, Divider, List, Tag} from "antd";
import articleSeed from '../data/articleSeed.json';

function ArticleList() {
  return (
    <div>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={articleSeed}
        renderItem={item => (
          <List.Item
            key={item.id}
          >
            <Card title={item.title}>
              {item.description}
              <Divider/>
              <Tag color="red">{item.date}</Tag>
              <Tag color="blue">{item.category}</Tag>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
}

export default ArticleList;
