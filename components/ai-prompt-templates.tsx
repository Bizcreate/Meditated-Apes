"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Plus, Save, Trash2, Edit, Check } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AIPromptTemplates() {
  const [templates, setTemplates] = useState([
    {
      id: 1,
      name: "Stress Relief",
      prompt:
        "Create a meditation focused on releasing stress and tension from the body and mind. Guide the listener through deep breathing and progressive relaxation.",
    },
    {
      id: 2,
      name: "Abundance & Gratitude",
      prompt:
        "Generate a meditation centered on cultivating feelings of abundance and gratitude. Help the listener recognize the wealth of blessings in their life.",
    },
    {
      id: 3,
      name: "Deep Sleep",
      prompt:
        "Craft a meditation designed to prepare the mind and body for restful sleep. Include visualization of peaceful scenes and gentle body relaxation.",
    },
  ])

  const [newTemplate, setNewTemplate] = useState({ name: "", prompt: "" })
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editForm, setEditForm] = useState({ name: "", prompt: "" })

  const handleAddTemplate = () => {
    if (newTemplate.name && newTemplate.prompt) {
      setTemplates([...templates, { id: Date.now(), ...newTemplate }])
      setNewTemplate({ name: "", prompt: "" })
    }
  }

  const handleDeleteTemplate = (id: number) => {
    setTemplates(templates.filter((template) => template.id !== id))
  }

  const startEditing = (template: { id: number; name: string; prompt: string }) => {
    setEditingId(template.id)
    setEditForm({ name: template.name, prompt: template.prompt })
  }

  const saveEdit = () => {
    if (editingId && editForm.name && editForm.prompt) {
      setTemplates(
        templates.map((template) =>
          template.id === editingId ? { ...template, name: editForm.name, prompt: editForm.prompt } : template,
        ),
      )
      setEditingId(null)
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {templates.map((template) => (
          <Card key={template.id} className="bg-white/5 border-white/10 text-white">
            <CardContent className="p-4">
              {editingId === template.id ? (
                <div className="space-y-3">
                  <Input
                    value={editForm.name}
                    onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                    className="bg-white/10 border-white/20 text-white"
                    placeholder="Template name"
                  />
                  <Textarea
                    value={editForm.prompt}
                    onChange={(e) => setEditForm({ ...editForm, prompt: e.target.value })}
                    className="bg-white/10 border-white/20 text-white min-h-[100px]"
                    placeholder="Prompt template"
                  />
                  <div className="flex justify-end space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white/10 text-white hover:bg-white/10"
                      onClick={() => setEditingId(null)}
                    >
                      Cancel
                    </Button>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
                      onClick={saveEdit}
                    >
                      <Check className="mr-1 h-4 w-4" />
                      Save
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-lg">{template.name}</h4>
                    <div className="flex space-x-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-white/60 hover:text-white hover:bg-white/10"
                        onClick={() => startEditing(template)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-white/60 hover:text-rose-400 hover:bg-rose-500/10"
                        onClick={() => handleDeleteTemplate(template.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm">{template.prompt}</p>
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-white/5 border border-white/10 rounded-xl p-4 mt-6">
        <h4 className="font-medium text-lg mb-3">Add New Template</h4>
        <div className="space-y-3">
          <Input
            value={newTemplate.name}
            onChange={(e) => setNewTemplate({ ...newTemplate, name: e.target.value })}
            className="bg-white/10 border-white/20 text-white"
            placeholder="Template name (e.g., Focus & Clarity)"
          />
          <Textarea
            value={newTemplate.prompt}
            onChange={(e) => setNewTemplate({ ...newTemplate, prompt: e.target.value })}
            className="bg-white/10 border-white/20 text-white min-h-[100px]"
            placeholder="Write your prompt template here. Be specific about the meditation style, tone, and elements to include."
          />
          <div className="flex justify-end">
            <Button
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
              onClick={handleAddTemplate}
              disabled={!newTemplate.name || !newTemplate.prompt}
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Template
            </Button>
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
          <Save className="mr-2 h-4 w-4" />
          Save All Templates
        </Button>
      </div>
    </div>
  )
}
