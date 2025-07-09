import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, BookOpen, Lightbulb, FileText, Target, Users, Award } from "lucide-react"

export default function ApplicationBrainstormingPage() {
  return (
    <div className="min-h-screen page-gradient">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-amber-100 text-amber-800 border-amber-200 px-4 py-2 text-sm font-semibold">
              ✨ Strategic Application Development
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Personalized College Application
              <span className="text-amber-600"> Brainstorming</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-700 mb-12 leading-relaxed max-w-3xl mx-auto">
              Discover and articulate your unique story and strengths. We help you craft applications that showcase your
              authentic self while meeting the specific requirements of your target schools.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg font-semibold rounded-lg"
              >
                Start Your Application Journey <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              What We <span className="text-amber-600">Offer</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Our personalized approach helps you uncover your unique narrative and present it in a way that resonates
              with admissions committees at your target schools.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border border-slate-200 hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-slate-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">Personal Narrative Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-center">
                  Uncover your unique story and learn how to weave it throughout your application to create a compelling
                  and authentic narrative.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-slate-200 hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-amber-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">School-Specific Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-center">
                  Develop tailored approaches for each of your target schools, understanding what makes each institution
                  unique and how to appeal to their values.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-slate-200 hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-slate-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">Essay Brainstorming</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-center">
                  Generate compelling essay topics and themes that highlight your strengths while addressing each prompt
                  authentically and memorably.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Our <span className="text-amber-600">Approach</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We believe every student has a unique story worth telling. Our job is to help you discover and articulate
              that story in the most compelling way possible.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Deep Discovery Session</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We start with an in-depth conversation about your experiences, values, goals, and what makes you
                    unique. This forms the foundation of your application strategy.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Theme Identification</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Together, we identify 2-3 core themes that will run throughout your application, ensuring
                    consistency and depth in how you present yourself.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">School-Specific Planning</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We research your target schools and develop specific strategies for each, understanding their
                    culture, values, and what they're looking for in applicants.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Content Development</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We brainstorm essay topics, activity descriptions, and other application components that bring your
                    themes to life and showcase your authentic voice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              What's <span className="text-amber-600">Included</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive support to help you develop every aspect of your college applications.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border border-slate-200 p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-amber-600" />
                Application Strategy
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Personal narrative development and theme identification</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">School-specific research and strategy planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Application timeline and milestone planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Strengths and differentiator identification</span>
                </li>
              </ul>
            </Card>

            <Card className="border border-slate-200 p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <FileText className="h-6 w-6 text-amber-600" />
                Content Development
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Essay topic brainstorming and outline development</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Activity description optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Supplemental essay strategy and planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Interview preparation and practice</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Why This <span className="text-amber-600">Works</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our personalized approach has helped students gain admission to their dream schools by presenting
              authentic, compelling applications.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Authentic Voice</h3>
              <p className="text-slate-600">
                We help you find and express your genuine voice, not what you think admissions officers want to hear.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Strategic Focus</h3>
              <p className="text-slate-600">
                Every element of your application works together to tell a cohesive, compelling story about who you are.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Proven Results</h3>
              <p className="text-slate-600">
                Our team has a proven track record of securing admissions to top-tier universities, including the Ivy League, all UCs, Carnegie Mellon, and Georgia Tech.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Craft Your <span className="text-amber-400">Winning Application</span>?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Don't let your unique story get lost in the application process. Let us help you discover and articulate
            what makes you special.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold rounded-lg"
            >
              Start Your Application Strategy <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
