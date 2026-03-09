"use client";

import { useState } from "react";
import { Users, Plus, Upload, Search, MoreVertical, Trash2, Edit2 } from "lucide-react";

interface Contact {
  id: string;
  name: string;
  phone: string;
  language: "en" | "es" | "both";
  status: "active" | "opted-out";
  addedAt: string;
}

export default function ContactsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [contacts, setContacts] = useState<Contact[]>([
    { id: "1", name: "Maria Garcia", phone: "+1 512-555-0101", language: "both", status: "active", addedAt: "Feb 1, 2026" },
    { id: "2", name: "John Smith", phone: "+1 512-555-0102", language: "en", status: "active", addedAt: "Feb 5, 2026" },
    { id: "3", name: "Ana Rodriguez", phone: "+1 512-555-0103", language: "es", status: "active", addedAt: "Feb 10, 2026" },
    { id: "4", name: "David Johnson", phone: "+1 512-555-0104", language: "en", status: "opted-out", addedAt: "Feb 12, 2026" },
    { id: "5", name: "Carmen Lopez", phone: "+1 512-555-0105", language: "both", status: "active", addedAt: "Feb 15, 2026" },
  ]);

  const filteredContacts = contacts.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.phone.includes(searchQuery)
  );

  const activeCount = contacts.filter(c => c.status === "active").length;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="font-serif text-3xl text-navy">Contacts</h1>
          <p className="text-gray-600 mt-1">
            {activeCount} active contacts · {contacts.length} total
          </p>
        </div>
        <div className="flex gap-3">
          <button className="btn-secondary flex items-center gap-2">
            <Upload size={20} />
            Import CSV
          </button>
          <button 
            onClick={() => setShowAddModal(true)}
            className="btn-primary flex items-center gap-2"
          >
            <Plus size={20} />
            Add Contact
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="card mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input pl-10"
            placeholder="Search by name or phone number..."
          />
        </div>
      </div>

      {/* Contacts Table */}
      <div className="card overflow-hidden p-0">
        <table className="w-full">
          <thead className="bg-cream">
            <tr>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-600">Name</th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-600">Phone</th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-600">Language</th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-600">Status</th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-600">Added</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredContacts.map((contact) => (
              <tr key={contact.id} className="hover:bg-cream/50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                      <span className="text-gold font-medium">
                        {contact.name.charAt(0)}
                      </span>
                    </div>
                    <span className="font-medium text-navy">{contact.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-600">{contact.phone}</td>
                <td className="px-6 py-4">
                  <span className={`
                    inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${contact.language === "en" ? "bg-blue-100 text-blue-700" : ""}
                    ${contact.language === "es" ? "bg-orange-100 text-orange-700" : ""}
                    ${contact.language === "both" ? "bg-purple-100 text-purple-700" : ""}
                  `}>
                    {contact.language === "en" && "English"}
                    {contact.language === "es" && "Español"}
                    {contact.language === "both" && "EN + ES"}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`
                    inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${contact.status === "active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}
                  `}>
                    {contact.status === "active" ? "Active" : "Opted Out"}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-600">{contact.addedAt}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <Edit2 size={16} className="text-gray-500" />
                    </button>
                    <button className="p-2 hover:bg-red-50 rounded-lg">
                      <Trash2 size={16} className="text-red-500" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredContacts.length === 0 && (
          <div className="text-center py-12">
            <Users className="mx-auto text-gray-300 mb-4" size={48} />
            <p className="text-gray-500">No contacts found</p>
          </div>
        )}
      </div>

      {/* Add Contact Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="card max-w-md w-full mx-4">
            <h2 className="font-serif text-xl text-navy mb-6">Add New Contact</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input type="text" className="input" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input type="tel" className="input" placeholder="+1 512-555-0100" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Language Preference</label>
                <select className="input">
                  <option value="en">English only</option>
                  <option value="es">Español only</option>
                  <option value="both">Both (EN + ES)</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button 
                onClick={() => setShowAddModal(false)}
                className="btn-secondary flex-1"
              >
                Cancel
              </button>
              <button 
                onClick={() => setShowAddModal(false)}
                className="btn-primary flex-1"
              >
                Add Contact
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
