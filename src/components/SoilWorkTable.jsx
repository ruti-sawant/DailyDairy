import React from "react";
import SoilWork from "./SoilWork";
import UploadImg from "./UploadImg";

function SoilWorkTable(props) {
  const getFromSoilTable = props.getFromSoilTable;
  var obtainedData = { row1: {}, row2: {}, row3: {}, row4: {}, row5: {} };

  function getSoilData(data) {
    switch (data.RowNo) {
      case "1":
        switch (data.ColumnNo) {
          case "1":
            obtainedData.row1.soilWork = data.soilWork;
            getFromSoilTable(obtainedData);
            break;

          default:
            obtainedData.row1.ImageLink = data.link;
            getFromSoilTable(obtainedData);
        }
        break;
      case "2":
        switch (data.ColumnNo) {
          case "1":
            obtainedData.row2.soilWork = data.soilWork;
            getFromSoilTable(obtainedData);
            break;

          default:
            obtainedData.row2.ImageLink = data.link;
            getFromSoilTable(obtainedData);
        }
        break;
      case "3":
        switch (data.ColumnNo) {
          case "1":
            obtainedData.row3.soilWork = data.soilWork;
            getFromSoilTable(obtainedData);
            break;

          default:
            obtainedData.row3.ImageLink = data.link;
            getFromSoilTable(obtainedData);
        }
        break;
      case "4":
        switch (data.ColumnNo) {
          case "1":
            obtainedData.row4.soilWork = data.soilWork;
            getFromSoilTable(obtainedData);
            break;

          default:
            obtainedData.row4.ImageLink = data.link;
            getFromSoilTable(obtainedData);
        }
        break;
      case "5":
        switch (data.ColumnNo) {
          case "1":
            obtainedData.row4.soilWork = data.soilWork;
            getFromSoilTable(obtainedData);
            break;

          default:
            obtainedData.row5.ImageLink = data.link;
            getFromSoilTable(obtainedData);
        }
        break;
      default:
    }
  }
  return (
    <div>
      <table>
        <tr>
          <th style={{ textAlign: "center" }}>Work</th>
          <th style={{ textAlign: "center" }}>Total Distance Covered</th>
          <th style={{ textAlign: "center" }}>Image</th>
        </tr>

        <tr>
          <td>
            <SoilWork getSoilData={getSoilData} rowNo="1" columnNo="1" />
          </td>
          <td>
            <input
              onChange={(event) => {
                obtainedData.row1.Details = event.target.value;
                getFromSoilTable(obtainedData);
              }}
              className="textInput"
              type="number"
            ></input>
          </td>
          <td>
            <UploadImg
              getSoilData={getSoilData}
              fromWhat="SoilWorkTable"
              rowNo="1"
              columnNo="2"
            />
          </td>
        </tr>

        <tr>
          <td>
            <SoilWork getSoilData={getSoilData} rowNo="2" columnNo="1" />
          </td>
          <td>
            <input
              onChange={(event) => {
                obtainedData.row2.Details = event.target.value;
                getFromSoilTable(obtainedData);
              }}
              className="textInput"
              type="number"
            ></input>
          </td>
          <td>
            <UploadImg
              getSoilData={getSoilData}
              fromWhat="SoilWorkTable"
              rowNo="2"
              columnNo="2"
            />
          </td>
        </tr>

        <tr>
          <td>
            <SoilWork getSoilData={getSoilData} rowNo="3" columnNo="1" />
          </td>
          <td>
            <input
              onChange={(event) => {
                obtainedData.row3.Details = event.target.value;
                getFromSoilTable(obtainedData);
              }}
              className="textInput"
              type="number"
            ></input>
          </td>
          <td>
            <UploadImg
              getSoilData={getSoilData}
              fromWhat="SoilWorkTable"
              rowNo="3"
              columnNo="2"
            />
          </td>
        </tr>

        <tr>
          <td>
            <SoilWork getSoilData={getSoilData} rowNo="4" columnNo="1" />
          </td>
          <td>
            <input
              onChange={(event) => {
                obtainedData.row4.Details = event.target.value;
                getFromSoilTable(obtainedData);
              }}
              className="textInput"
              type="number"
            ></input>
          </td>
          <td>
            <UploadImg
              getSoilData={getSoilData}
              fromWhat="SoilWorkTable"
              rowNo="4"
              columnNo="2"
            />
          </td>
        </tr>

        <tr>
          <td>
            <SoilWork getSoilData={getSoilData} rowNo="5" columnNo="1" />
          </td>
          <td>
            <input
              onChange={(event) => {
                obtainedData.row5.Details = event.target.value;
                getFromSoilTable(obtainedData);
              }}
              className="textInput"
              type="number"
            ></input>
          </td>
          <td>
            <UploadImg
              getSoilData={getSoilData}
              fromWhat="SoilWorkTable"
              rowNo="5"
              columnNo="2"
            />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default SoilWorkTable;
