import Link from "next/link";
import { 
  Upload, 
  MessageSquare, 
  Users, 
  TrendingUp,
  ArrowRight,
  Clock
} from "lucide-react";

export default function DashboardPage() {
  // TODO: Fetch real data
  const stats = {
    totalSent: 156,
    contacts: 42,
    sermons: 8,
    deliveryRate: 98.2,
  };

  const recentSermons = [
    { 
      id: "1", 
      title: "The Power of Persistent Prayer", 
      date: "Mar 3, 2026",
      status: "sent",
      sentTo: 42
    },
    { 
      id: "2", 
      title: "Walking by Faith", 
      date: "Feb 25, 2026",
      status: "sent",
      sentTo: 40
    },
    { 
      id: "3", 
      title: "The Heart of Worship", 
      date: "Feb 18, 2026",
      status: "sent",
      sentTo: 38
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="font-serif text-3xl text-navy">Good morning, Pastor</h1>
          <p className="text-gray-600 mt-1">Here's how your church engagement is looking</p>
        </div>
        <Link href="/dashboard/upload" className="btn-primary flex items-center gap-2">
          <Upload size={20} />
          New Sermon
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="card">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center">
              <MessageSquare className="text-gold" size={24} />
            </div>
            <div>
              <div className="text-2xl font-semibold text-navy">{stats.totalSent}</div>
              <div className="text-sm text-gray-600">Messages Sent</div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="text-green-600" size={24} />
            </div>
            <div>
              <div className="text-2xl font-semibold text-navy">{stats.deliveryRate}%</div>
              <div className="text-sm text-gray-600">Delivery Rate</div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="text-blue-600" size={24} />
            </div>
            <div>
              <div className="text-2xl font-semibold text-navy">{stats.contacts}</div>
              <div className="text-sm text-gray-600">Active Contacts</div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Clock className="text-purple-600" size={24} />
            </div>
            <div>
              <div className="text-2xl font-semibold text-navy">{stats.sermons}</div>
              <div className="text-sm text-gray-600">Sermons This Month</div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Sermons */}
      <div className="card">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-serif text-xl text-navy">Recent Sermons</h2>
          <Link href="/dashboard/sermons" className="text-gold hover:underline flex items-center gap-1">
            View all <ArrowRight size={16} />
          </Link>
        </div>

        <div className="space-y-4">
          {recentSermons.map((sermon) => (
            <Link 
              key={sermon.id}
              href={`/dashboard/sermons/${sermon.id}`}
              className="flex items-center justify-between p-4 bg-cream rounded-lg hover:bg-cream-200 transition-colors"
            >
              <div>
                <h3 className="font-medium text-navy">{sermon.title}</h3>
                <p className="text-sm text-gray-600">{sermon.date}</p>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Sent
                </span>
                <p className="text-sm text-gray-600 mt-1">to {sermon.sentTo} people</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        <Link href="/dashboard/upload" className="card hover:border-gold transition-colors group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center group-hover:bg-gold/30 transition-colors">
              <Upload className="text-gold" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-navy">Upload New Sermon</h3>
              <p className="text-sm text-gray-600">Drop your notes and generate a recap</p>
            </div>
          </div>
        </Link>

        <Link href="/dashboard/contacts" className="card hover:border-gold transition-colors group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
              <Users className="text-blue-600" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-navy">Manage Contacts</h3>
              <p className="text-sm text-gray-600">Add members or import from CSV</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
