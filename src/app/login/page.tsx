"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    // TODO: Implement Supabase auth
    // For now, simulate login
    setTimeout(() => {
      router.push("/dashboard");
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-cream flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="font-serif text-3xl text-navy">
            SermonSync
          </Link>
          <p className="text-gray-600 mt-2">Welcome back, Pastor</p>
        </div>
        
        <div className="card">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
                placeholder="pastor@yourchurch.org"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
                placeholder="••••••••"
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full disabled:opacity-50"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <Link href="/forgot-password" className="text-sm text-gold hover:underline">
              Forgot password?
            </Link>
          </div>
        </div>
        
        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{" "}
          <Link href="/signup" className="text-gold hover:underline font-medium">
            Start free trial
          </Link>
        </p>
      </div>
    </main>
  );
}
