"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAdminData } from "@/lib/hooks/use-admin-data"
import { trustPointsConfig, type TrustPoint } from "@/config/trust"
import { Plus, Trash2 } from "lucide-react"

export function TrustForm({ onSave }: { onSave: () => void }) {
  const { data: trustData, isLoading, createItem, updateItem, deleteItem } = useAdminData<any[]>("trust", trustPointsConfig.map((t) => ({
    id: t.id,
    title: t.title,
    description: t.description,
    iconName: t.icon.name || "UserCheck",
  })))
  const [trustPoints, setTrustPoints] = useState<
    Omit<TrustPoint, "icon"> & { iconName: string }[]
  >(
    trustPointsConfig.map((t) => ({
      id: t.id,
      title: t.title,
      description: t.description,
      iconName: t.icon.name || "UserCheck",
    }))
  )

  useEffect(() => {
    if (trustData) {
      setTrustPoints(trustData.map((t: any) => ({
        id: t.id,
        title: t.title,
        description: t.description,
        iconName: t.icon_name || t.iconName || "UserCheck",
      })))
    }
  }, [trustData])

  const addTrustPoint = async () => {
    const newTrustPoint = {
      title: "",
      description: "",
      icon_name: "UserCheck",
      order_index: trustPoints.length,
    }
    const result = await createItem(newTrustPoint)
    if (result.success) {
      onSave()
    }
  }

  const removeTrustPoint = async (id: string) => {
    const result = await deleteItem(id)
    if (result.success) {
      onSave()
    }
  }

  const updateTrustPoint = async (
    id: string,
    field: keyof Omit<TrustPoint, "icon"> | "iconName",
    value: string
  ) => {
    const updates = field === "iconName"
      ? { icon_name: value }
      : { [field]: value }
    const result = await updateItem(id, updates)
    if (result.success) {
      setTrustPoints(trustPoints.map((t) => (t.id === id ? { ...t, [field]: value } : t)))
    }
  }

  return (
    <div className="space-y-6">
      {trustPoints.map((trustPoint) => (
        <div key={trustPoint.id} className="border rounded-lg p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">
              {trustPoint.title || "New Trust Point"}
            </h3>
            <Button
              type="button"
              variant="destructive"
              size="sm"
              onClick={() => removeTrustPoint(trustPoint.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Title</Label>
              <Input
                value={trustPoint.title}
                onChange={(e) =>
                  updateTrustPoint(trustPoint.id, "title", e.target.value)
                }
              />
            </div>
            <div className="space-y-2">
              <Label>Icon Name</Label>
              <Input
                value={trustPoint.iconName}
                onChange={(e) =>
                  updateTrustPoint(trustPoint.id, "iconName", e.target.value)
                }
                placeholder="UserCheck, Users, Lock, Leaf, ShieldCheck, Heart"
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label>Description</Label>
              <Input
                value={trustPoint.description}
                onChange={(e) =>
                  updateTrustPoint(trustPoint.id, "description", e.target.value)
                }
              />
            </div>
          </div>
        </div>
      ))}

      <div className="flex gap-2">
        <Button type="button" variant="outline" onClick={addTrustPoint}>
          <Plus className="h-4 w-4 mr-2" />
          Add Trust Point
        </Button>
        <Button disabled={isLoading}>
          {isLoading ? "Loading..." : "Changes saved automatically"}
        </Button>
      </div>
    </div>
  )
}
