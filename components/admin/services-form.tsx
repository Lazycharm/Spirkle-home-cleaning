"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAdminData } from "@/lib/hooks/use-admin-data"
import { servicesConfig, type Service } from "@/config/services"
import { Plus, Trash2 } from "lucide-react"

export function ServicesForm({ onSave }: { onSave: () => void }) {
  const { data: servicesData, isLoading, createItem, updateItem, deleteItem } = useAdminData<Service[]>("services", servicesConfig)
  const [services, setServices] = useState<Service[]>(servicesConfig)

  useEffect(() => {
    if (servicesData) {
      setServices(servicesData)
    }
  }, [servicesData])

  const addService = async () => {
    const newService = {
      title: "New Service",
      price: "AED 0",
      duration: "1 hour",
      image: "",
      features: [],
      order_index: services.length,
    }
    const result = await createItem(newService)
    if (result.success) {
      onSave()
    }
  }

  const removeService = async (id: string) => {
    const result = await deleteItem(id)
    if (result.success) {
      onSave()
    }
  }

  const updateService = async (id: string, field: keyof Service, value: any) => {
    const updates = { [field]: value }
    const result = await updateItem(id, updates)
    if (result.success) {
      setServices(services.map((s) => (s.id === id ? { ...s, [field]: value } : s)))
    }
  }

  const updateFeature = async (serviceId: string, featureIndex: number, value: string) => {
    const service = services.find((s) => s.id === serviceId)
    if (!service) return
    
    const newFeatures = [...service.features]
    newFeatures[featureIndex] = value
    const result = await updateItem(serviceId, { features: newFeatures })
    if (result.success) {
      setServices(
        services.map((s) => (s.id === serviceId ? { ...s, features: newFeatures } : s))
      )
    }
  }

  const addFeature = async (serviceId: string) => {
    const service = services.find((s) => s.id === serviceId)
    if (!service) return
    
    const newFeatures = [...service.features, ""]
    const result = await updateItem(serviceId, { features: newFeatures })
    if (result.success) {
      setServices(
        services.map((s) => (s.id === serviceId ? { ...s, features: newFeatures } : s))
      )
    }
  }

  const removeFeature = async (serviceId: string, featureIndex: number) => {
    const service = services.find((s) => s.id === serviceId)
    if (!service) return
    
    const newFeatures = service.features.filter((_, i) => i !== featureIndex)
    const result = await updateItem(serviceId, { features: newFeatures })
    if (result.success) {
      setServices(
        services.map((s) => (s.id === serviceId ? { ...s, features: newFeatures } : s))
      )
    }
  }

  return (
    <div className="space-y-6">
      {services.map((service) => (
        <div key={service.id} className="border rounded-lg p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">{service.title || "New Service"}</h3>
            <Button
              type="button"
              variant="destructive"
              size="sm"
              onClick={() => removeService(service.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Title</Label>
              <Input
                value={service.title}
                onChange={(e) => updateService(service.id, "title", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Price</Label>
              <Input
                value={service.price}
                onChange={(e) => updateService(service.id, "price", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Duration</Label>
              <Input
                value={service.duration}
                onChange={(e) => updateService(service.id, "duration", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Image Filename</Label>
              <Input
                value={service.image}
                onChange={(e) => updateService(service.id, "image", e.target.value)}
                placeholder="image.jpg"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Features</Label>
            {service.features.map((feature, index) => (
              <div key={index} className="flex gap-2">
                <Input
                  value={feature}
                  onChange={(e) => updateFeature(service.id, index, e.target.value)}
                />
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => removeFeature(service.id, index)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => addFeature(service.id)}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Feature
            </Button>
          </div>
        </div>
      ))}

      <div className="flex gap-2">
        <Button type="button" variant="outline" onClick={addService}>
          <Plus className="h-4 w-4 mr-2" />
          Add Service
        </Button>
        <Button disabled={isLoading}>
          {isLoading ? "Loading..." : "Changes saved automatically"}
        </Button>
      </div>
    </div>
  )
}
