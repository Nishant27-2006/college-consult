"use client"

import type React from "react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, CheckCircle, ArrowRight, Lightbulb } from "lucide-react"

export default function CollegeConsultPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    gradeLevel: "",
    interests: [],
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
  }

  return (
    <div className="min-h-screen page-gradient">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-amber-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gradient-to-r from-amber-100 to-amber-50 text-amber-800 border-amber-200 px-4 py-2 text-sm font-semibold shadow-sm">
              🎓 Elite College Admissions Consulting
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Transform Your College
              <span className="text-amber-600"> Dreams Into Reality</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-700 mb-12 leading-relaxed max-w-3xl mx-auto">
              Get personalized guidance from students who conquered the most competitive admissions processes. We don't
              just help you apply—we help you <strong>stand out</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-slate-300 text-slate-700 hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 px-8 py-4 text-lg font-semibold rounded-lg bg-white/50 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Why Choose <span className="text-amber-600">College Consult</span>?
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              We're not your typical consulting firm. We're recent graduates who just navigated the exact process you're
              facing—and we succeeded.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="border border-slate-200 bg-gradient-to-b from-white to-slate-50/50 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-900 to-slate-700 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-lg transition-all duration-300">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">Proven Results</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600">
                  Our team has a proven track record of securing admissions to top-tier universities, including the Ivy League, all UCs, Carnegie Mellon, and Georgia Tech.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-slate-200 bg-gradient-to-b from-white to-slate-50/50 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-500 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-lg transition-all duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">Personalized Approach</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600">
                  No cookie-cutter strategies. We craft a unique plan that highlights your individual strengths and
                  story.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-slate-200 bg-gradient-to-b from-white to-slate-50/50 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-900 to-slate-700 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-lg transition-all duration-300">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">Current Insights</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600">
                  Fresh perspective from students who just went through the process. We know the latest trends and
                  requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

     

      {/* Services Preview */}
      <section className="py-20 bg-gradient-to-b from`-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Our <span className="text-amber-600">Services</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive support designed to maximize your admissions success and scholarship potential.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <Card className="border border-slate-200 bg-gradient-to-b from-white to-slate-50/30 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900 mb-4">Extracurricular Strategy & Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Transform your activities into compelling narratives that demonstrate leadership, impact, and passion.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-amber-600" />
                    <span className="text-slate-700">Activity portfolio optimization</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-amber-600" />
                    <span className="text-slate-700">Leadership opportunity identification</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-amber-600" />
                    <span className="text-slate-700">Impact measurement and documentation</span>
                  </li>
                </ul>
                <Link href="/extracurricular-strategy">
                  <Button className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white w-full shadow-md hover:shadow-lg transition-all duration-300">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border border-slate-200 bg-gradient-to-b from-white to-slate-50/30 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900 mb-4">Personalized Application Brainstorming</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Discover and articulate your unique story to create compelling college applications.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-amber-600" />
                    <span className="text-slate-700">Personal narrative development</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-amber-600" />
                    <span className="text-slate-700">School-specific strategy planning</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-amber-600" />
                    <span className="text-slate-700">Essay brainstorming and refinement</span>
                  </li>
                </ul>
                <Link href="/application-brainstorming">
                  <Button className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white w-full shadow-md hover:shadow-lg transition-all duration-300">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/services">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-slate-300 text-slate-700 hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 px-8 py-3 text-lg font-semibold rounded-lg bg-white/50 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300"
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to <span className="text-amber-400">Get Started</span>?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join the ranks of successful students who chose College Consult. Your dream school is waiting.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Get Your Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
