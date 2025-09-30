'use client'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import Link from 'next/link'

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="card h-full flex flex-col"
    >
      {/* Image Placeholder */}
      <div className="w-full h-48 bg-gradient-to-br from-primary to-secondary rounded-lg mb-4 flex items-center justify-center text-white text-2xl font-bold">
        {project.title.substring(0, 2)}
      </div>

      {/* Badge */}
      <div className="flex gap-2 mb-3">
        <span className="text-xs bg-blue-100 text-primary px-3 py-1 rounded-full font-medium">
          {project.category}
        </span>
        <span className="text-xs bg-purple-100 text-purple-600 px-3 py-1 rounded-full font-medium">
          {project.type}
        </span>
        <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
          {project.year}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold mb-2 text-gray-900">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 mb-4 flex-grow">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.slice(0, 4).map((tech) => (
          <span 
            key={tech}
            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span className="text-xs text-gray-500">
            +{project.technologies.length - 4}
          </span>
        )}
      </div>

      {/* Results if available */}
      {project.results && (
        <div className="mb-4">
          {project.results.slice(0, 2).map((result, idx) => (
            <p key={idx} className="text-sm text-green-600 font-medium mb-1">
              ✓ {result}
            </p>
          ))}
        </div>
      )}

      {/* Links */}
      <div className="flex gap-3 mt-auto pt-4 border-t">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
        >
          <FiGithub /> Code
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
          >
            <FiExternalLink /> Demo
          </a>
        )}
      </div>
    </motion.div>
  )
}