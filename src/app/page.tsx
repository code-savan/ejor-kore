"use client"
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
// import { Separator } from "@/components/ui/separator"
import { Droplets, Mountain, Shield, CheckCircle, Star, MessageCircle, Mail, } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div id="home">
      <HeroSection />
      <AboutSection />
      <ServicesOverview />
      <WhyChooseUs />
      {/* <RecentProjects /> */}
      <ClientTestimonials />
      <ContactSection />
    </div>
  )
}

function HeroSection() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
        // setIsOpen(false)
      }
  return (
    <section className="relative h-[100dvh] bg-white text-gray-900 flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <Badge className="mb-6 bg-orange-600 hover:bg-orange-600 shadow-md text-white cursor-pointer rounded-[30px]">
          <CheckCircle className="h-5 w-5 text-white" />
          Nigeria&apos;s Premier Water Treatment & Geotechnical Experts
        </Badge>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Professional Water Treatment {'&'} Geotechnical Solutions
        </h1>
        <p className="text-xl md:text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
          Over 20 years of experience delivering quality services across Nigeria.
          Certified professionals with state-of-the-art equipment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 cursor-pointer">
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white rounded-none" asChild>
            <a  href="https://wa.me/+2348037840713?text=Hello%20EJOR-KORE%20SERVICES%20LTD,%20I%20would%20like%20to%20inquire%20about%20your%20services." target="_blank" rel="noopener noreferrer">
              Get Expert Consultation
            </a>
          </Button>

          <Button size="lg" variant="outline" className="text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white rounded-none"
          onClick={() => scrollToSection('services')}
          >
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
            <Card key={index} className="relative pb-[70px] border-0 shadow-sm group transition-shadow cursor-pointer">
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

              </CardContent>
              <div className="absolute bottom-3 -translate-x-1/2 left-1/2 w-[90%]">
                <Button className="w-full mt-4 cursor-pointer group-hover:-translate-y-0.5 transition-all duration-300" variant="outline">
                  Learn More
                </Button>
              </div>
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
            We are Nigeria&apos;s trusted partner for water treatment and geotechnical services
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

// function RecentProjects() {
//   const projects = [
//     "/project1.jpg",
//     "/project2.jpg",
//     "/project3.jpg",
//     "/project4.jpg",
//     "/project5.jpg",
//     "/project6.jpg"
//   ]

//   return (
//     <section id="portfolio" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Projects</h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Discover our latest completed projects across Nigeria
//           </p>
//         </div>
//         <div className="grid grid-cols-3 gap-4">
//           {projects.map((imageSrc, index) => (
//             <div key={index} className="relative h-48 overflow-hidden rounded-lg">
//               <Image
//                 src={imageSrc}
//                 alt={`Project ${index + 1}`}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

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
            <Card key={index} className="shadow-sm">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">&quot;{testimonial.testimonial}&quot;</p>
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
        <div className="grid  lg:grid-cols-2 items-center justify-between">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About EJOR-KORE Services</h2>
            <p className="text-base text-gray-600 mb-6">
              Established with a vision to provide top-quality water treatment and geotechnical services
              across Nigeria, EJOR-KORE Services Ltd has become a trusted name in the industry.
            </p>
            <p className="text-base text-gray-600 mb-6">
              Our team of certified professionals brings over 20 years of combined experience,
              utilizing state-of-the-art equipment and proven methodologies to deliver exceptional results.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-orange-500" />
                <span className="text-base">Founded on expertise and reliability</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-orange-500" />
                <span className="text-base">Serving residential, commercial, and industrial clients</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-orange-500" />
                <span className="text-base">Committed to environmental sustainability</span>
              </div>
            </div>
          </div>
          <div className="relative w-full">
            <Image
              src="/hero.jpg"
              alt="EJOR-KORE Services in action"
              width={500}
              height={500}
              className="object-cover float-right"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
return (
    <section id="contact" className="py-20 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center flex-wrap mb-4">
            <h2 className="text-2xl font-bold mr-2 text-black/90">Need help?</h2>
            <span className="bg-orange-400 text-2xl font-bold px-4 text-white">Contact us</span>
          </div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Reach out to our support team for assistance.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto mt-12">
            <div className="space-y-4">

          <div className="border border-slate-200 p-8 relative hover:shadow-sm transition-shadow duration-300 cursor-pointer">
            <div className="absolute top-4 right-4 text-orange-400">+</div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 p-2 rounded-full">
                <MessageCircle className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-black/90">WhatsApp</h3>
              <Link
                href="https://wa.me/+2348037840713"
                target="_blank"
                rel="noopener noreferrer"
              >
              <p className="text-blue-600 hover:underline mb-6">+234 803 784 0713</p>
              </Link>
            </div>
          </div>

          <div className="border border-slate-200 p-8 relative hover:shadow-sm transition-shadow duration-300 cursor-pointer">
            <div className="absolute top-4 right-4 text-orange-400">+</div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 p-2 rounded-full">
                <Mail className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-black/90">Email</h3>
              <p className="text-gray-700 mb-6">ejorkoreservices@gmail.com</p>
            </div>
          </div>
            </div>

          <div className="h-[400px] md:h-auto  relative hover:shadow-sm transition-shadow duration-300">
            <div className="absolute top-4 right-4 text-orange-400">+</div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33189.18226148445!2d7.4797772824573165!3d6.442693571671848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a1dd76c32d51%3A0x422a2e081ff0e61d!2sOne%20Day%20International%20Hotel!5e0!3m2!1sen!2sng!4v1752752351572!5m2!1sen!2sng" width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
