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
import { ArrowRight, Mail, Calendar, CheckCircle, Star, CreditCard } from "lucide-react"
import PaymentForm from "@/components/payment-form"
import CalendlyWidget from "@/components/calendly-widget"

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    gradeLevel: "",
    packageType: "",
    interests: [] as string[],
    academicGoals: "",
    hearAbout: "",
    additionalInfo: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error' | 'validation-error' | 'payment' | 'payment-success'>('idle')
  const [validationErrors, setValidationErrors] = useState<string[]>([])
  const [errorMessage, setErrorMessage] = useState('')
  const [showPayment, setShowPayment] = useState(false)

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      interests: checked ? [...prev.interests, interest] : prev.interests.filter((i) => i !== interest),
    }))
  }

  const validateForm = () => {
    const errors: string[] = []
    
    if (!formData.fullName.trim()) {
      errors.push("Full Name is required")
    }
    
    if (!formData.email.trim()) {
      errors.push("Email Address is required")
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.push("Please enter a valid email address")
    }
    
    if (!formData.phone.trim()) {
      errors.push("Phone Number is required")
    }
    
    if (!formData.gradeLevel) {
      errors.push("Grade Level is required")
    }
    
    if (!formData.packageType) {
      errors.push("Package selection is required")
    }
    
    return errors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form
    const errors = validateForm()
    if (errors.length > 0) {
      setValidationErrors(errors)
      setSubmitStatus('validation-error')
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setValidationErrors([])
    setErrorMessage('')
    
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      const result = await response.json()
      
      if (response.ok) {
        setSubmitStatus('success')
        // Reset form after successful submission
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          gradeLevel: "",
          packageType: "",
          interests: [],
          academicGoals: "",
          hearAbout: "",
          additionalInfo: "",
        })
      } else {
        setSubmitStatus('error')
        setErrorMessage(result.error || 'Failed to submit signup')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handlePaymentSuccess = () => {
    setSubmitStatus('payment-success')
    setShowPayment(false)
    // Reset form after successful payment
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      gradeLevel: "",
      packageType: "",
      interests: [],
      academicGoals: "",
      hearAbout: "",
      additionalInfo: "",
    })
  }

  const handlePaymentError = (error: string) => {
    setSubmitStatus('error')
    setErrorMessage(error)
    setShowPayment(false)
  }

  return (
    <div className="min-h-screen page-gradient">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-amber-600 text-white border-amber-600 px-4 py-2 text-sm font-semibold shadow-md">
              <Star className="h-4 w-4 mr-1" />
              Guaranteed UT Austin Admission!
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Sign Up for
              <span className="text-amber-600"> College Consult</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-700 mb-12 leading-relaxed max-w-3xl mx-auto">
              Take the first step toward your dream college. Choose your package and let's start building your path to success together.
            </p>
          </div>
        </div>
      </section>

      {/* Signup Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Package Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">Your Investment in Success</h2>
                  <p className="text-lg text-slate-600 mb-8">
                    Choose the package that best fits your needs and start your journey toward college success.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Mail className="h-6 w-6 text-amber-600" />
                      <span className="text-slate-700">colllegeconsult@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Calendar className="h-6 w-6 text-amber-600" />
                      <span className="text-slate-700">Free 1-hour consultation included</span>
                    </div>
                  </div>
                </div>

                <Card className="border border-amber-200 bg-amber-50 p-6">
                  <h3 className="font-bold text-slate-900 mb-4">Package Options:</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-1" />
                      <div>
                        <div className="font-semibold text-slate-900">Starter Package - $300</div>
                        <div className="text-slate-700 text-sm">5 hours of consulting + EC network access</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-1" />
                      <div>
                        <div className="font-semibold text-slate-900">Premium Package - $450</div>
                        <div className="text-slate-700 text-sm">10 hours of consulting + priority EC access</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-1" />
                      <div>
                        <div className="font-semibold text-slate-900">Additional Hours - $50 each</div>
                        <div className="text-slate-700 text-sm">Extended support when you need it</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Form */}
              <Card className="border-2 border-amber-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900">Sign Up Now</CardTitle>
                  <CardDescription className="text-slate-600">
                    Fill out the form below to get started with your chosen package
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
                      <Label htmlFor="phone" className="text-slate-900 font-medium">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                        className="border-slate-300 focus:border-amber-600 focus:ring-amber-600"
                        placeholder="(555) 123-4567"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="gradeLevel" className="text-slate-900 font-medium">
                        Grade Level *
                      </Label>
                      <Select 
                        value={formData.gradeLevel}
                        onValueChange={(value) => setFormData((prev) => ({ ...prev, gradeLevel: value }))}
                      >
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

                    <div className="space-y-2">
                      <Label htmlFor="packageType" className="text-slate-900 font-medium">
                        Choose Your Package *
                      </Label>
                      <Select 
                        value={formData.packageType}
                        onValueChange={(value) => setFormData((prev) => ({ ...prev, packageType: value }))}
                      >
                        <SelectTrigger className="border-slate-300 focus:border-amber-600">
                          <SelectValue placeholder="Select your package" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="starter">Starter Package - $300 (5 hours)</SelectItem>
                          <SelectItem value="premium">Premium Package - $450 (10 hours)</SelectItem>
                          <SelectItem value="ram-test">Ram Test - $1</SelectItem>
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
                          "SAT/ACT Test Prep",
                          "Essay Writing Support",
                          "Interview Preparation",
                          "Scholarship Applications",
                          "General College Process Questions",
                          "Other (Please specify below)",
                        ].map((interest) => (
                          <div key={interest} className="flex items-center space-x-3">
                            <Checkbox
                              id={interest}
                              checked={formData.interests.includes(interest)}
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
                        Tell us about your academic interests and college goals
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

                    <div className="space-y-2">
                      <Label htmlFor="additionalInfo" className="text-slate-900 font-medium">
                        Additional Information
                      </Label>
                      <Textarea
                        id="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={(e) => setFormData((prev) => ({ ...prev, additionalInfo: e.target.value }))}
                        className="border-slate-300 focus:border-amber-600 focus:ring-amber-600 min-h-[100px]"
                        placeholder="Any additional information you'd like to share..."
                      />
                    </div>

                    {submitStatus === 'validation-error' && (
                      <div className="p-4 bg-red-100 border border-red-300 rounded-lg text-red-800 mb-4">
                        <p className="font-semibold mb-2">❌ Please fix the following errors:</p>
                        <ul className="list-disc list-inside space-y-1">
                          {validationErrors.map((error, index) => (
                            <li key={index}>{error}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {submitStatus === 'success' && (
                      <div className="p-4 bg-green-100 border border-green-300 rounded-lg text-green-800 mb-4">
                        ✅ Thank you for submitting your information! Please proceed to payment and scheduling below.
                      </div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <div className="p-4 bg-red-100 border border-red-300 rounded-lg text-red-800 mb-4">
                        ❌ {errorMessage}
                      </div>
                    )}
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-amber-400 text-white font-bold py-3 text-lg rounded-lg"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Information'} 
                      {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                    </Button>
                  </form>
                </CardContent>
              </Card>
              
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Integration Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Schedule Your Free Consultation</h2>
              <p className="text-xl text-slate-600">Ready to get started? Pick a time that works best for you and let's discuss your college goals.</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Calendly Widget */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <CalendlyWidget 
                  url="https://calendly.com/colllegeconsult/30min"
                  height={700}
                  minWidth={320}
                />
              </div>
              
              {/* Payment Form */}
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Complete Your Payment</h3>
                  <p className="text-slate-600">Secure your consultation package to get started with your college journey.</p>
                </div>
                
                <PaymentForm
                  formData={formData}
                  onPaymentSuccess={handlePaymentSuccess}
                  onPaymentError={handlePaymentError}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}