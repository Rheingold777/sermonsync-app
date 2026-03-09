"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Upload, FileText, X, Loader2, Wand2 } from "lucide-react";

export default function UploadPage() {
  const router = useRouter();
  const [step, setStep] = useState<"upload" | "preview" | "schedule">("upload");
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [recapEn, setRecapEn] = useState("");
  const [recapEs, setRecapEs] = useState("");
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const generateRecap = async () => {
    setLoading(true);
    
    // TODO: Call actual API
    // For demo, simulate AI response
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setRecapEn(`Good morning, church family! 🙏

Yesterday we explored ${title || "a powerful message"}. The key takeaway: God's promises aren't just for "someday"—they're for RIGHT NOW.

This week, I challenge you to take one step of faith. What's that thing you've been putting off? That conversation? That commitment? Go for it.

Remember: faith isn't the absence of doubt—it's moving forward anyway.

Have a blessed week!
- Pastor`);

    setRecapEs(`¡Buenos días, familia de la iglesia! 🙏

Ayer exploramos ${title || "un mensaje poderoso"}. El punto clave: Las promesas de Dios no son solo para "algún día"—son para AHORA MISMO.

Esta semana, te desafío a dar un paso de fe. ¿Qué es eso que has estado posponiendo? ¿Esa conversación? ¿Ese compromiso? Hazlo.

Recuerda: la fe no es la ausencia de duda—es avanzar de todos modos.

¡Que tengas una semana bendecida!
- Pastor`);

    setLoading(false);
    setStep("preview");
  };

  const handleApprove = async () => {
    setLoading(true);
    // TODO: Save to database and schedule
    await new Promise(resolve => setTimeout(resolve, 1000));
    router.push("/dashboard/sermons");
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Steps */}
      <div className="flex items-center justify-center mb-8">
        {["Upload", "Preview", "Schedule"].map((label, i) => {
          const stepIndex = ["upload", "preview", "schedule"].indexOf(step);
          const isActive = i <= stepIndex;
          return (
            <div key={label} className="flex items-center">
              <div className={`
                w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                ${isActive ? "bg-gold text-navy" : "bg-gray-200 text-gray-500"}
              `}>
                {i + 1}
              </div>
              <span className={`ml-2 ${i < 2 ? "mr-8" : ""} ${isActive ? "text-navy" : "text-gray-500"}`}>
                {label}
              </span>
              {i < 2 && <div className={`w-16 h-0.5 ${i < stepIndex ? "bg-gold" : "bg-gray-200"}`} />}
            </div>
          );
        })}
      </div>

      {step === "upload" && (
        <div className="card">
          <h1 className="font-serif text-2xl text-navy mb-6">Upload Sermon Notes</h1>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sermon Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input"
              placeholder="e.g., The Power of Persistent Prayer"
            />
          </div>

          {/* Drag & Drop Zone */}
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className={`
              border-2 border-dashed rounded-xl p-8 text-center transition-colors
              ${dragActive ? "border-gold bg-gold/5" : "border-gray-300"}
              ${file ? "border-green-500 bg-green-50" : ""}
            `}
          >
            {file ? (
              <div className="flex items-center justify-center gap-3">
                <FileText className="text-green-600" size={32} />
                <span className="font-medium">{file.name}</span>
                <button 
                  onClick={() => setFile(null)}
                  className="p-1 hover:bg-gray-200 rounded"
                >
                  <X size={20} />
                </button>
              </div>
            ) : (
              <>
                <Upload className="mx-auto text-gray-400 mb-4" size={48} />
                <p className="text-gray-600 mb-2">
                  Drag & drop your sermon notes here
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  Supports PDF, DOCX, TXT, or images of handwritten notes
                </p>
                <label className="btn-secondary cursor-pointer inline-block">
                  Choose File
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                    className="hidden"
                  />
                </label>
              </>
            )}
          </div>

          {/* Or paste text */}
          <div className="my-6 flex items-center">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="px-4 text-gray-500 text-sm">or paste your notes</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="input min-h-[200px]"
            placeholder="Paste your sermon notes, outline, or manuscript here..."
          />

          <button
            onClick={generateRecap}
            disabled={loading || (!file && !text)}
            className="btn-primary w-full mt-6 flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Generating...
              </>
            ) : (
              <>
                <Wand2 size={20} />
                Generate Recap
              </>
            )}
          </button>
        </div>
      )}

      {step === "preview" && (
        <div className="space-y-6">
          <h1 className="font-serif text-2xl text-navy">Preview & Approve</h1>
          <p className="text-gray-600">Review the recaps below. Edit if needed, then approve.</p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* English Preview */}
            <div className="card">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-serif text-lg">English</h2>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">EN</span>
              </div>
              
              {/* Phone Mockup */}
              <div className="phone-mockup mx-auto">
                <div className="phone-screen p-4 min-h-[300px]">
                  <div className="text-xs text-gray-500 mb-3">Messages</div>
                  <div className="message-bubble ml-auto">
                    <p className="text-sm whitespace-pre-line">{recapEn}</p>
                  </div>
                </div>
              </div>
              
              <textarea
                value={recapEn}
                onChange={(e) => setRecapEn(e.target.value)}
                className="input mt-4 min-h-[150px] text-sm"
              />
              <p className="text-xs text-gray-500 mt-2">{recapEn.length} characters</p>
            </div>

            {/* Spanish Preview */}
            <div className="card">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-serif text-lg">Español</h2>
                <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">ES</span>
              </div>
              
              <div className="phone-mockup mx-auto">
                <div className="phone-screen p-4 min-h-[300px]">
                  <div className="text-xs text-gray-500 mb-3">Mensajes</div>
                  <div className="message-bubble ml-auto">
                    <p className="text-sm whitespace-pre-line">{recapEs}</p>
                  </div>
                </div>
              </div>
              
              <textarea
                value={recapEs}
                onChange={(e) => setRecapEs(e.target.value)}
                className="input mt-4 min-h-[150px] text-sm"
              />
              <p className="text-xs text-gray-500 mt-2">{recapEs.length} characters</p>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setStep("upload")}
              className="btn-secondary flex-1"
            >
              Back to Edit
            </button>
            <button
              onClick={handleApprove}
              disabled={loading}
              className="btn-primary flex-1 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Saving...
                </>
              ) : (
                "Approve & Schedule for Monday"
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
