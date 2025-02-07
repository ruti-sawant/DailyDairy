import React from "react";
import FarmWork from "./FarmWork";
import UploadImg from "./UploadImg";

function FarmWorkTable(props) {
  var getFromFarmWorkTable = props.getFromFarmWorkTable;

  var obtainedData = { row1: {}, row2: {}, row3: {}, row4: {}, row5: {} };

  function getFarmWorkData(data) {
    switch (data.RowNo) {
      case "1":
        switch (data.ColumnNo) {
          case "1":
            obtainedData.row1.FarmWork = data.FarmWork;
            getFromFarmWorkTable(obtainedData);
            break;

          default:
            obtainedData.row1.ImageLink = data.link;
            getFromFarmWorkTable(obtainedData);
        }
        break;

      case "2":
        switch (data.ColumnNo) {
          case "1":
            obtainedData.row2.FarmWork = data.FarmWork;
            getFromFarmWorkTable(obtainedData);
            break;

          default:
            obtainedData.row2.ImageLink = data.link;
            getFromFarmWorkTable(obtainedData);
        }
        break;

      case "3":
        switch (data.ColumnNo) {
          case "1":
            obtainedData.row3.FarmWork = data.FarmWork;
            getFromFarmWorkTable(obtainedData);
            break;

          default:
            obtainedData.row3.ImageLink = data.link;
            getFromFarmWorkTable(obtainedData);
        }
        break;

      case "4":
        switch (data.ColumnNo) {
          case "1":
            obtainedData.row4.FarmWork = data.FarmWork;
            getFromFarmWorkTable(obtainedData);
            break;

          default:
            obtainedData.row4.ImageLink = data.link;
            getFromFarmWorkTable(obtainedData);
        }
        break;

      case "5":
        switch (data.ColumnNo) {
          case "1":
            obtainedData.row5.FarmWork = data.FarmWork;
            getFromFarmWorkTable(obtainedData);
            break;

          default:
            obtainedData.row5.ImageLink = data.link;
            getFromFarmWorkTable(obtainedData);
        }
        break;

      default:
    }
    // obtainedData.MaintainData = data;
  }

  return (
    <div>
      <table>
        <tr>
          <th style={{ textAlign: "center" }}>Work</th>
          <th style={{ textAlign: "center" }}>Details</th>
          <th style={{ textAlign: "center" }}>Image</th>
        </tr>

        <tr>
          <td>
            <FarmWork
              getFarmWorkData={getFarmWorkData}
              rowNo="1"
              columnNo="1"
            />
          </td>
          <td>
            <input
              onChange={(event) => {
                obtainedData.row1.Details = event.target.value;
                getFromFarmWorkTable(obtainedData);
              }}
              className="textInput"
            ></input>
          </td>
          <td>
            <UploadImg
              getFarmWorkData={getFarmWorkData}
              fromWhat="FarmWorkTable"
              rowNo="1"
              columnNo="2"
            />
          </td>
        </tr>

        <tr>
          <td>
            <FarmWork
              getFarmWorkData={getFarmWorkData}
              rowNo="2"
              columnNo="1"
            />
          </td>
          <td>
            <input
              onChange={(event) => {
                obtainedData.row2.Details = event.target.value;
                getFromFarmWorkTable(obtainedData);
              }}
              className="textInput"
            ></input>
          </td>
          <td>
            <UploadImg
              getFarmWorkData={getFarmWorkData}
              fromWhat="FarmWorkTable"
              rowNo="2"
              columnNo="2"
            />
          </td>
        </tr>

        <tr>
          <td>
            <FarmWork
              getFarmWorkData={getFarmWorkData}
              rowNo="3"
              columnNo="1"
            />
          </td>
          <td>
            <input
              onChange={(event) => {
                obtainedData.row3.Details = event.target.value;
                getFromFarmWorkTable(obtainedData);
              }}
              className="textInput"
            ></input>
          </td>
          <td>
            <UploadImg
              getFarmWorkData={getFarmWorkData}
              fromWhat="FarmWorkTable"
              rowNo="3"
              columnNo="2"
            />
          </td>
        </tr>

        <tr>
          <td>
            <FarmWork
              getFarmWorkData={getFarmWorkData}
              rowNo="4"
              columnNo="1"
            />
          </td>
          <td>
            <input
              onChange={(event) => {
                obtainedData.row4.Details = event.target.value;
                getFromFarmWorkTable(obtainedData);
              }}
              className="textInput"
            ></input>
          </td>
          <td>
            <UploadImg
              getFarmWorkData={getFarmWorkData}
              fromWhat="FarmWorkTable"
              rowNo="4"
              columnNo="2"
            />
          </td>
        </tr>

        <tr>
          <td>
            <FarmWork
              getFarmWorkData={getFarmWorkData}
              rowNo="5"
              columnNo="1"
            />
          </td>
          <td>
            <input
              onChange={(event) => {
                obtainedData.row5.Details = event.target.value;
                getFromFarmWorkTable(obtainedData);
              }}
              className="textInput"
            ></input>
          </td>
          <td>
            <UploadImg
              getFarmWorkData={getFarmWorkData}
              fromWhat="FarmWorkTable"
              rowNo="5"
              columnNo="2"
            />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default FarmWorkTable;
