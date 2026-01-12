"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { useAdminData } from "@/lib/hooks/use-admin-data"
import { pricingPlansConfig, type PricingPlan } from "@/config/pricing"
import { Plus, Trash2 } from "lucide-react"

export function PricingForm({ onSave }: { onSave: () => void }) {
  const { data: plansData, isLoading, createItem, updateItem, deleteItem } = useAdminData<PricingPlan[]>("pricing", pricingPlansConfig)
  const [plans, setPlans] = useState<PricingPlan[]>(pricingPlansConfig)

  useEffect(() => {
    if (plansData) {
      setPlans(plansData)
    }
  }, [plansData])

  const addPlan = async () => {
    const newPlan = {
      title: "New Plan",
      frequency: "1 visit/month",
      discount: "0% OFF",
      description: "",
      highlight: false,
      order_index: plans.length,
    }
    const result = await createItem(newPlan)
    if (result.success) {
      onSave()
    }
  }

  const removePlan = async (id: string) => {
    const result = await deleteItem(id)
    if (result.success) {
      onSave()
    }
  }

  const updatePlan = async (id: string, field: keyof PricingPlan, value: any) => {
    const result = await updateItem(id, { [field]: value })
    if (result.success) {
      setPlans(plans.map((p) => (p.id === id ? { ...p, [field]: value } : p)))
    }
  }

  return (
    <div className="space-y-6">
      {plans.map((plan) => (
        <div key={plan.id} className="border rounded-lg p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">{plan.title}</h3>
            <Button
              type="button"
              variant="destructive"
              size="sm"
              onClick={() => removePlan(plan.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Title</Label>
              <Input
                value={plan.title}
                onChange={(e) => updatePlan(plan.id, "title", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Frequency</Label>
              <Input
                value={plan.frequency}
                onChange={(e) => updatePlan(plan.id, "frequency", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Discount</Label>
              <Input
                value={plan.discount}
                onChange={(e) => updatePlan(plan.id, "discount", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Badge (optional)</Label>
              <Input
                value={plan.badge || ""}
                onChange={(e) => updatePlan(plan.id, "badge", e.target.value)}
                placeholder="e.g., Best Value"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea
              value={plan.description}
              onChange={(e) => updatePlan(plan.id, "description", e.target.value)}
              rows={2}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id={`highlight-${plan.id}`}
              checked={plan.highlight}
              onCheckedChange={(checked) =>
                updatePlan(plan.id, "highlight", checked)
              }
            />
            <Label htmlFor={`highlight-${plan.id}`} className="cursor-pointer">
              Highlight this plan (Best Value)
            </Label>
          </div>
        </div>
      ))}

      <div className="flex gap-2">
        <Button type="button" variant="outline" onClick={addPlan}>
          <Plus className="h-4 w-4 mr-2" />
          Add Plan
        </Button>
        <Button disabled={isLoading}>
          {isLoading ? "Loading..." : "Changes saved automatically"}
        </Button>
      </div>
    </div>
  )
}
