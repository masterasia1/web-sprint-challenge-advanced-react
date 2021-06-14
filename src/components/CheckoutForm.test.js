import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import CheckoutForm from "./CheckoutForm";


// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
    const header = screen.getByText(/checkout form/i);
    expect(header).toBeInTheDocument();
});





test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);
    const {getByLabelText} = screen;
    const first = getByLabelText(/first name/i)
    userEvent.type(first, "Asia");
    const button = screen.getByRole("button");
    userEvent.click(button);
    const message = screen.getByText(/You have ordered some plants!/i);
    expect(message).toBeInTheDocument();
});
