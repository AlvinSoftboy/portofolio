import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { BrutalButton } from "../shared/brutal-button";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const INITIAL_STATE: FormState = { name: "", email: "", message: "" };

export const ContactForm = () => {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setForm(INITIAL_STATE);
    setTimeout(() => setSent(false), 3000);
  };

  const inputClass =
    "w-full border-[3px] border-black bg-white px-4 py-3 text-base font-medium shadow-[4px_4px_0_0_#000] focus:outline-none focus:ring-0 focus:-translate-x-0.5 focus:-translate-y-0.5 focus:shadow-[6px_6px_0_0_#ff5b1f] transition-all";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-black uppercase tracking-wide"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={inputClass}
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-black uppercase tracking-wide"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={inputClass}
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-black uppercase tracking-wide"
        >
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${inputClass} resize-none`}
          placeholder="Tell me about your project..."
        />
      </div>

      <div className="flex items-center gap-4">
        <BrutalButton type="submit" variant="primary">
          <Send size={18} />
          Send Message
        </BrutalButton>
        {sent && (
          <span className="text-sm font-bold text-black" role="status">
            Pesan terkirim!
          </span>
        )}
      </div>
    </form>
  );
};
