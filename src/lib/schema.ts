import { clinicInfo } from '@/data/clinicInfo'

export function getDentistSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: clinicInfo.name,
    image: 'https://www.odontolab.com.br/og-image.jpg',
    '@id': 'https://www.odontolab.com.br/',
    url: 'https://www.odontolab.com.br/',
    telephone: clinicInfo.phone,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: clinicInfo.street,
      addressLocality: clinicInfo.city,
      addressRegion: clinicInfo.state,
      postalCode: clinicInfo.zip,
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: clinicInfo.geo.lat,
      longitude: clinicInfo.geo.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '08:00',
        closes: '13:00',
      },
    ],
    sameAs: [clinicInfo.instagram, clinicInfo.facebook],
  }
}

export function getBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://www.odontolab.com.br${item.path}`,
    })),
  }
}

export function getFaqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function getMedicalProcedureSchema(name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name,
    description,
    url: `https://www.odontolab.com.br${path}`,
    performer: {
      '@type': 'Dentist',
      name: 'Odonto Lab',
    },
  }
}
