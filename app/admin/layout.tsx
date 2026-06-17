import { AuthProvider } from "@/lib/auth-context";
import { ConsoleShell } from "@/components/admin/console-shell";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ConsoleShell>{children}</ConsoleShell>
    </AuthProvider>
  );
}
