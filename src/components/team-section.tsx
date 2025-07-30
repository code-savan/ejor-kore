"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface TeamMember {
  name: string
  position: string
  image: string
  fullBio: string[]
}

const teamMembers: TeamMember[] = [
  {
    name: "Dr. Ejiofor Chinedu Ezike",
    position: "CEO Ejor-kore Services Nig LTD",
    image: "/ejiofor.jpg",
    fullBio: [
      "CEO Ejor-kore services Nig LTD",
      "Geologists and geophysicist",
      "Certified member of the fellow in:",
      "1. Council of Nigeria Mining Engineers and geoscientists (COMEG)",
      "2. Nigerian Mining and Geosciences society (NMGS)",
      "3. Nigeria association of petroleum explorationists (NAPE)"
    ]
  },
  {
    name: "Dr. Lotanna Okwesili",
    position: "Consultant Chemist",
    image: "/lotanna.jpeg",
    fullBio: [
      "Dr. Lotanna Okwesili (PhD, MCSN, FIPMLD) is a Consultant Chemist at Ejor-kore Services Nigeria LTD.",
      "An Industrial Chemist and researcher whose area of specialty is in Analytical/Environmental Chemistry.",
      "Dr. Okwesili holds a BSc in Chemistry, PGDE (NAU), MSc and PhD in Analytical/Environmental Chemistry.",
      "He is also a certified member of Chemical Society of Nigeria. His research interest spans water and soil analysis. Environmental cleanup and remediation using advanced and emerging technologies."
    ]
  },
  {
    name: "Engr. Ezike Ikechukwu Emmanuel",
    position: "Project Lead Engineer",
    image: "/ezike.jpeg",
    fullBio: [
      "Project lead engineer, ejor-kore service Nig LTD.",
      "We design and supervise water recticulation and overhead, treatment plant.",
      "Structural/water consultant, NDELA brack Enugu.",
      "Design, supervision and construction of all civil works and water works",
      "Membership of Nigeria society of engineers",
      "Membership of council for regulations of engineering practice in Nigeria (COREN)"
    ]
  },
  {
    name: "Dr. Chinenye Florence Onyeabor",
    position: "Consultant",
    image: "/chinenye.jpeg",
    fullBio: [
      "Consultant to Ejor-kore services Nig LTD.",
      "Applied Geochemist, Mineral Exploration and Environmental Geochemistry"
    ]
  }
]

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = (member: TeamMember) => {
    setSelectedMember(member)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedMember(null)
  }

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated professionals behind EJOR-KORE&apos;s success
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <Card key={index} className="relative pb-[70px] border-0 shadow-sm group transition-shadow hover:shadow-md cursor-pointer">
              <CardHeader className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <CardDescription>{member.position}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {member.fullBio[0]}
                </p>
              </CardContent>
              <div className="absolute bottom-3 -translate-x-1/2 left-1/2 w-[90%]">
                <Button
                  className="w-full mt-4 cursor-pointer group-hover:-translate-y-0.5 transition-all duration-300"
                  variant="outline"
                  onClick={() => handleOpenModal(member)}
                >
                  Read More
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <Dialog open={isModalOpen} onOpenChange={handleCloseModal}>
          {selectedMember && (
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                  <Image
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <DialogTitle className="text-2xl text-center">{selectedMember.name}</DialogTitle>
                <DialogDescription className="text-center text-lg">
                  {selectedMember.position}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-6 space-y-4">
                {selectedMember.fullBio.map((paragraph, index) => (
                  <p key={index} className="text-gray-700">
                    {paragraph}
                  </p>
                ))}
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  )
}
