import React from "react";
import "./ContestTable.css"; // Import CSS file for styling
import moment from "moment-timezone"; // Import moment-timezone library
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

const ContestTable = ({ contests }) => {
  // Function to convert UTC time to IST
  const convertToIST = (utcTime) => {
    return moment.utc(utcTime).tz("Asia/Kolkata").format("YYYY-MM-DD HH:mm:ss");
  };

  const columns = [
    {
      key: "event",
      label: "Event",
    },
    {
      key: "start",
      label: "Start Time (IST)",
    },
    {
      key: "end",
      label: "End Time (IST)",
    },
    {
      key: "duration",
      label: "Duration",
    },
    {
      key: "link",
      label: "Link",
    },
  ];

  const rows = contests.map((contest) => ({
    key: contest.id,
    event: contest.event,
    start: convertToIST(contest.start),
    end: convertToIST(contest.end),
    duration: `${Math.floor(contest.duration / 60)} minutes`,
    link: (
      <a href={contest.href} target="_blank" rel="noopener noreferrer">
        Link
      </a>
    ),
  }));

  return (
    <div className="table-container">
      <Table
        aria-label="Upcoming Programming Contests"
        className="nextui-table"
      >
        <TableHeader>
          {columns.map((column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          ))}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => <TableCell>{item[columnKey]}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ContestTable;
