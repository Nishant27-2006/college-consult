"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Mail, Calendar, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    gradeLevel: "",
    interests: [] as string[],
    academicGoals: "",
    hearAbout: "",
  })

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      interests: checked ? [...prev.interests, interest] : prev.interests.filter((i) => i !== interest),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-amber-100 text-amber-800 border-amber-200 px-4 py-2 text-sm font-semibold">
              🚀 Ready to Get Started?
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Get Started with
              <span className="text-amber-600"> College Consult</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-700 mb-12 leading-relaxed max-w-3xl mx-auto">
              We're excited to help you achieve your college dreams! Fill out the form below, and we'll get in touch to
              discuss how College Consult can support your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">Let's Connect</h2>
                  <p className="text-lg text-slate-600 mb-8">
                    Ready to transform your college application journey? We're here to help you every step of the way.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Mail className="h-6 w-6 text-amber-600" />
                      <span className="text-slate-700">nishantg2706@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Calendar className="h-6 w-6 text-amber-600" />
                      <span className="text-slate-700">Free 30-minute consultation available</span>
                    </div>
                  </div>
                </div>

                <Card className="border border-slate-200 bg-slate-50 p-6">
                  <h3 className="font-bold text-slate-900 mb-4">What to Expect:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-1" />
                      <span className="text-slate-700">Response within 24 hours</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-1" />
                      <span className="text-slate-700">Personalized consultation call</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-1" />
                      <span className="text-slate-700">Customized strategy recommendations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-1" />
                      <span className="text-slate-700">No obligation to continue</span>
                    </li>
                  </ul>
                </Card>
              </div>

              {/* Form */}
              <Card className="border-2 border-slate-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900">Start Your Journey</CardTitle>
                  <CardDescription className="text-slate-600">
                    Tell us about yourself and your college goals
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-slate-900 font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))}
                        className="border-slate-300 focus:border-amber-600 focus:ring-amber-600"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-900 font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                        className="border-slate-300 focus:border-amber-600 focus:ring-amber-600"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="gradeLevel" className="text-slate-900 font-medium">
                        Grade Level *
                      </Label>
                      <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, gradeLevel: value }))}>
                        <SelectTrigger className="border-slate-300 focus:border-amber-600">
                          <SelectValue placeholder="Select your current grade" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="freshman">High School Freshman</SelectItem>
                          <SelectItem value="sophomore">High School Sophomore</SelectItem>
                          <SelectItem value="junior">High School Junior</SelectItem>
                          <SelectItem value="senior">High School Senior</SelectItem>
                          <SelectItem value="gap">Gap Year Student</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label className="text-slate-900 font-medium">
                        What are you most interested in receiving help with? (Select all that apply)
                      </Label>
                      <div className="space-y-3">
                        {[
                          "Extracurricular Strategy",
                          "College Application Brainstorming",
                          "General College Process Questions",
                          "Other (Please specify below)",
                        ].map((interest) => (
                          <div key={interest} className="flex items-center space-x-3">
                            <Checkbox
                              id={interest}
                              onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                              className="border-slate-400 data-[state=checked]:bg-amber-600 data-[state=checked]:border-amber-600"
                            />
                            <Label htmlFor={interest} className="text-slate-700">
                              {interest}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="academicGoals" className="text-slate-900 font-medium">
                        Tell us a little bit about your academic interests and college goals
                      </Label>
                      <Textarea
                        id="academicGoals"
                        value={formData.academicGoals}
                        onChange={(e) => setFormData((prev) => ({ ...prev, academicGoals: e.target.value }))}
                        className="border-slate-300 focus:border-amber-600 focus:ring-amber-600 min-h-[120px]"
                        placeholder="Share your academic interests, target schools, intended major, or any specific goals..."
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="hearAbout" className="text-slate-900 font-medium">
                        How did you hear about College Consult?
                      </Label>
                      <Input
                        id="hearAbout"
                        value={formData.hearAbout}
                        onChange={(e) => setFormData((prev) => ({ ...prev, hearAbout: e.target.value }))}
                        className="border-slate-300 focus:border-amber-600 focus:ring-amber-600"
                        placeholder="Social media, friend referral, search engine, etc."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 text-lg rounded-lg"
                    >
                      Submit Application <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
