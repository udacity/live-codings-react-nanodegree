import React from "react";
import { shallow } from "enzyme";
import If from "../If";

it("renders without crashing", () => {
  shallow(<If />);
});

it("testando o restante da condicional", () => {
  shallow(
    <If test={true}>
      <span>Test</span>
    </If>
  );
});
