"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Code, GraduationCap, Mail, MapPin, Phone, User, Award, Calendar, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const skills = [
    { name: "JavaScript/TypeScript", level: 90 },
    { name: "React/Next.js", level: 85 },
    { name: "Python", level: 80 },
    { name: "Data Analysis", level: 75 },
    { name: "Machine Learning", level: 70 },
    { name: "UI/UX Design", level: 65 },
  ]

  const currentActivities = [
    {
      title: "Student Government President",
      organization: "Lincoln High School",
      period: "2024 - Present",
      description: "Leading student body initiatives and representing 2,000+ students in school policy decisions.",
      type: "Leadership",
    },
    {
      title: "Research Assistant",
      organization: "Local University Lab",
      period: "Summer 2024",
      description: "Conducting research on renewable energy solutions and data analysis for sustainability projects.",
      type: "Research",
    },
    {
      title: "Volunteer Tutor",
      organization: "Community Learning Center",
      period: "2023 - Present",
      description: "Teaching mathematics and computer science to underserved middle school students.",
      type: "Community Service",
    },
    {
      title: "Full-Stack Developer",
      organization: "Personal Project",
      period: "2024",
      description: "Building a web application to help students find study groups and academic resources.",
      type: "Technical",
    },
  ]

  const achievements = [
    "National Merit Scholar Semifinalist",
    "1st Place - State Science Fair",
    "AP Scholar with Distinction",
    "Varsity Tennis Team Captain",
    "200+ Community Service Hours",
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <User className="h-6 w-6" />
              <span className="font-bold">Portfolio</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="#about" className="hover:text-foreground/80">
              About
            </Link>
            <Link href="#skills" className="hover:text-foreground/80">
              Skills
            </Link>
            <Link href="#activities" className="hover:text-foreground/80">
              Activities
            </Link>
            <Link href="#contact" className="hover:text-foreground/80">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-24 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Profile"
              width={200}
              height={200}
              className="rounded-full border-4 border-primary/20"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Alex Johnson</h1>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
              Aspiring Computer Science Student | Student Leader | Community Advocate
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center space-x-1">
                <GraduationCap className="h-4 w-4" />
                <span>Class of 2025</span>
              </div>
            </div>
          </div>
          <div className="flex space-x-4">
            <Button asChild>
              <Link href="#contact">Get In Touch</Link>
            </Button>
            <Button variant="outline" asChild>
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
          <h2 className="text-3xl font-bold tracking-tighter mb-8">About Me</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate high school senior with a deep interest in computer science, leadership, and community
                service. My goal is to pursue a degree in Computer Science while continuing to make a positive impact in
                my community.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through my experiences in student government, research, and volunteer work, I've developed strong
                problem-solving skills and a commitment to using technology for social good.
              </p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5" />
                  <span>Key Achievements</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container py-16 bg-muted/50">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Technical Proficiencies</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>

          <Separator className="my-8" />

          <div>
            <h3 className="text-xl font-semibold mb-4">Additional Skills</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Leadership",
                "Public Speaking",
                "Project Management",
                "Data Visualization",
                "Git/GitHub",
                "Figma",
                "Adobe Creative Suite",
                "Spanish (Fluent)",
              ].map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Activities Section */}
      <section id="activities" className="container py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Current Activities & Projects</h2>
          <div className="grid gap-6">
            {currentActivities.map((activity, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-xl">{activity.title}</CardTitle>
                      <CardDescription className="flex items-center space-x-2">
                        <span>{activity.organization}</span>
                        <span>•</span>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{activity.period}</span>
                        </div>
                      </CardDescription>
                    </div>
                    <Badge variant="outline">{activity.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container py-16 bg-muted/50">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Get In Touch</h2>
          <p className="text-muted-foreground mb-8">
            I'd love to connect with admissions officers, fellow students, or anyone interested in my work.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardContent className="flex flex-col items-center space-y-2 p-6">
                <Mail className="h-8 w-8 text-primary" />
                <div className="text-center">
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">alex.johnson@email.com</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center space-y-2 p-6">
                <Phone className="h-8 w-8 text-primary" />
                <div className="text-center">
                  <p className="font-medium">Phone</p>
                  <p className="text-sm text-muted-foreground">(555) 123-4567</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center space-y-2 p-6">
                <Code className="h-8 w-8 text-primary" />
                <div className="text-center">
                  <p className="font-medium">GitHub</p>
                  <p className="text-sm text-muted-foreground">github.com/alexj</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6">
        <div className="container text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Alex Johnson. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
