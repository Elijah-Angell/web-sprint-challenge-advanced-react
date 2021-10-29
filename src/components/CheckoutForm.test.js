import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />);
});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm />)

    const firstNameInput = screen.getByLabelText(/firstName:/i);

    userEvent.type(firstNameInput, "Noctis");

    const lastNameInput = screen.getByLabelText(/lastName:/i);
    userEvent.type(lastNameInput, "Sora");

    const addressInput = screen.getByLabelText(/address:/i);

    userEvent.type(addressInput, "Bob ross street");

    const cityInput = screen.getByLabelText(/city:/i);

    userEvent.type(cityInput, "kojima");

    const stateInput = screen.getByLabelText(/state:/i);

    userEvent.type(stateInput, "Snake");

    const zipInput = screen.getByLabelText(/zip:/i);

    userEvent.type(zipInput, "45680");

    const button = screen.getByRole("button");
    userEvent.click(button)

});
