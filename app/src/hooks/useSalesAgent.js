import { useState, useCallback } from 'react';

const useSalesAgent = () => {
    const respond = useCallback((input) => {
        const lowerInput = input.toLowerCase();

        if (lowerInput.includes("menu")) {
            return {
                type: "product",
                product: {
                    name: "Broiler Combo",
                    price: "KES 350",
                    image: "/chicken.jpg" // Placeholder path, might need a real URL if local doesn't exist
                }
            };
        }

        return {
            type: "text",
            message: "Sawa, unataka nini?"
        };
    }, []);

    return { respond };
};

export default useSalesAgent;
