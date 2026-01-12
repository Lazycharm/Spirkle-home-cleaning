"use client"

import { useState, useEffect } from "react"

export function useAdminData<T>(endpoint: string, defaultData: T) {
  const [data, setData] = useState<T>(defaultData)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchData()
  }, [endpoint])

  const fetchData = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(`/api/${endpoint}`)
      if (response.ok) {
        const result = await response.json()
        if (result.data) {
          setData(result.data)
        }
      }
    } catch (err: any) {
      setError(err.message)
      console.error(`Error fetching ${endpoint}:`, err)
    } finally {
      setIsLoading(false)
    }
  }

  const saveData = async (newData: T) => {
    try {
      setIsLoading(true)
      const response = await fetch(`/api/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newData),
      })
      if (response.ok) {
        const result = await response.json()
        setData(result.data || newData)
        return { success: true }
      } else {
        const error = await response.json()
        return { success: false, error: error.error }
      }
    } catch (err: any) {
      return { success: false, error: err.message }
    } finally {
      setIsLoading(false)
    }
  }

  const createItem = async (item: any) => {
    try {
      const response = await fetch(`/api/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      })
      if (response.ok) {
        const result = await response.json()
        await fetchData() // Refresh data
        return { success: true, data: result.data }
      } else {
        const error = await response.json()
        return { success: false, error: error.error }
      }
    } catch (err: any) {
      return { success: false, error: err.message }
    }
  }

  const updateItem = async (id: string, updates: any) => {
    try {
      const response = await fetch(`/api/${endpoint}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, ...updates }),
      })
      if (response.ok) {
        await fetchData() // Refresh data
        return { success: true }
      } else {
        const error = await response.json()
        return { success: false, error: error.error }
      }
    } catch (err: any) {
      return { success: false, error: err.message }
    }
  }

  const deleteItem = async (id: string) => {
    try {
      const response = await fetch(`/api/${endpoint}?id=${id}`, {
        method: "DELETE",
      })
      if (response.ok) {
        await fetchData() // Refresh data
        return { success: true }
      } else {
        const error = await response.json()
        return { success: false, error: error.error }
      }
    } catch (err: any) {
      return { success: false, error: err.message }
    }
  }

  return {
    data,
    isLoading,
    error,
    refetch: fetchData,
    saveData,
    createItem,
    updateItem,
    deleteItem,
  }
}
