import React from "react";
import { Flex } from "@chakra-ui/react";

import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Resize,
  DragAndDrop
} from "@syncfusion/ej2-react-schedule";

import { scheduleData } from "./Dummy";

const Calendar = () => (
  <Flex backgroundColor="#202427" borderRadius="20px">
    <div className="App">
      <ScheduleComponent
        height="500px"
        width="600px"
        eventSettings={{ dataSource: scheduleData }}
        selectedDate={new Date(2021, 0, 10)}
      >
        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
        />
      </ScheduleComponent>
    </div>
  </Flex>
);

export default Calendar;
