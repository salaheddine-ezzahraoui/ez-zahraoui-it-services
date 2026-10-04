export interface NavLink {
  label: string
  path: string
}

export interface Service {
  id: string
  icon: string
  title: string
  shortDescription: string
  benefits: string[]
  useCase: string
  included?: string[]
  notIncluded?: string[]
}

export interface ProcessStep {
  number: number
  title: string
  description: string
}

export interface Project {
  id: string
  title: string
  status: 'Projet technique' | 'Lab technique' | 'Projet en développement' | 'Projet personnel' | 'Projet client autorisé'
  description: string
  technologies: string[]
  features: string[]
}

export interface ContactFormData {
  fullName: string
  company: string
  email: string
  phone: string
  service: string
  computers: string
  message: string
  consent: boolean
}

export interface FormErrors {
  fullName?: string
  email?: string
  phone?: string
  service?: string
  message?: string
  consent?: string
}
