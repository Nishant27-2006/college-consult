import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, GraduationCap, Star, Award, Trophy, Target, TrendingUp, Lightbulb } from "lucide-react"

export default function TeamPage() {
  return (
    <div className="min-h-screen page-gradient">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-amber-100 text-amber-800 border-amber-200 px-4 py-2 text-sm font-semibold">
              🎓 Meet Your Success Coaches
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Our
              <span className="text-amber-600"> Team</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-700 mb-12 leading-relaxed max-w-3xl mx-auto">
              Learn from students who didn't just get accepted—they dominated the admissions process and earned millions
              in scholarships. Our founders bring fresh insights from their recent success.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Ram Sarma */}
            <Card className="border-2 border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-8 text-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-10 w-10" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">Ram Sarma</h3>
                    <p className="text-slate-200 text-lg">Computer Science Expert</p>
                  </div>
                </div>
                <Badge className="bg-amber-600 text-white border-0 text-sm px-3 py-1">UT Austin CS Student</Badge>
              </div>

              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Trophy className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900 text-lg">Elite University Acceptances</p>
                      <p className="text-slate-600">
                        Gained admission to top-tier universities, including UC Berkeley (EECS), Purdue, and Cornell, for their highly competitive computer science programs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Star className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900 text-lg">USACO Gold Division Participant</p>
                      <p className="text-slate-600">
                        Achieved elite status in competitive programming, demonstrating exceptional problem-solving
                        skills and algorithmic thinking.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Lightbulb className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900 text-lg">Independent CS Projects Portfolio</p>
                      <p className="text-slate-600">
                        Developed a strong portfolio of personal projects showcasing technical expertise and a focus on innovation in food allergy research.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-slate-50 rounded-lg">
                  <h4 className="font-bold text-slate-900 mb-3">Ram's Approach</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    "I believe in helping students find their authentic passion for technology and innovation. My goal
                    is to help you build a compelling narrative around your interests while developing the technical
                    skills that will set you apart."
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Nishant Gadde */}
            <Card className="border-2 border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-amber-600 to-amber-500 p-8 text-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-10 w-10" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">Nishant Gadde</h3>
                    <p className="text-amber-100 text-lg">Engineering & Math Specialist</p>
                  </div>
                </div>
                <Badge className="bg-slate-900 text-white border-0 text-sm px-3 py-1">
                  UT Austin ECE Engineering Honors
                </Badge>
              </div>

              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Trophy className="h-6 w-6 text-slate-900 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900 text-lg">Full Tuition Scholarship Recipient</p>
                      <p className="text-slate-600">
                        Earned complete tuition coverage at UT Austin's prestigious Engineering Honors program,
                        recognizing exceptional academic achievement.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Star className="h-6 w-6 text-slate-900 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900 text-lg">Elite School Acceptances</p>
                      <p className="text-slate-600">
                        Gained admission to Carnegie Mellon, Georgia Tech, UIUC, and UCLA Applied Math—some of the most
                        competitive engineering and mathematics programs in the nation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Award className="h-6 w-6 text-slate-900 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900 text-lg">USACO Platinum Division (Top 110 Worldwide)</p>
                      <p className="text-slate-600">
                        Achieved the highest level in competitive programming, ranking among the top 110 participants
                        globally in algorithmic problem-solving.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <TrendingUp className="h-6 w-6 text-slate-900 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900 text-lg">Academic & Research Excellence</p>
                      <p className="text-slate-600">
                        2x AIME Qualifier, 4x IEEE Author (including Best Conference Paper), and Champions Energy
                        Scholar ($5K award recipient).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-amber-50 rounded-lg">
                  <h4 className="font-bold text-slate-900 mb-3">Nishant's Philosophy</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    "Success in admissions comes from authentic passion combined with strategic presentation. I help
                    students identify their unique strengths and present them in ways that resonate with admissions
                    committees."
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Harish Balamurugan */}
            <Card className="border-2 border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-8 text-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-10 w-10" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">Harish Balamurugan</h3>
                    <p className="text-emerald-100 text-lg">Multi-Disciplinary Excellence</p>
                  </div>
                </div>
                <Badge className="bg-slate-900 text-white border-0 text-sm px-3 py-1">
                  Economics @ Northwestern
                </Badge>
              </div>

              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Trophy className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900 text-lg">Northwestern Economics (Ranked #6 Nationally)</p>
                      <p className="text-slate-600">
                        Accepted to Northwestern's prestigious economics program, ranked #6 overall and known for strong placements in Chicago Investment Banking and Consulting.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Star className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900 text-lg">UC Berkeley Haas Global Management Program</p>
                      <p className="text-slate-600">
                        One of only 50 students admitted to UC Berkeley's Haas Business School Global Management Program (1.1% acceptance rate).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Award className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900 text-lg">Elite Multi-Disciplinary Acceptances</p>
                      <p className="text-slate-600">
                        Gained admission to UCLA, UT Austin's Canfield Business Honors Program, Georgia Tech CS, and USC's Dual Computer Science & Business program.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <TrendingUp className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900 text-lg">International Leadership & Academic Recognition</p>
                      <p className="text-slate-600">
                        Founded 2 international non-profit organizations and received multiple academic awards including Blue Ocean Top 30 finalist and 4x BPA national finalist.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-emerald-50 rounded-lg">
                  <h4 className="font-bold text-slate-900 mb-3">Harish's Vision</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    "I believe in the power of interdisciplinary thinking and helping students discover how their diverse 
                    interests can create a unique and compelling academic profile. Success comes from authentically 
                    connecting your passions to your goals."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Our Experience Matters */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Why Our <span className="text-amber-600">Experience Matters</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're not just consultants—we're recent graduates who successfully navigated the exact challenges you're
              facing right now.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border border-slate-200 p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-slate-900 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Fresh Perspective</h3>
              <p className="text-slate-600">
                We just went through the admissions process and understand the current landscape, requirements, and what
                actually works today.
              </p>
            </Card>

            <Card className="border border-slate-200 p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-amber-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Proven Success</h3>
              <p className="text-slate-600">
                Our track record speaks for itself—acceptances to top schools, significant scholarships, and recognition
                in competitive academic areas.
              </p>
            </Card>

            <Card className="border border-slate-200 p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-slate-900 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Relatable Guidance</h3>
              <p className="text-slate-600">
                We remember what it's like to be in your shoes and can provide practical, actionable advice based on our
                recent experiences.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">
              Our <span className="text-amber-600">Commitment</span>
            </h2>
            <div className="bg-slate-50 rounded-2xl p-8 lg:p-12">
              <p className="text-xl text-slate-700 leading-relaxed mb-6">
                We're committed to providing honest, ethical guidance that helps you present your best authentic self to
                colleges. Our success is measured not just by acceptances, but by helping you develop the confidence and
                self-awareness that will serve you throughout college and beyond.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Every student we work with receives our full attention and personalized support. We believe in your
                potential and are here to help you achieve your college dreams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Work With <span className="text-amber-400">Proven Winners</span>?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let our success become your roadmap. We're here to guide you through the same process that got us into our
            dream schools.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold rounded-lg"
            >
              Start Your Success Story <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
