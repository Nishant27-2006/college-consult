import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Star, Clock, Users, Award, Brain } from "lucide-react"

export default function PackagesPage() {
  return (
    
  
    <div className="min-h-screen page-gradient">
      <section className="py-8 bg-amber-50 border-t border-amber-200">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm border border-amber-200">
              <Clock className="h-5 w-5 text-amber-600" />
              <span className="text-slate-900 font-semibold">Free 1-Hour Consultation</span>
              <span className="text-amber-600">• No Commitment Required</span>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-amber-100 text-amber-800 border-amber-200 px-4 py-2 text-sm font-semibold">
              💼 Comprehensive Packages
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Choose Your
              <span className="text-amber-600"> Package</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-700 mb-12 leading-relaxed max-w-3xl mx-auto">
              Flexible consulting packages designed to fit your needs and budget. Each package includes exclusive access to our network of internship opportunities, research programs, SAT prep from high scorers, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Free Consultation Banner */}
      

      {/* Packages Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Our <span className="text-amber-600">Packages</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the package that best fits your needs. All packages include our exclusive extracurricular help network with access to internships, research opportunities, and more.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Starter Package */}
            <Card className="border-2 border-slate-200 hover:shadow-xl transition-all duration-300 relative">
              <CardHeader className="bg-slate-50 border-b border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-slate-100 text-slate-800 border-slate-200 px-3 py-1">
                    Starter Package
                  </Badge>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-slate-900">$300</div>
                    <div className="text-sm text-slate-600">5 Hours of Consulting</div>
                  </div>
                </div>
                <CardTitle className="text-2xl text-slate-900">Perfect for Getting Started</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Ideal for students who need focused guidance on specific areas of their college application process.
                </p>

                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-slate-900 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-amber-600" />
                    What's Included:
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">5 hours of personalized consulting</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Free 1-hour initial consultation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Access to exclusive EC network</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Internship opportunities database</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Research program connections</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">SAT Prep from 36 ACT/1500+ SAT scorers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">$50 per additional hour</span>
                    </li>
                  </ul>
                </div>

                <Link href="/signup">
                  <Button className="bg-slate-900 hover:bg-slate-800 text-white w-full">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Premium Package */}
            <Card className="border-2 border-amber-200 hover:shadow-xl transition-all duration-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-amber-600 text-white px-4 py-2 text-sm font-semibold shadow-md">
                  <Star className="h-4 w-4 mr-1" />
                  Most Popular
                </Badge>
              </div>
              <CardHeader className="bg-amber-50 border-b border-amber-200">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-amber-100 text-amber-800 border-amber-200 px-3 py-1">
                    Premium Package
                  </Badge>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-slate-900">$450</div>
                    <div className="text-sm text-slate-600">10 Hours of Consulting</div>
                  </div>
                </div>
                <CardTitle className="text-2xl text-slate-900">Comprehensive Support</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Perfect for students who want comprehensive guidance throughout their entire college application journey.
                </p>

                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-slate-900 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-amber-600" />
                    What's Included:
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">10 hours of personalized consulting</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Free 1-hour initial consultation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Priority access to exclusive EC network</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Premium internship opportunities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Research program connections</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Application strategy development</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Premium SAT Prep from 36 ACT/1500+ SAT scorers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">$50 per additional hour</span>
                    </li>
                  </ul>
                </div>

                <Link href="/signup">
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white w-full">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Extra Benefits Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Exclusive <span className="text-amber-600">Network Access</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              All packages include access to our comprehensive extracurricular network, SAT prep from high scorers, and opportunities beyond traditional consulting.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="border-2 border-slate-200 hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-xl text-slate-900">Internship Network</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-center leading-relaxed">
                  Access to exclusive internship opportunities across various industries and fields of study.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-200 hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-xl text-slate-900">Expert SAT Prep</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-center leading-relaxed">
                  SAT/ACT prep from students who scored 36 on ACT and 1500+ on SAT.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-xl text-slate-900">Research Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-center leading-relaxed">
                  Connections to research opportunities at top universities and institutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-xl text-slate-900">Premium Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-center leading-relaxed">
                  Access to exclusive programs, competitions, and leadership opportunities.
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
            Ready to <span className="text-amber-400">Invest in Your Future</span>?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Choose the package that fits your needs and start your journey toward college success today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold rounded-lg"
              >
                Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black bg-white px-8 py-4 text-lg font-semibold rounded-lg"
              >
                Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}