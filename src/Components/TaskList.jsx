import React from "react";
import { Flex } from "@chakra-ui/react";

import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective
} from "@syncfusion/ej2-react-kanban";

import { kanbanData, kanbanGrid } from "./Dummy";

const TaskList = () => (
  <Flex>
    <div className="App">
      <KanbanComponent
        dataSource={kanbanData}
        cardSettings={{ contentField: "Summary", headerField: "Id" }}
        keyField="Status"
      >
        <ColumnsDirective>
          {kanbanGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  </Flex>
);

export default TaskList;
