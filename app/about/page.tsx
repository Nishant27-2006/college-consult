import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Target, Users, Award, Lightbulb } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen page-gradient">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-amber-100 text-amber-800 border-amber-200 px-4 py-2 text-sm font-semibold">
              🎯 Our Mission
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              About
              <span className="text-amber-600"> College Consult</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-700 mb-12 leading-relaxed max-w-3xl mx-auto">
              We believe every student deserves personalized guidance from those who have successfully navigated the
              competitive college admissions landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Our <span className="text-amber-600">Mission</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                To empower students with the knowledge, strategies, and confidence needed to achieve their college
                dreams through personalized, authentic guidance.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 lg:p-12 mb-16">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">What We Believe</h3>
              <div className="space-y-6 text-slate-700 leading-relaxed">
                <p>
                  <strong>Every student has a unique story worth telling.</strong> Our role is to help you discover,
                  develop, and articulate that story in a way that resonates with admissions committees at your target
                  schools.
                </p>
                <p>
                  <strong>Authenticity trumps perfection.</strong> We don't believe in cookie-cutter approaches or
                  trying to fit students into predetermined molds. Instead, we help you showcase your genuine interests,
                  experiences, and aspirations.
                </p>
                <p>
                  <strong>Recent experience matters.</strong> As students who just navigated the admissions process
                  ourselves, we understand the current landscape, requirements, and what actually works in today's
                  competitive environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Our <span className="text-amber-600">Vision</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                To transform the college admissions consulting landscape by providing accessible, personalized guidance
                that helps students achieve their full potential.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Looking Forward</h3>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    We envision a future where every motivated student has access to high-quality college admissions
                    guidance, regardless of their background or circumstances.
                  </p>
                  <p>
                    Our goal is to democratize college consulting by offering personalized, effective strategies at
                    accessible price points, helping level the playing field in competitive admissions.
                  </p>
                  <p>
                    We're committed to staying current with admissions trends and requirements, ensuring our guidance
                    remains relevant and effective as the landscape evolves.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="border border-slate-200 p-6">
                  <h4 className="font-bold text-slate-900 mb-3">Our Commitment</h4>
                  <p className="text-slate-600 text-sm">
                    To provide honest, ethical guidance that helps students present their best authentic selves to
                    colleges.
                  </p>
                </Card>
                <Card className="border border-slate-200 p-6">
                  <h4 className="font-bold text-slate-900 mb-3">Our Promise</h4>
                  <p className="text-slate-600 text-sm">
                    To treat every student as an individual with unique strengths, goals, and potential for success.
                  </p>
                </Card>
                <Card className="border border-slate-200 p-6">
                  <h4 className="font-bold text-slate-900 mb-3">Our Goal</h4>
                  <p className="text-slate-600 text-sm">
                    To help you not just get into college, but to thrive once you're there by building genuine
                    confidence and self-awareness.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              What Sets Us <span className="text-amber-600">Apart</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our unique approach combines recent experience with proven strategies to deliver exceptional results.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border border-slate-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Fresh Perspective</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  We just went through the admissions process and understand the current landscape, requirements, and
                  what actually works today. Our insights are current and relevant.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-slate-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Personalized Approach</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  No two students are alike, and neither are our strategies. We take the time to understand your unique
                  story, goals, and circumstances to create a tailored plan.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-slate-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Proven Results</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Our team has a proven track record of securing admissions to top-tier universities, including the Ivy League, all UCs, Carnegie Mellon, and Georgia Tech.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-slate-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Authentic Guidance</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  We help you present your genuine self, not what you think admissions officers want to see.
                  Authenticity is more compelling than perfection.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Start Your <span className="text-amber-400">Journey</span>?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let us help you discover and articulate your unique story. Your college dreams are within reach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold rounded-lg"
              >
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-slate-300 text-white hover:bg-slate-800 px-8 py-4 text-lg font-semibold rounded-lg bg-transparent"
              >
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
