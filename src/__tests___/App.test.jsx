import { render, screen } from '@testing-library/react';

import App from '../App';

describe('App', () => {
  it('renders headline', () => {
    render(<App title="React" />);

    screen.debug();

    // check if App components renders headline
  });
});



// Basic set up test

// import { describe, it, expect } from 'vitest';

// describe('something truthy and falsy', () => {
//   it('true to be true', () => {
//     expect(true).toBe(true);
//   });

//   it('false to be false', () => {
//     expect(false).toBe(false);
//   });
// });





// user event testing

// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import App from "../App";

// describe("App component", () => {
//   it("renders magnificent monkeys", () => {
//     // since screen does not have the container property, we'll destructure render to obtain a container for this test
//     const { container } = render(<App />);
//     expect(container).toMatchSnapshot();
//   });

//   it("renders radical rhinos after button click", async () => {
//     const user = userEvent.setup();

//     render(<App />);
//     const button = screen.getByRole("button", { name: "Click Me" });

//     await user.click(button);

//     expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
//   });
// });