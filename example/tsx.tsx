// @ts-ignore
import React from "react";

interface MyButtonProps {
  color: string;
}

class MyButton extends React.Component<MyButtonProps> {
  render() {
    return <button>{this.props.color}</button>;
  }
}


const MyButton: React.FC<MyButtonProps> = () => <button>Click me</button>;

export default function jsx() {
  return (
    <>
      <div>123123</div>
      <MyButton />
    </>
  );
}
