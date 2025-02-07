import React, { useState } from "react";
import Spraying from "./Spraying";
import UploadImg from "./UploadImg";
import ChemicalDropDown from "./ChemicalDropDown";

function SprayingTable(props) {
  // console.log("Spraying Table called");

  const [selectedType, setSelectedType] = useState("none");

  function handleSelectedType(gotSelected) {
    setSelectedType(gotSelected);
  }

  var getFromSprayingTable = props.getFromSprayingTable;
  var prevData;

  const [obtainedData, setObtainedData] = useState({
    row1: {},
    row2: {},
    row3: {},
    row4: {},
    row5: {}
  });

  function getSprayingData(data) {
    switch (data.RowNo) {
      case "1":
        switch (data.ColumnNo) {
          case "1":
            prevData = obtainedData;
            prevData.row1.SprayingType = data.SprayingType;
            setObtainedData(prevData);
            getFromSprayingTable(obtainedData);
            break;

          case "2":
            prevData = obtainedData;
            prevData.row1.Chemical = data.Chemical;
            setObtainedData(prevData);
            getFromSprayingTable(obtainedData);
            break;

          default:
            prevData = obtainedData;
            prevData.row1.ImageLink = data.link;
            setObtainedData(prevData);
            getFromSprayingTable(obtainedData);
        }
        break;

      case "2":
        switch (data.ColumnNo) {
          case "1":
            prevData = obtainedData;
            prevData.row2.SprayingType = data.SprayingType;
            setObtainedData(prevData);
            getFromSprayingTable(obtainedData);
            break;

          case "2":
            prevData = obtainedData;
            prevData.row2.Chemical = data.Chemical;
            setObtainedData(prevData);
            getFromSprayingTable(obtainedData);
            break;

          default:
            prevData = obtainedData;
            prevData.row2.ImageLink = data.link;
            setObtainedData(prevData);
            getFromSprayingTable(obtainedData);
        }
        break;

      case "3":
        switch (data.ColumnNo) {
          case "1":
            prevData = obtainedData;
            prevData.row3.SprayingType = data.SprayingType;
            setObtainedData(prevData);
            getFromSprayingTable(obtainedData);
            break;

          case "2":
            prevData = obtainedData;
            prevData.row3.Chemical = data.Chemical;
            setObtainedData(prevData);
            getFromSprayingTable(obtainedData);
            break;

          default:
            prevData = obtainedData;
            prevData.row3.ImageLink = data.link;
            setObtainedData(prevData);
            getFromSprayingTable(obtainedData);
        }
        break;

      case "4":
        switch (data.ColumnNo) {
          case "1":
            prevData = obtainedData;
            prevData.row4.SprayingType = data.SprayingType;
            setObtainedData(prevData);
            getFromSprayingTable(obtainedData);
            break;

          case "2":
            prevData = obtainedData;
            prevData.row4.Chemical = data.Chemical;
            setObtainedData(prevData);
            getFromSprayingTable(obtainedData);
            break;

          default:
            prevData = obtainedData;
            prevData.row4.ImageLink = data.link;
            setObtainedData(prevData);
            getFromSprayingTable(obtainedData);
        }
        break;

      case "5":
        switch (data.ColumnNo) {
          case "1":
            prevData = obtainedData;
            prevData.row5.SprayingType = data.SprayingType;
            setObtainedData(prevData);
            getFromSprayingTable(obtainedData);
            break;

          case "2":
            prevData = obtainedData;
            prevData.row5.Chemical = data.Chemical;
            setObtainedData(prevData);
            getFromSprayingTable(obtainedData);
            break;

          default:
            prevData = obtainedData;
            prevData.row5.ImageLink = data.link;
            setObtainedData(prevData);
            getFromSprayingTable(obtainedData);
        }
        break;

      default:
    }
  }

  return (
    <div>
      <table>
        <tr>
          <th style={{ textAlign: "center" }}>Type</th>
          <th style={{ textAlign: "center" }}>Chemical</th>
          <th style={{ textAlign: "center" }}>Quantity</th>
          <th style={{ textAlign: "center" }}>Image</th>
        </tr>

        <tr>
          <td>
            <Spraying
              handleSelectedType={handleSelectedType}
              getSprayingData={getSprayingData}
              rowNo="1"
              columnNo="1"
            />
          </td>
          <td>
            <ChemicalDropDown
              selectedType={selectedType}
              getSprayingData={getSprayingData}
              rowNo="1"
              columnNo="2"
            />
          </td>
          <td>
            <input
              onChange={(event) => {
                obtainedData.row1.Quantity = event.target.value;
                getFromSprayingTable(obtainedData);
              }}
              className="textInput"
              type="number"
            ></input>
          </td>
          <td>
            <UploadImg
              getSprayingData={getSprayingData}
              fromWhat="SprayingTable"
              rowNo="1"
              columnNo="3"
            />
          </td>
        </tr>

        <tr>
          <td>
            <Spraying
              handleSelectedType={handleSelectedType}
              getSprayingData={getSprayingData}
              rowNo="2"
              columnNo="1"
            />
          </td>
          <td>
            <ChemicalDropDown
              selectedType={selectedType}
              getSprayingData={getSprayingData}
              rowNo="2"
              columnNo="2"
            />
          </td>
          <td>
            <input
              onChange={(event) => {
                obtainedData.row2.Quantity = event.target.value;
                getFromSprayingTable(obtainedData);
              }}
              className="textInput"
              type="number"
            ></input>
          </td>
          <td>
            <UploadImg
              getSprayingData={getSprayingData}
              fromWhat="SprayingTable"
              rowNo="2"
              columnNo="3"
            />
          </td>
        </tr>

        <tr>
          <td>
            <Spraying
              handleSelectedType={handleSelectedType}
              getSprayingData={getSprayingData}
              rowNo="3"
              columnNo="1"
            />
          </td>
          <td>
            <ChemicalDropDown
              selectedType={selectedType}
              getSprayingData={getSprayingData}
              rowNo="3"
              columnNo="2"
            />
          </td>
          <td>
            <input
              onChange={(event) => {
                obtainedData.row3.Quantity = event.target.value;
                getFromSprayingTable(obtainedData);
              }}
              className="textInput"
              type="number"
            ></input>
          </td>
          <td>
            <UploadImg
              getSprayingData={getSprayingData}
              fromWhat="SprayingTable"
              rowNo="3"
              columnNo="3"
            />
          </td>
        </tr>

        <tr>
          <td>
            <Spraying
              handleSelectedType={handleSelectedType}
              getSprayingData={getSprayingData}
              rowNo="4"
              columnNo="1"
            />
          </td>
          <td>
            <ChemicalDropDown
              selectedType={selectedType}
              getSprayingData={getSprayingData}
              rowNo="4"
              columnNo="2"
            />
          </td>
          <td>
            <input
              onChange={(event) => {
                obtainedData.row4.Quantity = event.target.value;
                getFromSprayingTable(obtainedData);
              }}
              className="textInput"
              type="number"
            ></input>
          </td>
          <td>
            <UploadImg
              getSprayingData={getSprayingData}
              fromWhat="SprayingTable"
              rowNo="4"
              columnNo="3"
            />
          </td>
        </tr>

        <tr>
          <td>
            <Spraying
              handleSelectedType={handleSelectedType}
              getSprayingData={getSprayingData}
              rowNo="5"
              columnNo="1"
            />
          </td>
          <td>
            <ChemicalDropDown
              selectedType={selectedType}
              getSprayingData={getSprayingData}
              rowNo="5"
              columnNo="2"
            />
          </td>
          <td>
            <input
              onChange={(event) => {
                obtainedData.row5.Quantity = event.target.value;
                getFromSprayingTable(obtainedData);
              }}
              className="textInput"
              type="number"
            ></input>
          </td>
          <td>
            <UploadImg
              getSprayingData={getSprayingData}
              fromWhat="SprayingTable"
              rowNo="5"
              columnNo="3"
            />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default SprayingTable;
