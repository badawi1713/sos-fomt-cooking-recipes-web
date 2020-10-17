import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import "./style.css";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#3F51B5",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(number, image, name, createdDate) {
  return { number, image, name, createdDate };
}

const rows = [
  createData(
    1,
    "https://static.miraheze.org/ranchstorywiki/a/af/Sosfomt_items_Mayonnaise_S_Size.png",
    "Mayonnaise (S)",
    "13-10-2020"
  ),
  createData(
    2,
    "https://static.miraheze.org/ranchstorywiki/d/d3/Sosfomt_items_Mayonnaise_M_Size.png",
    "Mayonnaise (M)",
    "12-10-2020"
  ),
  createData(
    3,
    "https://static.miraheze.org/ranchstorywiki/5/59/Sosfomt_items_Mayonnaise_L_Size.png",
    "Mayonnaise (L)",
    "11-10-2020"
  ),
  createData(
    4,
    "https://static.miraheze.org/ranchstorywiki/0/02/Sosfomt_items_Mayonnaise_P_Size.png",
    "Mayonnaise (P)",
    "10-10-2020"
  ),
  createData(
    5,
    "https://static.miraheze.org/ranchstorywiki/6/67/Sosfomt_items_Mayonnaise_X_Size.png",
    "Mayonnaise (X)",
    "10-10-2020"
  ),
];

const HomeTable = () => {
  return (
    <div className="home-table-container">
      <Table className={`home-table`} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">No</StyledTableCell>
            <StyledTableCell align="center">Image</StyledTableCell>
            <StyledTableCell align="center">Recipe Name</StyledTableCell>
            <StyledTableCell align="center">Created At</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.number}>
              <StyledTableCell
                className="table-cell-padding"
                align="center"
                component="th"
                width="auto"
              >
                {row.number}
              </StyledTableCell>
              <StyledTableCell
                className="table-cell-padding"
                align="center"
                width="auto"
              >
                <img
                  src={row.image}
                  width="48px"
                  height="48px"
                  alt="recipes-img"
                />
              </StyledTableCell>
              <StyledTableCell
                className="table-cell-padding"
                align="left"
                width="auto"
              >
                {row.name}
              </StyledTableCell>
              <StyledTableCell
                className="table-cell-padding"
                align="center"
                width="auto"
              >
                {row.createdDate}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default HomeTable;
