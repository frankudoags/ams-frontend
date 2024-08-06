"use client";
import { Toaster } from "@/components/ui/toaster"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import * as faceapi from 'face-api.js';

export const queryClient = new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } });

export default function ReactQueryProvider({ children }: {
    children: React.ReactNode;
}) {
    useEffect(() => {
        const loadModels = async () => {
            const MODEL_URL = '/models';
            await faceapi.loadTinyFaceDetectorModel(MODEL_URL);
        };

        loadModels();
    });

    return (
        <QueryClientProvider client={queryClient}>
            <Toaster />
            {children}
        </QueryClientProvider>
    );
}
