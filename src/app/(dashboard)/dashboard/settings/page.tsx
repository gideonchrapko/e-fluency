import { auth } from '@/server/auth';
import { redirect } from 'next/navigation';

export default async function SettingsPage() {
  const session = await auth();
  console.log(session);

  if (!session) {
    redirect('/login');
  }

  return <div>Settings</div>;
}
