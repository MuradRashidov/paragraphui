"use client"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { PropsWithChildren } from 'react'

type Props = PropsWithChildren;
const Providers = ({ children }: Props) => {
    const client = new QueryClient();
    return (
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>
    )
}

export default Providers