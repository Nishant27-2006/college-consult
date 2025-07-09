import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Target, BookOpen, Brain } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen page-gradient">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-amber-100 text-amber-800 border-amber-200 px-4 py-2 text-sm font-semibold">
              🎯 Comprehensive Support
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Our
              <span className="text-amber-600"> Services</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-700 mb-12 leading-relaxed max-w-3xl mx-auto">
              Comprehensive support designed to maximize your admissions success and scholarship potential through
              personalized, strategic guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              What We <span className="text-amber-600">Offer</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our services are designed to help you build a compelling profile and craft applications that showcase your
              unique strengths and potential.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="border-2 border-slate-200 hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-slate-50 border-b border-slate-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-slate-900">Extracurricular Strategy & Development</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Transform your activities into compelling narratives that demonstrate leadership, impact, and passion.
                  We help you identify opportunities and maximize your involvement to create a cohesive story.
                </p>

                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-slate-900">What's Included:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Activity portfolio optimization and gap analysis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Leadership opportunity identification and development</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Impact measurement and documentation strategies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Strategic planning for long-term profile building</span>
                    </li>
                  </ul>
                </div>

                <Link href="/extracurricular-strategy">
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white w-full">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-slate-50 border-b border-slate-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-slate-900">Personalized Application Brainstorming</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Discover and articulate your unique story and strengths to create compelling college applications that
                  showcase your authentic self while meeting admissions criteria.
                </p>

                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-slate-900">What's Included:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Personal narrative development and theme identification</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">School-specific strategy planning and research</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Essay brainstorming and topic development</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Application timeline and milestone planning</span>
                    </li>
                  </ul>
                </div>

                <Link href="/application-brainstorming">
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white w-full">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-slate-50 border-b border-slate-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-slate-900">Expert SAT/ACT Prep</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Get personalized test preparation from students who achieved perfect 36 ACT scores and 1500+ SAT scores.
                  Learn proven strategies and techniques from those who mastered the tests.
                </p>

                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-slate-900">What's Included:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Personalized study plans and strategies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Test-taking techniques from high scorers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Practice test analysis and improvement areas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Subject-specific strategies and timing tips</span>
                    </li>
                  </ul>
                </div>

                <Link href="/packages">
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white w-full">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              How We <span className="text-amber-600">Work</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our collaborative approach ensures you receive personalized guidance tailored to your unique goals and
              circumstances.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Initial Consultation</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We start with a comprehensive discussion about your goals, interests, experiences, and target
                    schools. This helps us understand your unique situation and develop a personalized strategy.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Strategic Planning</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Together, we create a detailed roadmap that aligns with your timeline and goals. This includes
                    identifying key milestones, opportunities for growth, and areas that need development.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Implementation & Support</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We provide ongoing guidance as you execute your plan, offering feedback, adjustments, and support
                    throughout the process. Regular check-ins ensure you stay on track.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Application Excellence</h3>
                  <p className="text-slate-600 leading-relaxed">
                    When application time arrives, we help you present your story in the most compelling way possible,
                    ensuring every component works together to showcase your unique strengths and potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to <span className="text-amber-400">Transform Your Future</span>?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Don't leave your college admissions success to chance. Let us help you create a strategic plan that
            showcases your unique potential.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold rounded-lg"
            >
              Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
