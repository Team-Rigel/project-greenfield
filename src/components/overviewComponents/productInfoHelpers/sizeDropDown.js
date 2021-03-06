import React from "react";
import { Form } from "react-bootstrap";

const SizeDropDown = ({ style, changeHandler, sizeSelected }) => {
  let inStockSizes = [];

  for (let size in style.skus) {
    if (style.skus[size] > 0) {
      inStockSizes.push(size);
    }
  }

  if (inStockSizes.length === 0) {
    inStockSizes.push("Out of Stock");
  }

  return (
    <div id='size-selector-click'>
      <Form className="size-selector-switch">
        <Form.Group>
          <Form.Control as="select" id="size" onChange={changeHandler}>
            {sizeSelected ? null : <option selected disabled>Size</option>}
            {inStockSizes.map((size, i) => {
              return (
                <option value={size} key={i}>
                  {size}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
};

export default SizeDropDown;
