"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAdminData } from "@/lib/hooks/use-admin-data"
import { stepsConfig, type Step } from "@/config/how-it-works"
import { Plus, Trash2 } from "lucide-react"

export function HowItWorksForm({ onSave }: { onSave: () => void }) {
  const { data: stepsData, isLoading, createItem, updateItem, deleteItem } = useAdminData<any[]>("how-it-works", stepsConfig.map((s) => ({
    id: s.id,
    title: s.title,
    description: s.description,
    iconName: s.icon.name || "QrCode",
  })))
  const [steps, setSteps] = useState<Omit<Step, "icon"> & { iconName: string }[]>(
    stepsConfig.map((s) => ({
      id: s.id,
      title: s.title,
      description: s.description,
      iconName: s.icon.name || "QrCode",
    }))
  )

  useEffect(() => {
    if (stepsData) {
      setSteps(stepsData.map((s: any) => ({
        id: s.id,
        title: s.title,
        description: s.description,
        iconName: s.icon_name || s.iconName || "QrCode",
      })))
    }
  }, [stepsData])

  const addStep = async () => {
    const newStep = {
      title: "",
      description: "",
      icon_name: "QrCode",
      order_index: steps.length,
    }
    const result = await createItem(newStep)
    if (result.success) {
      onSave()
    }
  }

  const removeStep = async (id: string) => {
    const result = await deleteItem(id)
    if (result.success) {
      onSave()
    }
  }

  const updateStep = async (
    id: string,
    field: keyof Omit<Step, "icon"> | "iconName",
    value: string
  ) => {
    const updates = field === "iconName"
      ? { icon_name: value }
      : { [field]: value }
    const result = await updateItem(id, updates)
    if (result.success) {
      setSteps(steps.map((s) => (s.id === id ? { ...s, [field]: value } : s)))
    }
  }

  return (
    <div className="space-y-6">
      {steps.map((step) => (
        <div key={step.id} className="border rounded-lg p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">{step.title || "New Step"}</h3>
            <Button
              type="button"
              variant="destructive"
              size="sm"
              onClick={() => removeStep(step.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Title</Label>
              <Input
                value={step.title}
                onChange={(e) => updateStep(step.id, "title", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Icon Name</Label>
              <Input
                value={step.iconName}
                onChange={(e) => updateStep(step.id, "iconName", e.target.value)}
                placeholder="QrCode, MessageCircle, Sparkles"
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label>Description</Label>
              <Input
                value={step.description}
                onChange={(e) => updateStep(step.id, "description", e.target.value)}
              />
            </div>
          </div>
        </div>
      ))}

      <div className="flex gap-2">
        <Button type="button" variant="outline" onClick={addStep}>
          <Plus className="h-4 w-4 mr-2" />
          Add Step
        </Button>
        <Button disabled={isLoading}>
          {isLoading ? "Loading..." : "Changes saved automatically"}
        </Button>
      </div>
    </div>
  )
}
