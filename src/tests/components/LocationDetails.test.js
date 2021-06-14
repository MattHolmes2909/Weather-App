import React from "react";
import { render } from "@testing-library/react";
import LocationDetails from "../../components/LocationDetails";

describe("LocationDetails", () => {
    it('renders the correct city and country props', () => {
        const { getByText } = render(
            <LocationDetails city="Liverpool" country="UK" />
        );

        expect(getByText("Liverpool, UK")).toHaveClass("location-details");
    });
});