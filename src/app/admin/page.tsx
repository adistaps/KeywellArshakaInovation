'use client'

import { useMemo, useState } from 'react'
import { BarChart3, Bell, ChevronDown, FileText, LayoutDashboard, Menu, Package, Plus, Search, Settings, Users, X } from 'lucide-react'

const products = [
  { name: 'KA-ID20 Cordless Impact Driver', sku: 'KA-ID20', category: 'Impact Tools', stock: 24, price: 'Rp 85.000', status: 'Active' },
  { name: 'KA-IW20 Pro Impact Wrench', sku: 'KA-IW20P', category: 'Impact Tools', stock: 12, price: 'Rp 120.000', status: 'Active' },
  { name: 'KA-RS20 Reciprocating Saw', sku: 'KA-RS20', category: 'Saws', stock: 0, price: 'Rp 95.000', status: 'Out of stock' },
  { name: 'KA-CS20 Circular Saw 165mm', sku: 'KA-CS20', category: 'Saws', stock: 8, price: 'Rp 110.000', status: 'Active' },
]

const leads = [
  { name: 'Budi Santoso', company: 'PT Maju Konstruksi', request: 'Bulk rental inquiry', date: 'Today, 09:42', status: 'New' },
  { name: 'Siti Rahma', company: 'CV Rumah Kayu', request: 'KA-IW20P · 4 units', date: 'Yesterday', status: 'In progress' },
  { name: 'Rizky Pratama', company: 'Independent contractor', request: 'Product question', date: 'Aug 18, 2026', status: 'Resolved' },
]

