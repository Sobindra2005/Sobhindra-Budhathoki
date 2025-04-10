import { Card, CardContent } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Briefcase, Calendar } from 'lucide-react'
import { PiImageSquareThin } from 'react-icons/pi'

const experiences = [
    {
    title: 'Junior JavaScript Developer',
    company: 'Mystic Code Pvt. Ltd.',
    duration: 'Feb 2025 - Present',
    description: 'Building interactive 2D games using Phaser and Node.js. Collaborating closely with the development team to design game mechanics and ensure smooth gameplay. Actively participating in team discussions and code reviews to enhance project quality and delivery.',
    type: 'Full-time',
    location: 'Machhapokhari, Kathmandu, Bagmati, Nepal – On-site',
    skills: ['Node.js', 'Phaser', '2D Game Development', 'Teamwork', 'Collaborative Development'],
},
    {
        title: 'Frontend Developer',
        company: 'Meerako Services Pvt. Ltd.',
        duration: 'Sep 2024 - Dec 2024',
        description: 'Developed dynamic and responsive frontend components using Next.js and TypeScript. Collaborated with the backend team to implement and test APIs.',
        type: 'Internship',
        location: 'Kathmandu, Bagmati, Nepal – On-site',
        skills: ['Next.js', 'TypeScript',"Docker basics","more" ],
    },
    {
        title: 'Executive Member',
        company: 'Open Source ASCOL Circle (OSAC)',
        duration: 'Dec 2024 - Present',
        description: 'Leading initiatives to promote open-source projects and activities. Collaborating with teams to organize events and manage ongoing projects.',
        type: 'Part-time',
    },
    {
        title: 'General Member',
        company: 'Open Source ASCOL Circle (OSAC)',
        duration: 'Oct 2024 - Dec 2024',
        description: 'Participated in workshops and team-building activities. Contributed to project planning and community engagement.',
    },
]

const projects = [
    {
        title: 'Jiffy Hackanthon 2024',
        role: 'Backend Developer, Data fetching',
        description: 'Contributed backend development  ensuring smooth integration with the expo.',
        outcome: ' Successfully made it to Top 5',
    },
    {
        title: 'Datathon 2024',
        description: 'First hackathon experience; observed and learned from other participants. Focused on understanding the workflow of hackathons for future contributions.',
    },
    {
        title: 'MBMC IdeaX 2024',
        role: 'Backend Developer, Project Manager',
        description: 'Contributed backend development expertise, ensuring smooth integration with the frontend. Worked closely with team members to manage project timelines and deliverables.',
        outcome: 'Platform awarded Track Winner in Agritech for the innovative "Agro Sikshya" project.',
    },
    {
        title: 'ASCOL Hackfest 2024',
        role: 'Team Leader, Backend Developer, Project Manager',
        description: 'Successfully led the team to complete a project within the stipulated timeline. Designed the backend architecture and contributed to project coordination.',
    }
]

export default function ExperienceTimeline() {
    return (
        <div className="space-y-8 sm:space-y-12">
            <section>
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Work Experience</h2>
                <div className="space-y-4 sm:space-y-8">
                    {experiences.map((experience, index) => (
                        <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors duration-200">
                            <CardContent className="p-4 sm:p-6">
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 sm:mb-4">
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-semibold">{experience.title}</h3>
                                        <p className="text-gray-400 flex items-center mt-1 text-sm sm:text-base">
                                            <Briefcase className="mr-2 h-4 w-4" />
                                            {experience.company}
                                        </p>
                                    </div>
                                    <p className="text-gray-400 flex items-center mt-2 sm:mt-0 text-sm sm:text-base">
                                        <Calendar className="mr-2 h-4 w-4" />
                                        {experience.duration}
                                    </p>
                                </div>
                                <p className="text-gray-300 mb-2 sm:mb-4 text-sm sm:text-base">{experience.description}</p>
                                {experience.type && (
                                    <Badge variant="secondary" className="bg-gray-700 text-gray-200 mb-2 text-xs sm:text-sm">
                                        {experience.type}
                                    </Badge>
                                )}
                                {experience.location && (
                                    <p className="text-gray-400 text-xs sm:text-sm mb-2">{experience.location}</p>
                                )}
                                {experience.skills && (
                                    <div className="flex flex-wrap gap-2">
                                        {experience.skills.map((skill, skillIndex) => (
                                            <Badge key={skillIndex} variant="outline" className="bg-gray-700 text-gray-200 text-xs sm:text-sm">
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
            <section>
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Hackathons </h2>
                <div className="space-y-4 sm:space-y-8">
                    {projects.map((project, index) => (
                        <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors duration-200">
                            <CardContent className="p-4 sm:p-6">
                                <h3 className="text-lg sm:text-xl font-semibold mb-2 flex items-center justify-between">{project.title} <a href={`/Hackanthons/${project.title}`} className="cursor-pointer p-2   hover:rounded-full hover:bg-gray-700  "><PiImageSquareThin /></a></h3>
                                {project.role && (
                                    <p className="text-gray-400 mb-2 text-sm sm:text-base">
                                        <strong>Role:</strong> {project.role}
                                    </p>
                                )}
                                <p className="text-gray-300 mb-2 text-sm sm:text-base">{project.description}</p>
                                {project.outcome && (
                                    <p className="text-gray-300 italic text-sm sm:text-base">
                                        <strong>Outcome:</strong> {project.outcome}
                                    </p>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    )
}

