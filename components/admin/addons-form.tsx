"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { addonsConfig, type Addon } from "@/config/addons"
import { useAdminData } from "@/lib/hooks/use-admin-data"
import { Plus, Trash2 } from "lucide-react"

export function AddonsForm({ onSave }: { onSave: () => void }) {
  const { data: addonsData, isLoading, createItem, updateItem, deleteItem } = useAdminData<any[]>("addons", addonsConfig.map((a) => ({
    id: a.id,
    title: a.title,
    price: a.price,
    description: a.description,
    iconName: a.icon.name || "Refrigerator",
  })))
  const [addons, setAddons] = useState<Omit<Addon, "icon"> & { iconName: string }[]>(
    addonsConfig.map((a) => ({
      id: a.id,
      title: a.title,
      price: a.price,
      description: a.description,
      iconName: a.icon.name || "Refrigerator",
    }))
  )

  useEffect(() => {
    if (addonsData) {
      setAddons(addonsData.map((a: any) => ({
        id: a.id,
        title: a.title,
        price: a.price,
        description: a.description,
        iconName: a.icon_name || a.iconName || "Refrigerator",
      })))
    }
  }, [addonsData])

  const addAddon = async () => {
    const newAddon = {
      title: "New Addon",
      price: "+AED 0",
      description: "",
      icon_name: "Refrigerator",
      order_index: addons.length,
    }
    const result = await createItem(newAddon)
    if (result.success) {
      onSave()
    }
  }

  const removeAddon = async (id: string) => {
    const result = await deleteItem(id)
    if (result.success) {
      onSave()
    }
  }

  const updateAddon = async (
    id: string,
    field: keyof Omit<Addon, "icon"> | "iconName",
    value: any
  ) => {
    const updates = field === "iconName" 
      ? { icon_name: value }
      : { [field]: value }
    const result = await updateItem(id, updates)
    if (result.success) {
      setAddons(addons.map((a) => (a.id === id ? { ...a, [field]: value } : a)))
    }
  }

  return (
    <div className="space-y-6">
      {addons.map((addon) => (
        <div key={addon.id} className="border rounded-lg p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">{addon.title}</h3>
            <Button
              type="button"
              variant="destructive"
              size="sm"
              onClick={() => removeAddon(addon.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Title</Label>
              <Input
                value={addon.title}
                onChange={(e) => updateAddon(addon.id, "title", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Price</Label>
              <Input
                value={addon.price}
                onChange={(e) => updateAddon(addon.id, "price", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Description</Label>
              <Input
                value={addon.description}
                onChange={(e) => updateAddon(addon.id, "description", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Icon Name</Label>
              <Input
                value={addon.iconName}
                onChange={(e) => updateAddon(addon.id, "iconName", e.target.value)}
                placeholder="Refrigerator, Flame, Sun, Shirt"
              />
            </div>
          </div>
        </div>
      ))}

      <div className="flex gap-2">
        <Button type="button" variant="outline" onClick={addAddon}>
          <Plus className="h-4 w-4 mr-2" />
          Add Addon
        </Button>
        <Button disabled={isLoading}>
          {isLoading ? "Loading..." : "Changes saved automatically"}
        </Button>
      </div>
    </div>
  )
}
