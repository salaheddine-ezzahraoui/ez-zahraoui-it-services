import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { Send, CheckCircle2, Phone, Mail, MessageCircle, Linkedin, MapPin, AlertCircle } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import SEO from '../components/ui/SEO'
import Section from '../components/ui/Section'
import Button from '../components/ui/Button'
import { CONTACT, SERVICES } from '../data/content'
import type { ContactFormData, FormErrors } from '../types'

const initialForm: ContactFormData = {
  fullName: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  computers: '',
  message: '',
  consent: false,
}

export default function ContactPage() {
  const { t } = useLanguage()
  const [form, setForm] = useState<ContactFormData>(initialForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    const fieldValue =
      type === 'checkbox' ? (e.target as HTMLInputElement).checked : value

    setForm((prev) => ({ ...prev, [name]: fieldValue }))

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!form.fullName.trim()) {
      newErrors.fullName = t('contactPage.error.fullName')
    }

    if (!form.email.trim()) {
      newErrors.email = t('contactPage.error.email')
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = t('contactPage.error.email')
    }

    if (!form.phone.trim()) {
      newErrors.phone = t('contactPage.error.phone')
    } else if (!/^[+]?[\d\s.-]{8,}$/.test(form.phone)) {
      newErrors.phone = t('contactPage.error.phone')
    }

    if (!form.service) {
      newErrors.service = t('contactPage.error.service')
    }

    if (!form.message.trim()) {
      newErrors.message = t('contactPage.error.message')
    } else if (form.message.trim().length < 10) {
      newErrors.message = t('contactPage.error.message')
    }

    if (!form.consent) {
      newErrors.consent = t('contactPage.error.consent')
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validate()) return

    setSubmitting(true)

    // TODO: Connect this form to an email service or backend API.
    // Example with fetch:
    //
    // const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT
    // if (endpoint) {
    //   const response = await fetch(endpoint, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(form),
    //   })
    //   if (!response.ok) throw new Error('Send failed')
    // }

    await new Promise((resolve) => setTimeout(resolve, 800))

    setSubmitting(false)
    setSubmitted(true)
  }

  const handleReset = () => {
    setForm(initialForm)
    setErrors({})
    setSubmitted(false)
  }

  return (
    <>
      <SEO
        title="Contact | EZ-ZAHRAOUI IT SERVICES"
        description="Contact EZ-ZAHRAOUI IT SERVICES to request a diagnostic or quote. On-site intervention in Tangier and remote assistance."
      />

      {/* Page header */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="container-site">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">{t('contactPage.title')}</h1>
          <p className="mt-4 max-w-2xl text-base text-white/60 sm:text-lg">
            {t('contactPage.subtitle')}
          </p>
        </div>
      </section>

      <Section className="bg-surface">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Contact info sidebar */}
          <div className="lg:col-span-2">
            <div className="rounded-lg border border-gray-100 bg-white p-6">
              <h2 className="text-lg font-semibold text-navy">{t('contactPage.title')}</h2>
              <p className="mt-2 text-sm text-ink/60">
                {t('contactPage.responseTime')}
              </p>

              <ul className="mt-6 space-y-4">
                <li>
                  <a
                    href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-3 text-sm text-ink/70 transition-colors hover:text-azure"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-md bg-azure/10 text-azure">
                      <Phone className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block font-medium text-navy">{t('contactPage.phone')}</span>
                      {CONTACT.phone}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="flex items-center gap-3 text-sm text-ink/70 transition-colors hover:text-azure"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-md bg-azure/10 text-azure">
                      <Mail className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block font-medium text-navy">{t('contactPage.email')}</span>
                      {CONTACT.email}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-ink/70 transition-colors hover:text-azure"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-md bg-emerald-100 text-emerald-600">
                      <MessageCircle className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block font-medium text-navy">{t('contactPage.whatsapp')}</span>
                      {t('contactPage.whatsappText')}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-ink/70 transition-colors hover:text-azure"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-md bg-azure/10 text-azure">
                      <Linkedin className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block font-medium text-navy">{t('contactPage.linkedin')}</span>
                      {t('contactPage.linkedinText')}
                    </span>
                  </a>
                </li>
              </ul>

              <div className="mt-6 rounded-md bg-surface p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-navy">
                  <MapPin className="h-4 w-4 text-azure" />
                  {t('contactPage.serviceArea')}
                </div>
                <p className="mt-1 text-sm text-ink/60">
                  {t('contactPage.serviceAreaText')}
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-lg border border-gray-100 bg-white p-6 sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center py-12 text-center">
                  <CheckCircle2 className="h-16 w-16 text-emerald-500" />
                  <h2 className="mt-4 text-2xl font-bold text-navy">{t('contactPage.successTitle')}</h2>
                  <p className="mt-2 max-w-md text-sm text-ink/60">
                    {t('contactPage.successText')}
                  </p>
                  <div className="mt-6">
                    <Button variant="secondary" onClick={handleReset}>
                      {t('contactPage.sendAnother')}
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="text-lg font-semibold text-navy">{t('contactPage.formTitle')}</h2>
                  <p className="mt-2 text-sm text-ink/60">
                    {t('contactPage.formSubtitle')}
                  </p>

                  <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                    {/* Full name */}
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-navy">
                        {t('contactPage.fullName')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        className={`mt-1.5 block w-full rounded-md border px-4 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:border-azure focus:outline-none focus:ring-1 focus:ring-azure ${
                          errors.fullName ? 'border-red-400' : 'border-gray-200'
                        }`}
                        placeholder={t('contactPage.fullNamePlaceholder')}
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                      />
                      {errors.fullName && (
                        <p id="fullName-error" className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
                          <AlertCircle className="h-3.5 w-3.5" />
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Company + Email row */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-navy">
                          {t('contactPage.company')} <span className="text-ink/40">(optionnel)</span>
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          className="mt-1.5 block w-full rounded-md border border-gray-200 px-4 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:border-azure focus:outline-none focus:ring-1 focus:ring-azure"
                          placeholder={t('contactPage.companyPlaceholder')}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-navy">
                          {t('contactPage.emailLabel')} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          className={`mt-1.5 block w-full rounded-md border px-4 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:border-azure focus:outline-none focus:ring-1 focus:ring-azure ${
                            errors.email ? 'border-red-400' : 'border-gray-200'
                          }`}
                          placeholder={t('contactPage.emailPlaceholder')}
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                        {errors.email && (
                          <p id="email-error" className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
                            <AlertCircle className="h-3.5 w-3.5" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Phone + Service row */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-navy">
                          {t('contactPage.phoneLabel')} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          className={`mt-1.5 block w-full rounded-md border px-4 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:border-azure focus:outline-none focus:ring-1 focus:ring-azure ${
                            errors.phone ? 'border-red-400' : 'border-gray-200'
                          }`}
                          placeholder={t('contactPage.phonePlaceholder')}
                          aria-invalid={!!errors.phone}
                          aria-describedby={errors.phone ? 'phone-error' : undefined}
                        />
                        {errors.phone && (
                          <p id="phone-error" className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
                            <AlertCircle className="h-3.5 w-3.5" />
                            {errors.phone}
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-navy">
                          {t('contactPage.service')} <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className={`mt-1.5 block w-full rounded-md border px-4 py-2.5 text-sm text-ink focus:border-azure focus:outline-none focus:ring-1 focus:ring-azure ${
                            errors.service ? 'border-red-400' : 'border-gray-200'
                          }`}
                          aria-invalid={!!errors.service}
                          aria-describedby={errors.service ? 'service-error' : undefined}
                        >
                          <option value="">{t('contactPage.servicePlaceholder')}</option>
                          {SERVICES.map((s) => (
                            <option key={s.id} value={s.title}>
                              {t(`services.${s.id}.title`)}
                            </option>
                          ))}
                          <option value="Autre">Autre</option>
                        </select>
                        {errors.service && (
                          <p id="service-error" className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
                            <AlertCircle className="h-3.5 w-3.5" />
                            {errors.service}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Number of computers */}
                    <div>
                      <label htmlFor="computers" className="block text-sm font-medium text-navy">
                        {t('contactPage.computers')} <span className="text-ink/40">(optionnel)</span>
                      </label>
                      <select
                        id="computers"
                        name="computers"
                        value={form.computers}
                        onChange={handleChange}
                        className="mt-1.5 block w-full rounded-md border border-gray-200 px-4 py-2.5 text-sm text-ink focus:border-azure focus:outline-none focus:ring-1 focus:ring-azure"
                      >
                        <option value="">{t('contactPage.computersPlaceholder')}</option>
                        <option value="1-5">1-5</option>
                        <option value="6-10">6-10</option>
                        <option value="11-20">11-20</option>
                        <option value="21-50">21-50</option>
                        <option value="50+">50+</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-navy">
                        {t('contactPage.message')} <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        className={`mt-1.5 block w-full rounded-md border px-4 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:border-azure focus:outline-none focus:ring-1 focus:ring-azure ${
                          errors.message ? 'border-red-400' : 'border-gray-200'
                        }`}
                        placeholder={t('contactPage.messagePlaceholder')}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                      />
                      {errors.message && (
                        <p id="message-error" className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
                          <AlertCircle className="h-3.5 w-3.5" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Consent */}
                    <div>
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          id="consent"
                          name="consent"
                          checked={form.consent}
                          onChange={handleChange}
                          className="mt-0.5 h-4 w-4 rounded border-gray-300 text-azure focus:ring-azure"
                          aria-invalid={!!errors.consent}
                          aria-describedby={errors.consent ? 'consent-error' : undefined}
                        />
                        <label htmlFor="consent" className="text-sm text-ink/60">
                          {t('contactPage.consent')}{' '}
                          <a href="/privacy-policy" className="text-azure underline hover:text-azure-dark">
                            {t('contactPage.consentLink')}
                          </a>{' '}
                          {t('contactPage.consentEnd')} <span className="text-red-500">*</span>
                        </label>
                      </div>
                      {errors.consent && (
                        <p id="consent-error" className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
                          <AlertCircle className="h-3.5 w-3.5" />
                          {errors.consent}
                        </p>
                      )}
                    </div>

                    {/* Privacy notice */}
                    <p className="text-xs text-ink/40">
                      {t('contactPage.privacy')}
                    </p>

                    {/* Submit */}
                    <div>
                      <Button type="submit" variant="primary" disabled={submitting} className="w-full sm:w-auto">
                        {submitting ? (
                          <>
                            <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            {t('contactPage.sending')}
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            {t('contactPage.send')}
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
