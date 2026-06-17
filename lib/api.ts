const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

async function request<T>(path: string, init?: RequestInit): Promise<T | null> {
  if (!BASE_URL) return null;
  try {
    const res = await fetch(`${BASE_URL}${path}`, {
      ...init,
      headers: { "Content-Type": "application/json", ...init?.headers },
    });
    if (!res.ok) throw new Error(`API ${path} responded ${res.status}`);
    return (await res.json()) as T;
  } catch (err) {
    console.warn(`[api] falling back to local data for ${path}:`, err);
    return null;
  }
}

async function adminRequest<T>(path: string, token: string, init?: RequestInit): Promise<T | null> {
  if (!BASE_URL) return null;
  const res = await fetch(`${BASE_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...init?.headers,
    },
  });
  if (res.status === 401) throw new Error("UNAUTHORIZED");
  if (!res.ok) throw new Error(`API ${path} responded ${res.status}`);
  return (await res.json()) as T;
}

// ─── Public endpoints ────────────────────────────────────────────────────────

export interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  vehicle: string;
  message: string;
}

export async function submitContactForm(payload: ContactPayload): Promise<boolean> {
  const result = await request<{ ok: boolean }>("/contact", {
    method: "POST",
    body: JSON.stringify(payload),
  });
  return result?.ok ?? true;
}

export interface BookingPayload {
  serviceId: string;
  vehicleId: string;
  date: string | null;
  time: string | null;
  extraIds: string[];
  customer?: { name?: string; email?: string; phone?: string };
}

export interface BookingResult {
  id: string;
  subtotal: number;
  deposit: number;
  balance: number;
}

export async function createBooking(payload: BookingPayload): Promise<BookingResult | null> {
  return request<BookingResult>("/bookings", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export interface PaymentIntentResult {
  clientSecret: string;
  amount: number;
}

export async function createPaymentIntent(bookingId: string): Promise<PaymentIntentResult | null> {
  return request<PaymentIntentResult>(`/bookings/${bookingId}/payment-intent`, { method: "POST" });
}

export async function confirmPayment(bookingId: string): Promise<boolean> {
  const result = await request<{ ok: boolean }>(`/bookings/${bookingId}/confirm`, { method: "POST" });
  return result?.ok ?? true;
}

// ─── Auth ────────────────────────────────────────────────────────────────────

export interface LoginResult {
  token: string;
  user: { name: string; email: string };
}

export async function adminLogin(email: string, password: string): Promise<LoginResult | null> {
  return request<LoginResult>("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}

export async function adminLogout(token: string): Promise<void> {
  await adminRequest<{ ok: boolean }>("/admin/logout", token, { method: "POST" }).catch(() => {});
}

// ─── Admin — read ────────────────────────────────────────────────────────────

export async function getAdminDashboard(token: string) {
  return adminRequest<unknown>("/admin/dashboard", token);
}

export async function getAdminAppointments(token: string) {
  return adminRequest<unknown[]>("/admin/appointments", token);
}

export async function getAdminCustomers(token: string) {
  return adminRequest<unknown[]>("/admin/customers", token);
}

export async function getAdminServices(token: string) {
  return adminRequest<unknown[]>("/admin/services", token);
}

export async function getAdminReviews(token: string) {
  return adminRequest<unknown[]>("/admin/reviews", token);
}

export async function getAdminSurveys(token: string) {
  return adminRequest<unknown>("/admin/surveys", token);
}

export async function getAdminSettings(token: string) {
  return adminRequest<unknown>("/admin/settings", token);
}

// ─── Admin — write ───────────────────────────────────────────────────────────

export async function updateAppointment(token: string, id: number, data: Record<string, unknown>) {
  return adminRequest<unknown>(`/admin/appointments/${id}`, token, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export async function updateService(token: string, id: number, data: Record<string, unknown>) {
  return adminRequest<unknown>(`/admin/services/${id}`, token, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export async function updateReview(token: string, id: number, data: Record<string, unknown>) {
  return adminRequest<unknown>(`/admin/reviews/${id}`, token, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export async function updateSettings(token: string, data: Record<string, unknown>) {
  return adminRequest<unknown>("/admin/settings", token, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export async function uploadGalleryImage(token: string, data: Record<string, unknown>) {
  return adminRequest<unknown>("/admin/gallery", token, {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function deleteGalleryImage(token: string, id: number) {
  return adminRequest<unknown>(`/admin/gallery/${id}`, token, { method: "DELETE" });
}
