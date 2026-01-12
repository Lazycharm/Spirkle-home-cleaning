"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useAdminData } from "@/lib/hooks/use-admin-data"
import { faqsConfig, type FAQ } from "@/config/faq"
import { Plus, Trash2 } from "lucide-react"

export function FaqForm({ onSave }: { onSave: () => void }) {
  const { data: faqsData, isLoading, createItem, updateItem, deleteItem } = useAdminData<FAQ[]>("faqs", faqsConfig)
  const [faqs, setFaqs] = useState<FAQ[]>(faqsConfig)

  useEffect(() => {
    if (faqsData) {
      setFaqs(faqsData)
    }
  }, [faqsData])

  const addFaq = async () => {
    const newFaq = {
      question: "",
      answer: "",
      order_index: faqs.length,
    }
    const result = await createItem(newFaq)
    if (result.success) {
      onSave()
    }
  }

  const removeFaq = async (id: string) => {
    const result = await deleteItem(id)
    if (result.success) {
      onSave()
    }
  }

  const updateFaq = async (id: string, field: keyof FAQ, value: string) => {
    const result = await updateItem(id, { [field]: value })
    if (result.success) {
      setFaqs(faqs.map((f) => (f.id === id ? { ...f, [field]: value } : f)))
    }
  }

  return (
    <div className="space-y-6">
      {faqs.map((faq) => (
        <div key={faq.id} className="border rounded-lg p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">FAQ #{faqs.indexOf(faq) + 1}</h3>
            <Button
              type="button"
              variant="destructive"
              size="sm"
              onClick={() => removeFaq(faq.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Question</Label>
              <Input
                value={faq.question}
                onChange={(e) => updateFaq(faq.id, "question", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Answer</Label>
              <Textarea
                value={faq.answer}
                onChange={(e) => updateFaq(faq.id, "answer", e.target.value)}
                rows={4}
              />
            </div>
          </div>
        </div>
      ))}

      <div className="flex gap-2">
        <Button type="button" variant="outline" onClick={addFaq}>
          <Plus className="h-4 w-4 mr-2" />
          Add FAQ
        </Button>
        <Button disabled={isLoading}>
          {isLoading ? "Loading..." : "Changes saved automatically"}
        </Button>
      </div>
    </div>
  )
}
