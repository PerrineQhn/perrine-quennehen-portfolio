'use client'
import { motion } from 'framer-motion'
import { experiences } from '@/data/experiences'

export default function ExperienceTimeline() {
  return (
    <div className="max-w-5xl mx-auto">
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          className="relative pl-8 pb-12 border-l-2 border-primary last:pb-0"
        >
          {/* Timeline dot */}
          <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>

          {/* Content */}
          <div className="card">
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {exp.title}
                </h3>
                <p className="text-lg text-primary font-semibold">
                  {exp.company} • {exp.location}
                </p>
              </div>
              <div className="flex gap-2">
                <span className="bg-blue-100 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  {exp.period}
                </span>
                <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium">
                  {exp.type}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-6 italic">{exp.description}</p>

            {/* Achievements */}
            <div className="space-y-6">
              {exp.achievements.map((achievement, idx) => (
                <div key={idx} className="border-l-4 border-blue-200 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 mb-3">
                    {achievement.description}
                  </p>

                  {/* Results */}
                  {achievement.results && (
                    <div className="mb-3">
                      {achievement.results.map((result, ridx) => (
                        <p key={ridx} className="text-sm text-green-600 font-medium mb-1">
                          ✓ {result}
                        </p>
                      ))}
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {achievement.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="mt-6 pt-6 border-t">
              <p className="text-sm text-gray-600 mb-2">Compétences développées :</p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm bg-blue-50 text-primary px-3 py-1 rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}