import React from "react";
import Maintenance from "./Maintenance";
import UploadImg from "./UploadImg";

function MaintenanceTable(props) {
  var getFromMaintainTable = props.getFromMaintainTable;

  var obtainedData = { row1: {}, row2: {}, row3: {}, row4: {}, row5: {} };

  function getMaintenanceData(data) {
    switch (data.RowNo) {
      case "1":
        switch (data.ColumnNo) {
          case "1":
            obtainedData.row1.MaintenanceWork = data.MaintenanceWork;
            getFromMaintainTable(obtainedData);
            break;

          default:
            obtainedData.row1.ImageLink = data.link;
            getFromMaintainTable(obtainedData);
        }
        break;

      case "2":
        switch (data.ColumnNo) {
          case "1":
            obtainedData.row2.MaintenanceWork = data.MaintenanceWork;
            getFromMaintainTable(obtainedData);
            break;

          default:
            obtainedData.row2.ImageLink = data.link;
            getFromMaintainTable(obtainedData);
        }
        break;

      case "3":
        switch (data.ColumnNo) {
          case "1":
            obtainedData.row3.MaintenanceWork = data.MaintenanceWork;
            getFromMaintainTable(obtainedData);
            break;

          default:
            obtainedData.row3.ImageLink = data.link;
            getFromMaintainTable(obtainedData);
        }
        break;

      case "4":
        switch (data.ColumnNo) {
          case "1":
            obtainedData.row4.MaintenanceWork = data.MaintenanceWork;
            getFromMaintainTable(obtainedData);
            break;

          default:
            obtainedData.row4.ImageLink = data.link;
            getFromMaintainTable(obtainedData);
        }
        break;

      case "5":
        switch (data.ColumnNo) {
          case "1":
            obtainedData.row5.MaintenanceWork = data.MaintenanceWork;
            getFromMaintainTable(obtainedData);
            break;

          default:
            obtainedData.row5.ImageLink = data.link;
            getFromMaintainTable(obtainedData);
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
          <th style={{ textAlign: "center" }}>Items</th>
          <th style={{ textAlign: "center" }}>Details</th>
          <th style={{ textAlign: "center" }}>Image</th>
        </tr>

        <tr>
          <td>
            <Maintenance
              getMaintenanceData={getMaintenanceData}
              rowNo="1"
              columnNo="1"
            />
          </td>
          <td>
            <input
              onChange={(event) => {
                obtainedData.row1.Details = event.target.value;
                getFromMaintainTable(obtainedData);
              }}
              className="textInput"
            ></input>
          </td>
          <td>
            <UploadImg
              getMaintenanceData={getMaintenanceData}
              fromWhat="MaintenanceTable"
              rowNo="1"
              columnNo="2"
            />
          </td>
        </tr>

        <tr>
          <td>
            <Maintenance
              getMaintenanceData={getMaintenanceData}
              rowNo="2"
              columnNo="1"
            />
          </td>
          <td>
            <input
              onChange={(event) => {
                obtainedData.row2.Details = event.target.value;
                getFromMaintainTable(obtainedData);
              }}
              className="textInput"
            ></input>
          </td>
          <td>
            <UploadImg
              getMaintenanceData={getMaintenanceData}
              fromWhat="MaintenanceTable"
              rowNo="2"
              columnNo="2"
            />
          </td>
        </tr>

        <tr>
          <td>
            <Maintenance
              getMaintenanceData={getMaintenanceData}
              rowNo="3"
              columnNo="1"
            />
          </td>
          <td>
            <input
              className="textInput"
              onChange={(event) => {
                obtainedData.row3.Details = event.target.value;
                getFromMaintainTable(obtainedData);
              }}
            ></input>
          </td>
          <td>
            <UploadImg
              getMaintenanceData={getMaintenanceData}
              fromWhat="MaintenanceTable"
              rowNo="3"
              columnNo="2"
            />
          </td>
        </tr>

        <tr>
          <td>
            <Maintenance
              getMaintenanceData={getMaintenanceData}
              rowNo="4"
              columnNo="1"
            />
          </td>
          <td>
            <input
              onChange={(event) => {
                obtainedData.row4.Details = event.target.value;
                getFromMaintainTable(obtainedData);
              }}
              className="textInput"
            ></input>
          </td>
          <td>
            <UploadImg
              getMaintenanceData={getMaintenanceData}
              fromWhat="MaintenanceTable"
              rowNo="4"
              columnNo="2"
            />
          </td>
        </tr>

        <tr>
          <td>
            <Maintenance
              getMaintenanceData={getMaintenanceData}
              rowNo="5"
              columnNo="1"
            />
          </td>
          <td>
            <input
              onChange={(event) => {
                obtainedData.row5.Details = event.target.value;
                getFromMaintainTable(obtainedData);
              }}
              className="textInput"
            ></input>
          </td>
          <td>
            <UploadImg
              getMaintenanceData={getMaintenanceData}
              fromWhat="MaintenanceTable"
              rowNo="5"
              columnNo="2"
            />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default MaintenanceTable;
