'use client'

import { ApiClient } from "@/services/apiClient";
import useSWR from "swr";

export function FetchInfractionsFirstInstance<Data = any, Error = any>(url: string, date: string) {

    const { data, error, isLoading } = useSWR<Data>(url, async () => {
        const response = await ApiClient.get(`${url}?data=${date}`);

        return response.data;
    })

    return { data, error, isLoading }

}

export function FetchData<Data = any, Error = any>(url: string) {

    const { data, error } = useSWR<Data>(url, async () => {
        const response = await ApiClient.get(url)
        return response.data
    })

    return { data, error }
}