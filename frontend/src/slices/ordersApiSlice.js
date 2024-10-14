import { apiSlice } from "./apiSlice.js";
import { ORDERS_URL } from "../constants.js";

export const orderApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createOrder: builder.mutation({
            query: (order) => ({
                url: ORDERS_URL,
                method: 'POST',
                body: {...order},
            }),
        }),
    }),
});

export const { useCreateOrderMutation } = orderApiSlice;