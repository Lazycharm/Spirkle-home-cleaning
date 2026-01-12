"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useAdminData } from "@/lib/hooks/use-admin-data"
import { testimonialsConfig, type Testimonial } from "@/config/testimonials"
import { Plus, Trash2 } from "lucide-react"

export function TestimonialsForm({ onSave }: { onSave: () => void }) {
  const { data: testimonialsData, isLoading, createItem, updateItem, deleteItem } = useAdminData<Testimonial[]>("testimonials", testimonialsConfig)
  const [testimonials, setTestimonials] = useState<Testimonial[]>(testimonialsConfig)

  useEffect(() => {
    if (testimonialsData) {
      setTestimonials(testimonialsData)
    }
  }, [testimonialsData])

  const addTestimonial = async () => {
    const newTestimonial = {
      name: "",
      location: "",
      avatar: "",
      text: "",
      order_index: testimonials.length,
    }
    const result = await createItem(newTestimonial)
    if (result.success) {
      onSave()
    }
  }

  const removeTestimonial = async (id: string) => {
    const result = await deleteItem(id)
    if (result.success) {
      onSave()
    }
  }

  const updateTestimonial = async (id: string, field: keyof Testimonial, value: string) => {
    const result = await updateItem(id, { [field]: value })
    if (result.success) {
      setTestimonials(testimonials.map((t) => (t.id === id ? { ...t, [field]: value } : t)))
    }
  }

  return (
    <div className="space-y-6">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="border rounded-lg p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">
              {testimonial.name || "New Testimonial"}
            </h3>
            <Button
              type="button"
              variant="destructive"
              size="sm"
              onClick={() => removeTestimonial(testimonial.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Name</Label>
              <Input
                value={testimonial.name}
                onChange={(e) =>
                  updateTestimonial(testimonial.id, "name", e.target.value)
                }
              />
            </div>
            <div className="space-y-2">
              <Label>Location</Label>
              <Input
                value={testimonial.location}
                onChange={(e) =>
                  updateTestimonial(testimonial.id, "location", e.target.value)
                }
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label>Avatar Filename</Label>
              <Input
                value={testimonial.avatar}
                onChange={(e) =>
                  updateTestimonial(testimonial.id, "avatar", e.target.value)
                }
                placeholder="image.jpg"
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label>Testimonial Text</Label>
              <Textarea
                value={testimonial.text}
                onChange={(e) =>
                  updateTestimonial(testimonial.id, "text", e.target.value)
                }
                rows={4}
              />
            </div>
          </div>
        </div>
      ))}

      <div className="flex gap-2">
        <Button type="button" variant="outline" onClick={addTestimonial}>
          <Plus className="h-4 w-4 mr-2" />
          Add Testimonial
        </Button>
        <Button disabled={isLoading}>
          {isLoading ? "Loading..." : "Changes saved automatically"}
        </Button>
      </div>
    </div>
  )
}
