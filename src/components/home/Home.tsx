import image from "../../../public/papeldeparede1.png"

function Component() {
  return (
    <div style={{ backgroundImage:`url(${image})` }}>
      Hello World
    </div>
  );
}

export { Component };