"use client";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useMemo, useState } from 'react';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
  artist?: string;
  services: string[];
  url?: string;
  agree: boolean;
  company?: string;
  country?: string;
  language?: string;
  budget?: string;
  deadline?: string;
  purpose?: string;
  target?: string;
  kpis?: string;
  nda?: boolean;
};

const init: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
  artist: '',
  services: [],
  url: '',
  agree: false,
  company: '',
  country: '',
  language: 'EN',
  budget: '',
  deadline: '',
  purpose: '',
  target: '',
  kpis: '',
  nda: false
};

export function ContactForm({ thankyou }: { thankyou?: string }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState<FormState>(init);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const valid = useMemo(() => {
    const e: Record<string, string> = {};
    if (!form.name) e.name = '必須項目です';
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = '正しいメール形式で入力してください';
    if (!form.subject) e.subject = '必須項目です';
    if (!form.message) e.message = '必須項目です';
    if (!form.agree) e.agree = '同意が必要です';
    if (!form.company) e.company = '会社名を入力してください';
    if (!form.country) e.country = '国/地域を入力してください';
    if (!form.budget) e.budget = '予算帯を選択してください';
    setErrors(e);
    return Object.keys(e).length === 0;
  }, [form]);

  function onChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }
  function toggleService(s: string) {
    setForm((f) => ({ ...f, services: f.services.includes(s) ? f.services.filter((x) => x !== s) : [...f.services, s] }));
  }
  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!valid) return;
    setTimeout(() => setSent(true), 400);
  }

  if (sent) return <p className="text-foreground/90">{thankyou || '送信ありがとうございました。担当より折り返しご連絡します。（モック送信）'}</p>;

  return (
    <form onSubmit={onSubmit} className="grid gap-4 md:grid-cols-2">
      <div className="md:col-span-1"><label className="mb-1 block text-sm">氏名 *</label><Input aria-invalid={!!errors.name} value={form.name} onChange={(e) => onChange('name', e.target.value)} />{errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}</div>
      <div className="md:col-span-1"><label className="mb-1 block text-sm">メール *</label><Input type="email" aria-invalid={!!errors.email} value={form.email} onChange={(e) => onChange('email', e.target.value)} />{errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}</div>
      <div className="md:col-span-1"><label className="mb-1 block text-sm">会社名 *</label><Input aria-invalid={!!errors.company} value={form.company} onChange={(e) => onChange('company', e.target.value)} />{errors.company && <p className="mt-1 text-xs text-red-400">{errors.company}</p>}</div>
      <div className="md:col-span-1"><label className="mb-1 block text-sm">国・地域 *</label><Input aria-invalid={!!errors.country} value={form.country} onChange={(e) => onChange('country', e.target.value)} />{errors.country && <p className="mt-1 text-xs text-red-400">{errors.country}</p>}</div>
      <div className="md:col-span-1"><label className="mb-1 block text-sm">言語</label><select className="h-10 w-full rounded-md border border-border bg-transparent px-3 text-sm" value={form.language} onChange={(e) => onChange('language', e.target.value)}><option value="EN">EN</option><option value="JA">JA</option></select></div>
      <div className="md:col-span-1"><label className="mb-1 block text-sm">予算帯 *</label><select className="h-10 w-full rounded-md border border-border bg-transparent px-3 text-sm" aria-invalid={!!errors.budget} value={form.budget} onChange={(e) => onChange('budget', e.target.value)}><option value="">選択してください</option><option value="< $2k">&lt; $2k</option><option value="$2k–$5k">$2k–$5k</option><option value="$5k–$15k">$5k–$15k</option><option value="> $15k">&gt; $15k</option></select>{errors.budget && <p className="mt-1 text-xs text-red-400">{errors.budget}</p>}</div>
      <div className="md:col-span-1"><label className="mb-1 block text-sm">納期</label><Input type="date" value={form.deadline} onChange={(e) => onChange('deadline', e.target.value)} /></div>
      <div className="md:col-span-2"><label className="mb-1 block text-sm">件名 *</label><Input aria-invalid={!!errors.subject} value={form.subject} onChange={(e) => onChange('subject', e.target.value)} />{errors.subject && <p className="mt-1 text-xs text-red-400">{errors.subject}</p>}</div>
      <div className="md:col-span-1"><label className="mb-1 block text-sm">目的</label><Input value={form.purpose} onChange={(e) => onChange('purpose', e.target.value)} /></div>
      <div className="md:col-span-1"><label className="mb-1 block text-sm">ターゲット市場</label><Input value={form.target} onChange={(e) => onChange('target', e.target.value)} /></div>
      <div className="md:col-span-1"><label className="mb-1 block text-sm">アーティスト名</label><Input value={form.artist} onChange={(e) => onChange('artist', e.target.value)} /></div>
      <div className="md:col-span-1"><label className="mb-1 block text-sm">参考URL</label><Input type="url" value={form.url} onChange={(e) => onChange('url', e.target.value)} /></div>
      <div className="md:col-span-2"><label className="mb-1 block text-sm">成果KPI</label><Input placeholder="例: ad recall, brand lift, DAU など" value={form.kpis} onChange={(e) => onChange('kpis', e.target.value)} /></div>
      <fieldset className="md:col-span-2"><legend className="mb-1 block text-sm">メニュー</legend><div className="flex flex-wrap gap-4 text-sm">{['Recording','Mixing','Mastering','Full Production'].map((s) => (<label key={s} className="flex items-center gap-2"><input type="checkbox" className="h-4 w-4" checked={form.services.includes(s)} onChange={() => toggleService(s)} />{s}</label>))}</div></fieldset>
      <div className="md:col-span-2"><label className="mb-1 block text-sm">本文 *</label><Textarea aria-invalid={!!errors.message} value={form.message} onChange={(e) => onChange('message', e.target.value)} />{errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}</div>
      <div className="flex items-center gap-2 md:col-span-2"><input id="nda" type="checkbox" className="h-4 w-4" checked={form.nda} onChange={(e) => onChange('nda', e.target.checked)} /><label htmlFor="nda" className="text-sm">NDA（秘密保持契約）を希望する</label></div>
      <div className="flex items-center gap-2 md:col-span-2"><input id="agree" type="checkbox" className="h-4 w-4" checked={form.agree} onChange={(e) => onChange('agree', e.target.checked)} /><label htmlFor="agree" className="text-sm">送信にあたり、ポリシーに同意します *</label>{errors.agree && <p className="ml-2 text-xs text-red-400">{errors.agree}</p>}</div>
      <div className="md:col-span-2"><Button type="submit">送信（モック）</Button></div>
    </form>
  );
}

