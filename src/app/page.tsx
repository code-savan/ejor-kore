import { Button } from "@/components/ui/button"
import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Droplets, Mountain, Shield, CheckCircle, Star, Phone, Mail, MapPin } from "lucide-react"

export default function HomePage() {
  return (
    <div id="home">
      <HeroSection />
      <AboutSection />
      <ServicesOverview />
      <WhyChooseUs />
      <RecentProjects />
      <ClientTestimonials />
      <ContactSection />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative h-[100dvh] bg-white text-gray-900 flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <Badge className="mb-6 bg-orange-600 hover:bg-orange-700 text-white">
          Nigeria's Premier Water Treatment & Geotechnical Experts
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Professional Water Treatment {'&'} Geotechnical Solutions
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-3xl mx-auto">
          Over 20 years of experience delivering quality services across Nigeria. 
          Certified professionals with state-of-the-art equipment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white" asChild>
            <a href="https://wa.me/+234XXXXXXXXX" target="_blank" rel="noopener noreferrer">
              Get Expert Consultation
            </a>
          </Button>
          <Button size="lg" variant="outline" className="text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white">
            View Our Services
          </Button>
        </div>
        <div className="flex justify-center items-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-orange-500" />
            <span>Certified Professionals</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-orange-500" />
            <span>Local Expertise</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-orange-500" />
            <span>Proven Track Record</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicesOverview() {
  const services = [
    {
      title: "Water Treatment Solutions",
      description: "Comprehensive water treatment systems for residential, commercial, and industrial applications.",
      icon: <Droplets className="h-8 w-8 text-blue-600" />,
      features: ["Home filtration systems", "Commercial water solutions", "Industrial treatment"]
    },
    {
      title: "Geotechnical Engineering",
      description: "Expert geotechnical services for construction and development projects.",
      icon: <Mountain className="h-8 w-8 text-green-600" />,
      features: ["Foundation design", "Slope stability analysis", "Construction monitoring"]
    },
    {
      title: "Soil Testing & Analysis",
      description: "Professional soil testing and analysis services for construction projects.",
      icon: <Shield className="h-8 w-8 text-orange-600" />,
      features: ["Soil composition analysis", "Bearing capacity assessment", "Site investigation"]
    },
    {
      title: "Environmental Assessment",
      description: "Comprehensive environmental evaluation and compliance services.",
      icon: <CheckCircle className="h-8 w-8 text-purple-600" />,
      features: ["Contamination assessment", "Environmental compliance", "Remediation planning"]
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive water treatment and geotechnical services 
            tailored to meet your specific needs.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-4" variant="outline">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyChooseUs() {
  const reasons = [
    {
      title: "20+ Years Experience",
      description: "Extensive experience in Nigerian market with proven expertise"
    },
    {
      title: "Certified Professionals",
      description: "All our engineers and technicians are certified and qualified"
    },
    {
      title: "State-of-the-Art Equipment",
      description: "Modern technology and equipment for accurate results"
    },
    {
      title: "Customer Satisfaction",
      description: "100% satisfaction guarantee on all our services"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose EJOR-KORE</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We are Nigeria's trusted partner for water treatment and geotechnical services
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function RecentProjects() {
  const projects = [
    "/project1.jpg",
    "/project2.jpg",
    "/project3.jpg",
    "/project4.jpg",
    "/project5.jpg",
    "/project6.jpg"
  ]

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our latest completed projects across Nigeria
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {projects.map((imageSrc, index) => (
            <div key={index} className="relative h-48 overflow-hidden rounded-lg">
              <Image
                src={imageSrc}
                alt={`Project ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ClientTestimonials() {
  const testimonials = [
    {
      name: "Dr. Adebayo Ogun",
      position: "Project Manager, Lagos Construction Ltd",
      testimonial: "EJOR-KORE delivered exceptional geotechnical services for our project. Their expertise and professionalism exceeded our expectations.",
      rating: 5
    },
    {
      name: "Mrs. Fatima Hassan",
      position: "Operations Director, Abuja Water Systems",
      testimonial: "Outstanding water treatment solutions! The team was professional, efficient, and delivered results on time.",
      rating: 5
    },
    {
      name: "Engr. Chidi Okoro",
      position: "Chief Engineer, Industrial Solutions Inc",
      testimonial: "Their technical expertise and attention to detail made all the difference in our industrial water treatment project.",
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            What our clients say about our services
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.testimonial}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About EJOR-KORE Services</h2>
            <p className="text-lg text-gray-600 mb-6">
              Established with a vision to provide top-quality water treatment and geotechnical services 
              across Nigeria, EJOR-KORE Services Ltd has become a trusted name in the industry.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our team of certified professionals brings over 20 years of combined experience, 
              utilizing state-of-the-art equipment and proven methodologies to deliver exceptional results.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-orange-500" />
                <span className="text-lg">Founded on expertise and reliability</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-orange-500" />
                <span className="text-lg">Serving residential, commercial, and industrial clients</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-orange-500" />
                <span className="text-lg">Committed to environmental sustainability</span>
              </div>
            </div>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/hero.jpg"
              alt="EJOR-KORE Services in action"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Ready to start your project? Get in touch with our experts today.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-white/10 border-white/20">
            <CardContent className="pt-6 text-center">
              <Phone className="h-8 w-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-blue-100">+234 XXX XXX XXXX</p>
              <p className="text-blue-100">+234 XXX XXX XXXX</p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 border-white/20">
            <CardContent className="pt-6 text-center">
              <Mail className="h-8 w-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-blue-100">info@ejorkore.com</p>
              <p className="text-blue-100">services@ejorkore.com</p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 border-white/20">
            <CardContent className="pt-6 text-center">
              <MapPin className="h-8 w-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-blue-100">Lagos, Nigeria</p>
              <p className="text-blue-100">Serving nationwide</p>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-12">
          <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
            <a href="https://wa.me/+234XXXXXXXXX" target="_blank" rel="noopener noreferrer">
              Contact us on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
