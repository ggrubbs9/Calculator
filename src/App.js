import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";

const History = styled.input`
  direction: rtl;
  width: 98%;
  color: orange;
  background-color: transparent;
  border: none;
  margin-top: 10px;
`;

const InputField = styled.input`
  direction: rtl;
  height: 93%;
  width: 98%;
  font-size: 60px;
  color: orange;
  background-color: transparent;
  border: none;
  margin-left: 5px;
  margin-top: -10px;
`;

const CustomButton = styled.button`
  width: 24%;
  height: 20%;
  margin: 2px;
  border: none;
  border-radius: 5px;
  color: ${({ color }) => (color ? color : "black")};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  background-color: ${({ bColor }) => (bColor ? bColor : "white")};

  &:active {
    background-color: black;
  }
`;

const buttonConfig = [
  {
    label: "Ans",
    bColor: "grey",
    onPress: () => {
      alert("ok");
    },
  },
  {
    label: "C",
    bColor: "grey",
    onPress: () => {
      alert("ok");
    },
  },
  {
    label: "CA",
    bColor: "grey",
    onPress: () => {
      alert("ok");
    },
  },
  {
    label: "+/-",
    bColor: "grey",
    onPress: () => {
      alert("ok");
    },
  },
  {
    label: "7",
    onPress: () => {
      alert("ok");
    },
  },
  {
    label: "8",
    onPress: () => {
      alert("ok");
    },
  },
  {
    label: "9",
    onPress: () => {
      alert("ok");
    },
  },
  {
    label: "/",
    bColor: "grey",
    onPress: () => {
      alert("ok");
    },
  },
  {
    label: "4",
    onPress: () => {
      alert("ok");
    },
  },
  {
    label: "5",
    onPress: () => {
      alert("ok");
    },
  },
  {
    label: "6",
    onPress: () => {
      alert("ok");
    },
  },
  {
    label: "x",
    bColor: "grey",
    onPress: () => {
      alert("ok");
    },
  },
  {
    label: "1",
    onPress: () => {
      alert("ok");
    },
  },
  {
    label: "2",
    onPress: () => {
      alert("ok");
    },
  },
  {
    label: "3",
    onPress: () => {
      alert("ok");
    },
  },
  {
    label: "-",
    bColor: "grey",
    onPress: () => {
      alert("ok");
    },
  },
  {
    label: "0",
    onPress: () => {
      alert("ok");
    },
  },
  {
    label: ".",
    onPress: () => {
      alert("ok");
    },
  },
  {
    label: "=",
    color: "white",
    bColor: "blue",
    onPress: () => {
      alert("ok");
    },
  },
  {
    label: "+",
    bColor: "grey",
    onPress: () => {
      alert("ok");
    },
  },
];

const Button = (props) => {
  return (
    <CustomButton color={props.color} bColor={props.bColor}>
      {props.label}
    </CustomButton>
  );
};

function App() {
  const [inputValue, setInputValue] = useState(99999.999);

  return (
    <div className="calculator">
      <div className="input">
        <History
          disabled
          value="9999"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <InputField
          disabled
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div className="buttons">
        {buttonConfig.map((item, index) => {
          return (
            <Button
              bColor={item.bColor}
              color={item.color}
              label={item.label}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
