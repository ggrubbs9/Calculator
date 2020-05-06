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
      buttonPress("Ans")
    },
  },
  {
    label: "C",
    bColor: "grey",
    onPress: () => {
      buttonPress("C")
    },
  },
  {
    label: "CA",
    bColor: "grey",
    onPress: () => {
      buttonPress("CA")
    },
  },
  {
    label: "+/-",
    bColor: "grey",
    onPress: () => {
      buttonPress("+/-")
    },
  },
  {
    label: "7",
    onPress: () => {
      buttonPress(7)
    },
  },
  {
    label: "8",
    onPress: () => {
      buttonPress(8)
    },
  },
  {
    label: "9",
    onPress: () => {
      buttonPress(9)
    },
  },
  {
    label: "/",
    bColor: "grey",
    onPress: () => {
      buttonPress("/")
    },
  },
  {
    label: "4",
    onPress: () => {
      buttonPress(4)
    },
  },
  {
    label: "5",
    onPress: () => {
      buttonPress(5)
    },
  },
  {
    label: "6",
    onPress: () => {
      buttonPress(6)
    },
  },
  {
    label: "x",
    bColor: "grey",
    onPress: () => {
      buttonPress("x")
    },
  },
  {
    label: "1",
    onPress: () => {
      buttonPress(1)
    },
  },
  {
    label: "2",
    onPress: () => {
      buttonPress(2)
    },
  },
  {
    label: "3",
    onPress: () => {
      buttonPress(3)
    },
  },
  {
    label: "-",
    bColor: "grey",
    onPress: () => {
      buttonPress("-")
    },
  },
  {
    label: "0",
    onPress: () => {
      buttonPress(0)
    },
  },
  {
    label: ".",
    onPress: () => {
      buttonPress(".")
    },
  },
  {
    label: "=",
    color: "white",
    bColor: "blue",
    onPress: () => {
      buttonPress("=")
    },
  },
  {
    label: "+",
    bColor: "grey",
    onPress: () => {
      buttonPress("+")
    },
  },
];

function buttonPress(num){
  alert(num)
}

const Button = (props) => {
  return (
    <CustomButton onClick={props.onClick} color={props.color} bColor={props.bColor}>
      {props.label}
    </CustomButton>
  );
};

function App() {
  const [inputValue, setInputValue] = useState(0);
  const [history, setHistory] = useState("");

  return (
    <div className="calculator">
      <div className="input">
        <History
          disabled
          value={history}
          // onChange={(e) => setInputValue(e.target.value)}
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
              onClick={item.onPress}
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
