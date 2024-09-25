// TabsComponent.js
import React from "react";
import { Tabs, Tab } from "react-bootstrap";

const TabsComponent = ({ tabs, defaultActiveKey = "0", className = "" }) => {
  return (
    <Tabs defaultActiveKey={defaultActiveKey} className={className}>
      {tabs.map((tab, index) => (
        <Tab eventKey={index.toString()} title={tab.title} key={index}>
          {tab.content}
        </Tab>
      ))}
    </Tabs>
  );
};

export default TabsComponent;
