import { useState } from "react";
import { Button, Container, Current, Previous, Screen } from "../Styled";

export default function Calculator () {
  const [previous, setPrevious] = useState("");
  const [current, setCurrent] = useState("");
  const [operation, setOperation] = useState("");

  const appendValue = (el) => {
    const value = el.target.getAttribute("data");
    if (value === "." && current.includes(".")) return;
    setCurrent(current + value);
  }

  const handleProcent = () => {
    let procentValue = current / 100;
    setCurrent(procentValue);
  }

  const handlePlusMinus = () => {
    let pmValue = parseFloat(current) * -1;
    setCurrent(pmValue);
  }

  const handleAllClear = () => {
    setPrevious("");
    setCurrent("");
    setOperation("");
  }

  const chooseOperation = (el) => {
    if (current === "") return;

    if (previous !== "") {
      let value = compute();
      setPrevious(value);
    } else {
      setPrevious(current);
    }

    setCurrent("");
    setOperation(el.target.getAttribute("data"));
  }

  const equals = () => {
    let value = compute();
    if (value === undefined || value == null) return;

    setCurrent(value);
    setPrevious("");
    setOperation("");
  }

  const compute = () => {
    let result;
    let previousNumber = parseFloat(previous);
    let currentNumber = parseFloat(current);

    if (isNaN(previousNumber) || isNaN(currentNumber)) return;

    switch(operation) {
      case "÷":
        result = previousNumber / currentNumber;
        break;
      case "×":
        result = previousNumber * currentNumber;
        break;
      case "–":
        result = previousNumber - currentNumber;
        break;
      case "+":
        result = previousNumber + currentNumber;
        break;
      default:
        return;
    }

    return result;
  }

  return (
    <Container>
      <Screen>
        <Previous>{previous} {operation}</Previous>
        <Current>{current}</Current>
      </Screen>

      <Button onClick={handleAllClear} control>AC</Button>
      <Button onClick={handlePlusMinus} control>±</Button>
      <Button onClick={handleProcent} control>%</Button>
      <Button onClick={chooseOperation} data={"÷"} operation>÷</Button>

      <Button onClick={appendValue} data={"7"}>7</Button>
      <Button onClick={appendValue} data={"8"}>8</Button>
      <Button onClick={appendValue} data={"9"}>9</Button>
      <Button onClick={chooseOperation} data={"×"} operation>×</Button>

      <Button onClick={appendValue} data={"4"}>4</Button>
      <Button onClick={appendValue} data={"5"}>5</Button>
      <Button onClick={appendValue} data={"6"}>6</Button>
      <Button onClick={chooseOperation} data={"+"} operation>+</Button>

      <Button onClick={appendValue} data={"1"}>1</Button>
      <Button onClick={appendValue} data={"2"}>2</Button>
      <Button onClick={appendValue} data={"3"}>3</Button>
      <Button onClick={chooseOperation} data={"–"} operation>–</Button>

      <Button onClick={appendValue} data={"0"} gridSpan={2}>0</Button>
      <Button onClick={appendValue} data={"."} dot>●</Button>
      <Button onClick={equals} operation>=</Button>
    </Container>
  )
}
