import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Target, Users, TrendingUp } from "lucide-react"

export default function ExtracurricularStrategyPage() {
  return (
    <div className="min-h-screen page-gradient">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-amber-100 text-amber-800 border-amber-200 px-4 py-2 text-sm font-semibold">
              🎯 Strategic Planning
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Extracurricular Strategy &<span className="text-amber-600"> Development</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-700 mb-12 leading-relaxed max-w-3xl mx-auto">
              Transform your activities into compelling narratives that demonstrate leadership, impact, and passion. We
              help you identify opportunities and maximize your involvement to stand out in competitive admissions.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg font-semibold rounded-lg"
              >
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
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
              Our comprehensive approach to extracurricular development goes beyond just listing activities— we help you
              create a cohesive story of impact and leadership.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border border-slate-200 hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-slate-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">Activity Portfolio Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-center">
                  Analyze your current activities and identify gaps or opportunities to strengthen your profile for your
                  target schools and intended major.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-slate-200 hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-amber-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">Leadership Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-center">
                  Identify and pursue leadership opportunities that align with your interests and demonstrate your
                  ability to create positive change.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-slate-200 hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-slate-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">Impact Measurement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-center">
                  Learn how to document and quantify the impact of your activities to create compelling narratives for
                  college applications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Our <span className="text-amber-600">Process</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A systematic approach to developing your extracurricular profile that tells a cohesive story.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Initial Assessment</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We start by evaluating your current activities, interests, and goals. We'll identify your strengths
                    and areas where you can develop a stronger profile.
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
                    Together, we'll create a personalized roadmap that aligns your activities with your academic
                    interests and target schools, ensuring a cohesive narrative.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Implementation Support</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We provide ongoing guidance as you pursue new opportunities, helping you maximize impact and
                    document your achievements effectively.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Application Integration</h3>
                  <p className="text-slate-600 leading-relaxed">
                    When it's time to apply, we help you present your activities in the most compelling way,
                    highlighting leadership, impact, and personal growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Why This <span className="text-amber-600">Matters</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Strategic extracurricular development can be the difference between acceptance and rejection at
              competitive schools.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">What You'll Gain:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">A cohesive narrative that connects all your activities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Clear leadership roles that demonstrate your impact</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Documented achievements with quantifiable results</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Strategic positioning for your target schools</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Confidence in presenting your accomplishments</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Perfect For:</h3>
              <ul className="space-y-3 text-slate-700">
                <li>• Students in grades 9-11 looking to build their profile</li>
                <li>• High achievers who want to stand out from other top students</li>
                <li>• Students targeting competitive colleges and universities</li>
                <li>• Anyone who wants to maximize their extracurricular impact</li>
                <li>• Students seeking leadership development opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Build Your <span className="text-amber-400">Winning Profile</span>?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Don't leave your extracurricular development to chance. Let us help you create a strategic plan that
            showcases your unique strengths and maximizes your impact.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold rounded-lg"
            >
              Start Your Strategy Session <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
