"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  Code,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  User,
  Award,
  Calendar,
  ExternalLink,
  Shield,
  Users,
  Database,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({})
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }))
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll("[data-animate]")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  const skills = [
    { name: "JavaScript/TypeScript", level: 90 },
    { name: "React/Next.js", level: 85 },
    { name: "Python", level: 88 },
    { name: "Cybersecurity", level: 82 },
    { name: "Data Analysis", level: 75 },
    { name: "Machine Learning", level: 70 },
    { name: "UI/UX Design", level: 65 },
    { name: "Competitive Programming", level: 80 },
  ]

  const currentActivities = [
    {
      title: "Head of Department",
      organization: "Exun Clan",
      period: "2024 - Present",
      description:
        "Leading technical initiatives and managing departmental operations for one of India's premier computer science clubs. Organizing hackathons, workshops, and competitive programming events.",
      type: "Leadership",
      icon: <Code className="h-5 w-5" />,
    },
    {
      title: "Core Member",
      organization: "CyberX Club",
      period: "2023 - Present",
      description:
        "Developing cybersecurity awareness programs and conducting penetration testing workshops. Contributing to security research and vulnerability assessments.",
      type: "Cybersecurity",
      icon: <Shield className="h-5 w-5" />,
    },
    {
      title: "Member",
      organization: "Digex Club",
      period: "2023 - Present",
      description:
        "Participating in digital innovation projects and contributing to data science initiatives. Collaborating on machine learning projects and data visualization tools.",
      type: "Data Science",
      icon: <Database className="h-5 w-5" />,
    },
    {
      title: "Full-Stack Developer",
      organization: "Personal Project",
      period: "2024",
      description:
        "Building a comprehensive platform for students to find study groups, share resources, and collaborate on academic projects using modern web technologies.",
      type: "Technical",
      icon: <Users className="h-5 w-5" />,
    },
  ]

  const achievements = [
    "National Merit Scholar Semifinalist",
    "1st Place - Inter-School Cybersecurity Competition",
    "AP Scholar with Distinction",
    "Exun Clan Departmental Excellence Award",
    "Top 10% - National Coding Olympiad",
    "300+ Community Service Hours",
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-gray-800/50 bg-gray-950/80 backdrop-blur-md supports-[backdrop-filter]:bg-gray-950/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2 transition-colors hover:text-blue-400">
              <User className="h-6 w-6" />
              <span className="font-bold">Portfolio</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="#about"
              className="transition-colors hover:text-blue-400 hover:scale-105 transform duration-200"
            >
              About
            </Link>
            <Link
              href="#skills"
              className="transition-colors hover:text-blue-400 hover:scale-105 transform duration-200"
            >
              Skills
            </Link>
            <Link
              href="#activities"
              className="transition-colors hover:text-blue-400 hover:scale-105 transform duration-200"
            >
              Activities
            </Link>
            <Link
              href="#contact"
              className="transition-colors hover:text-blue-400 hover:scale-105 transform duration-200"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-32 md:py-40">
        <div
          className={`flex flex-col items-center text-center space-y-8 transition-all duration-1000 ${
            isVisible.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          data-animate
          id="hero"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Profile"
              width={200}
              height={200}
              className="relative rounded-full border-4 border-gray-800 bg-gray-900"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Swapnil Suraj
            </h1>
            <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl">
              Computer Science Enthusiast | Cybersecurity Researcher | Tech Leader
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>New Delhi, India</span>
              </div>
              <div className="flex items-center space-x-1">
                <GraduationCap className="h-4 w-4" />
                <span>Class of 2025</span>
              </div>
            </div>
          </div>
          <div className="flex space-x-4">
            <Button
              className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
              asChild
            >
              <Link href="#contact">Get In Touch</Link>
            </Button>
            <Button
              variant="outline"
              className="border-gray-700 text-gray-300 hover:bg-gray-800 transform hover:scale-105 transition-all duration-200 bg-transparent"
              asChild
            >
              <Link href="/resume.pdf" target="_blank">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Resume
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container py-16">
        <div className="mx-auto max-w-4xl">
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible.about ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            data-animate
            id="about"
          >
            <h2 className="text-3xl font-bold tracking-tighter mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  I'm a passionate computer science student with expertise in cybersecurity, competitive programming,
                  and full-stack development. As Head of Department at Exun Clan and core member of CyberX Club, I lead
                  technical initiatives and drive innovation in my school's tech community.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  My journey spans from organizing hackathons and cybersecurity workshops to developing real-world
                  applications. I'm committed to using technology to solve complex problems and create meaningful
                  impact.
                </p>
              </div>
              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-white">
                    <Award className="h-5 w-5 text-blue-400" />
                    <span>Key Achievements</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start space-x-2 group">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0 group-hover:bg-purple-400 transition-colors duration-200" />
                        <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-200">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container py-16 bg-gray-900/30">
        <div className="mx-auto max-w-4xl">
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible.skills ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            data-animate
            id="skills"
          >
            <h2 className="text-3xl font-bold tracking-tighter mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technical Proficiencies
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2 group">
                  <div className="flex justify-between">
                    <span className="font-medium text-white group-hover:text-blue-400 transition-colors duration-200">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="relative">
                    <Progress value={skill.level} className="h-2 bg-gray-800" />
                    <div
                      className="absolute top-0 left-0 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible.skills ? `${skill.level}%` : "0%",
                        transitionDelay: `${index * 100}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <Separator className="my-8 bg-gray-800" />

            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Additional Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Leadership",
                  "Public Speaking",
                  "Project Management",
                  "Penetration Testing",
                  "Git/GitHub",
                  "Docker",
                  "Linux Administration",
                  "Network Security",
                ].map((skill, index) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className={`bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 ${
                      isVisible.skills ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Activities Section */}
      <section id="activities" className="container py-16">
        <div className="mx-auto max-w-4xl">
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible.activities ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            data-animate
            id="activities"
          >
            <h2 className="text-3xl font-bold tracking-tighter mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Current Activities & Leadership
            </h2>
            <div className="grid gap-6">
              {currentActivities.map((activity, index) => (
                <Card
                  key={index}
                  className={`bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:bg-gray-900/70 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10 ${
                    isVisible.activities ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-1 flex-1">
                        <CardTitle className="text-xl text-white flex items-center space-x-2">
                          <span className="text-blue-400">{activity.icon}</span>
                          <span>{activity.title}</span>
                        </CardTitle>
                        <CardDescription className="flex items-center space-x-2 text-gray-400">
                          <span className="font-medium">{activity.organization}</span>
                          <span>•</span>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{activity.period}</span>
                          </div>
                        </CardDescription>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-blue-500/50 text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 transition-colors duration-200"
                      >
                        {activity.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 leading-relaxed">{activity.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container py-16 bg-gray-900/30">
        <div className="mx-auto max-w-2xl text-center">
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible.contact ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            data-animate
            id="contact"
          >
            <h2 className="text-3xl font-bold tracking-tighter mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-gray-300 mb-8">
              I'd love to connect with admissions officers, fellow developers, or anyone interested in collaboration.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:bg-gray-900/70 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 group">
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <Mail className="h-8 w-8 text-blue-400 group-hover:text-purple-400 transition-colors duration-300" />
                  <div className="text-center">
                    <p className="font-medium text-white">Email</p>
                    <p className="text-sm text-gray-400">swapnilsuraj17@gmail.com</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:bg-gray-900/70 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 group">
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <Phone className="h-8 w-8 text-blue-400 group-hover:text-purple-400 transition-colors duration-300" />
                  <div className="text-center">
                    <p className="font-medium text-white">Phone</p>
                    <p className="text-sm text-gray-400">+91 8279639465</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:bg-gray-900/70 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 group">
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <Code className="h-8 w-8 text-blue-400 group-hover:text-purple-400 transition-colors duration-300" />
                  <div className="text-center">
                    <p className="font-medium text-white">GitHub</p>
                    <p className="text-sm text-gray-400">github.com/warriorking34x</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6 bg-gray-950/50">
        <div className="container text-center text-sm text-gray-400">
          <p>&copy; 2024 Swapnil Suraj. Built with passion and code.</p>
        </div>
      </footer>
    </div>
  )
}
