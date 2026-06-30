import { useState, type FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { CheckCircle2 } from 'lucide-react'
import { FieldLabel, Input, Select } from '@/components/ui/Field'
import { Button } from '@/components/ui/Button'
import { useTreatments } from '@/data/treatments'

interface FormState {
  name: string
  phone: string
  treatment: string
  bestTime: string
}

const initialState: FormState = { name: '', phone: '', treatment: '', bestTime: '' }

type FormErrors = Partial<Record<keyof FormState, string>>

export function ContactForm() {
  const { t } = useTranslation()
  const treatments = useTreatments()
  const [values, setValues] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  function validate(formValues: FormState): FormErrors {
    const validationErrors: FormErrors = {}
    if (!formValues.name.trim()) validationErrors.name = t('contact.errors.name')
    if (!formValues.phone.trim()) {
      validationErrors.phone = t('contact.errors.phone')
    } else if (!/^[\d()\s-]{8,}$/.test(formValues.phone)) {
      validationErrors.phone = t('contact.errors.phoneInvalid')
    }
    if (!formValues.treatment) validationErrors.treatment = t('contact.errors.treatment')
    if (!formValues.bestTime) validationErrors.bestTime = t('contact.errors.bestTime')
    return validationErrors
  }

  function handleChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }))
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true)
      setValues(initialState)
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-accent-200 bg-accent-50 p-8 text-center">
        <CheckCircle2 className="mx-auto text-accent-600" size={40} />
        <h3 className="mt-4 text-xl font-semibold text-ink-800">{t('contact.form.successTitle')}</h3>
        <p className="mt-2 text-ink-600">{t('contact.form.successText')}</p>
        <Button type="button" variant="outline" size="sm" className="mt-6" onClick={() => setSubmitted(false)}>
          {t('contact.form.sendNew')}
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <FieldLabel label={t('contact.form.nameLabel')} htmlFor="name" required error={errors.name}>
        <Input
          id="name"
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={(e) => handleChange('name', e.target.value)}
          placeholder={t('contact.form.namePlaceholder')}
        />
      </FieldLabel>

      <FieldLabel label={t('contact.form.phoneLabel')} htmlFor="phone" required error={errors.phone}>
        <Input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={values.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          placeholder={t('contact.form.phonePlaceholder')}
        />
      </FieldLabel>

      <FieldLabel label={t('contact.form.treatmentLabel')} htmlFor="treatment" required error={errors.treatment}>
        <Select
          id="treatment"
          name="treatment"
          value={values.treatment}
          onChange={(e) => handleChange('treatment', e.target.value)}
        >
          <option value="">{t('contact.form.treatmentPlaceholder')}</option>
          {treatments.map((item) => (
            <option key={item.slug} value={item.name}>
              {item.name}
            </option>
          ))}
          <option value="general">{t('contact.form.generalOption')}</option>
        </Select>
      </FieldLabel>

      <FieldLabel label={t('contact.form.bestTimeLabel')} htmlFor="bestTime" required error={errors.bestTime}>
        <Select
          id="bestTime"
          name="bestTime"
          value={values.bestTime}
          onChange={(e) => handleChange('bestTime', e.target.value)}
        >
          <option value="">{t('contact.form.bestTimePlaceholder')}</option>
          <option value="morning">{t('contact.form.morning')}</option>
          <option value="afternoon">{t('contact.form.afternoon')}</option>
          <option value="evening">{t('contact.form.evening')}</option>
        </Select>
      </FieldLabel>

      <Button type="submit" variant="accent" size="lg" className="w-full">
        {t('contact.form.submit')}
      </Button>
    </form>
  )
}