export default function AdminPage() {
  const [open, setOpen] = useState(false)
  const [tab, setTab] = useState('Overview')
  const [query, setQuery] = useState('')
  const filtered = useMemo(() => products.filter((p) => `${p.name} ${p.sku} ${p.category}`.toLowerCase().includes(query.toLowerCase())), [query])

  return (
    <main className="min-h-screen bg-[#f4f6f8] pt-20 text-[#0A1628]">
      <div className="flex min-h-[calc(100vh-80px)]">
        <aside className={`fixed inset-y-0 left-0 z-40 w-72 bg-[#0A1628] p-6 text-white transition-transform lg:static lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="mb-12 flex items-center justify-between"><div><p className="text-xl font-extrabold tracking-tight">KEYWELL</p><p className="text-[10px] uppercase tracking-[0.25em] text-[#f5a200]">Admin workspace</p></div><button className="lg:hidden" onClick={() => setOpen(false)} aria-label="Close navigation"><X /></button></div>
          <nav className="flex flex-col gap-2" aria-label="Admin navigation">
            {[['Overview', LayoutDashboard], ['Products', Package], ['Leads', Users], ['Content', FileText], ['Analytics', BarChart3], ['Settings', Settings]].map(([label, Icon]) => <button key={label as string} onClick={() => { setTab(label as string); setOpen(false) }} className={`flex items-center gap-3 rounded-lg px-4 py-3 text-left text-sm font-semibold transition ${tab === label ? 'bg-[#f5a200] text-[#0A1628]' : 'text-white/65 hover:bg-white/10 hover:text-white'}`}><Icon size={18} />{label as string}</button>)}
          </nav>
          <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/10 bg-white/5 p-4"><p className="text-xs text-white/50">Preview mode</p><p className="mt-1 text-sm font-semibold">Connect Supabase to enable live data.</p></div>
        </aside>
        {open && <button className="fixed inset-0 z-30 bg-[#0A1628]/40 lg:hidden" onClick={() => setOpen(false)} aria-label="Close navigation overlay" />}
        <section className="min-w-0 flex-1 p-5 md:p-8 lg:p-10">
          <header className="mb-8 flex items-start justify-between gap-4"><div className="flex items-start gap-3"><button className="mt-1 rounded-lg border border-[#dce4e8] bg-white p-2 lg:hidden" onClick={() => setOpen(true)} aria-label="Open navigation"><Menu size={20} /></button><div><p className="text-sm font-semibold text-[#f5a200]">Wednesday, August 20, 2026</p><h1 className="mt-1 text-3xl font-extrabold tracking-tight md:text-4xl">Good morning, Admin.</h1><p className="mt-2 text-sm text-[#667680]">Here is what is happening with your business today.</p></div></div><div className="flex items-center gap-3"><button className="rounded-full border border-[#dce4e8] bg-white p-2.5" aria-label="Notifications"><Bell size={18} /></button><div className="hidden items-center gap-2 rounded-full border border-[#dce4e8] bg-white py-1.5 pl-1.5 pr-3 sm:flex"><div className="grid size-8 place-items-center rounded-full bg-[#f5a200] text-xs font-extrabold">KA</div><span className="text-sm font-bold">Admin</span><ChevronDown size={16} /></div></div></header>
          <div className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{[['Total Products', '24', '+3 this month', Package], ['New Leads', '18', '+12.5% vs last month', Users], ['Active Rentals', '42', '+8.2% this week', BarChart3], ['Revenue (Aug)', 'Rp 48.2M', '+16.4% vs last month', FileText]].map(([label, value, trend, Icon]) => <article key={label as string} className="rounded-2xl border border-[#dce4e8] bg-white p-5"><div className="flex items-center justify-between"><p className="text-sm font-semibold text-[#667680]">{label as string}</p><Icon size={18} className="text-[#f5a200]" /></div><p className="mt-4 text-2xl font-extrabold">{value as string}</p><p className="mt-1 text-xs font-semibold text-emerald-700">{trend as string}</p></article>)}</div>
          <div className="grid gap-6 xl:grid-cols-[1.3fr_1fr]"><section className="rounded-2xl border border-[#dce4e8] bg-white"><div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e8eef1] p-5"><div><h2 className="font-extrabold">Product inventory</h2><p className="text-sm text-[#667680]">Manage your rental catalog</p></div><button className="inline-flex items-center gap-2 rounded-lg bg-[#f5a200] px-4 py-2.5 text-sm font-extrabold text-[#0A1628] hover:bg-[#d98b00]"><Plus size={16} /> Add product</button></div><div className="border-b border-[#e8eef1] p-4"><div className="flex items-center gap-2 rounded-lg border border-[#dce4e8] px-3 py-2"><Search size={16} className="text-[#667680]" /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search products..." className="min-w-0 flex-1 bg-transparent text-sm outline-none" /></div></div><div className="overflow-x-auto"><table className="w-full text-left text-sm"><thead className="bg-[#f8fafb] text-xs uppercase tracking-wide text-[#667680]"><tr><th className="px-5 py-3">Product</th><th className="px-5 py-3">Stock</th><th className="px-5 py-3">Price/day</th><th className="px-5 py-3">Status</th></tr></thead><tbody>{filtered.map((p) => <tr key={p.sku} className="border-t border-[#e8eef1]"><td className="px-5 py-4"><p className="font-bold">{p.name}</p><p className="text-xs text-[#667680]">{p.sku} · {p.category}</p></td><td className="px-5 py-4 font-semibold">{p.stock} units</td><td className="px-5 py-4 font-semibold">{p.price}</td><td className="px-5 py-4"><span className={`rounded-full px-2.5 py-1 text-xs font-bold ${p.status === 'Active' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>{p.status}</span></td></tr>)}</tbody></table></div></section><section className="rounded-2xl border border-[#dce4e8] bg-white"><div className="flex items-center justify-between border-b border-[#e8eef1] p-5"><div><h2 className="font-extrabold">Recent leads</h2><p className="text-sm text-[#667680]">Follow up with customers</p></div><button className="text-sm font-bold text-[#f5a200]">View all</button></div><div className="flex flex-col">{leads.map((lead) => <article key={lead.name} className="border-b border-[#e8eef1] p-5 last:border-0"><div className="flex items-start justify-between gap-3"><div><p className="font-bold">{lead.name}</p><p className="text-xs text-[#667680]">{lead.company}</p></div><span className="rounded-full bg-[#fdf3dc] px-2.5 py-1 text-[11px] font-bold text-[#9b6500]">{lead.status}</span></div><p className="mt-3 text-sm">{lead.request}</p><p className="mt-1 text-xs text-[#667680]">{lead.date}</p></article>)}</div></section></div>
          <section className="mt-6 rounded-2xl border border-[#dce4e8] bg-white p-5"><div className="flex items-center justify-between"><div><h2 className="font-extrabold">Quick actions</h2><p className="text-sm text-[#667680]">Common admin tasks</p></div><button className="text-sm font-bold text-[#f5a200]">Customize</button></div><div className="mt-5 grid gap-3 sm:grid-cols-3"><button className="rounded-xl border border-dashed border-[#c8d4da] p-4 text-left hover:border-[#f5a200]"><Package className="text-[#f5a200]" /><p className="mt-3 font-bold">Add new product</p><p className="text-xs text-[#667680]">Create a rental listing</p></button><button className="rounded-xl border border-dashed border-[#c8d4da] p-4 text-left hover:border-[#f5a200]"><FileText className="text-[#f5a200]" /><p className="mt-3 font-bold">Edit homepage</p><p className="text-xs text-[#667680]">Update public content</p></button><button className="rounded-xl border border-dashed border-[#c8d4da] p-4 text-left hover:border-[#f5a200]"><Users className="text-[#f5a200]" /><p className="mt-3 font-bold">Review leads</p><p className="text-xs text-[#667680]">Stay on top of inquiries</p></button></div></section>
        </section>
      </div>
    </main>
  )
}
