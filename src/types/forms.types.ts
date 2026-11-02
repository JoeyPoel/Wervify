export interface DemoRequestPayload {
  companyName: string;
  vacancyTitle: string;
  salaryRange?: string;
  notes?: string;
  email: string;
  phone?: string;
  gdprConsent: boolean;
}

export interface ContactMessagePayload {
  name: string;
  email: string;
  company?: string;
  message: string;
  gdprConsent: boolean;
}

export interface NewsletterPayload {
  email: string;
}

export interface ApiResponse<T = any> {
  ok: boolean;
  message?: string;
  data?: T;
  error?: string;
  id?: string;
}
