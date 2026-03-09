# SermonSync App

**Your sermon, in every pocket by Monday morning.**

Automated sermon recap delivery for churches. Pastor drops notes → AI generates bilingual recap → SMS sent automatically.

## Features

- 📝 Upload sermon notes (PDF, DOCX, TXT, or paste)
- 🤖 AI-generated recaps in pastor's voice
- 🌐 Bilingual support (English + Spanish)
- 📱 Automatic SMS delivery via Twilio
- 💳 Stripe billing integration
- 📊 Delivery analytics dashboard

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Database:** Supabase (PostgreSQL)
- **Auth:** Supabase Auth
- **AI:** Anthropic Claude API
- **SMS:** Twilio
- **Payments:** Stripe
- **Hosting:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account
- Twilio account
- Anthropic API key
- Stripe account (optional for payments)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/sermonsync-app.git
cd sermonsync-app

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Fill in your API keys in .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

### Environment Variables

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-key

# Anthropic
ANTHROPIC_API_KEY=your-api-key

# Twilio
TWILIO_ACCOUNT_SID=your-account-sid
TWILIO_AUTH_TOKEN=your-auth-token
TWILIO_PHONE_NUMBER=+1234567890

# Stripe (optional)
STRIPE_SECRET_KEY=your-secret-key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your-publishable-key
```

### Database Setup

Run the SQL migrations in your Supabase dashboard:

```sql
-- Churches table
CREATE TABLE churches (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  pastor_name TEXT,
  pastor_email TEXT UNIQUE,
  phone TEXT,
  timezone TEXT DEFAULT 'America/Chicago',
  language TEXT DEFAULT 'en',
  send_time TIME DEFAULT '09:30',
  send_day TEXT DEFAULT 'monday',
  plan TEXT DEFAULT 'trial',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Contacts table
CREATE TABLE contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  church_id UUID REFERENCES churches(id),
  name TEXT,
  phone TEXT NOT NULL,
  language_pref TEXT DEFAULT 'en',
  status TEXT DEFAULT 'active',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Sermons table
CREATE TABLE sermons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  church_id UUID REFERENCES churches(id),
  title TEXT,
  date DATE,
  notes_text TEXT,
  recap_en TEXT,
  recap_es TEXT,
  status TEXT DEFAULT 'draft',
  scheduled_at TIMESTAMPTZ,
  sent_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Message logs table
CREATE TABLE message_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sermon_id UUID REFERENCES sermons(id),
  contact_id UUID REFERENCES contacts(id),
  phone TEXT,
  language TEXT,
  message TEXT,
  status TEXT DEFAULT 'queued',
  twilio_sid TEXT,
  sent_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

## Deploy to Vercel

1. Push to GitHub
2. Connect repo to Vercel
3. Add environment variables
4. Deploy!

## License

MIT

---

Built by [Bernhard Suppan](https://sermonsync.church) - a pastor, for pastors.
