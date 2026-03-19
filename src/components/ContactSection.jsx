import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser"; 
import { Github, Linkedin, Mail, Send, ArrowRight, Twitter, MapPin, Phone, Clock } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
   // alert("Message sent! (demo)");
   // setForm({ name: "", email: "", subject: "", message: "" });

   if (!form.name || !form.email || !form.message) return;

   setSending(true);

   emailjs
     .send(
       "service_wha11fg",       // Service ID
       "template_msyghzj",      // YOUR_TEMPLATE_ID
       {
         from_name: form.name,
         from_email: form.email,
         subject: form.subject,
         message: form.message,
       },
      
       "aD8O7e_vC_Bx9wXlq"        // OUR_PUBLIC_KEY 
     )
     .then(
       () => {
         setSending(false);
         alert("Message sent successfully 🚀");
         setForm({ name: "", email: "", subject: "", message: "" });
       },
       (error) => {
         console.error(error);
         setSending(false);
         alert("Failed to send message ❌");
       }
     );

  };

  const inputClasses = (field) =>
    `w-full px-5 py-3.5 rounded-xl bg-secondary/60 border text-foreground text-sm font-body focus:outline-none transition-all duration-300 placeholder:text-muted-foreground/50 ${
      focused === field
        ? "border-primary/40 shadow-[0_0_20px_hsl(var(--primary)/0.08)]"
        : "border-border/60 hover:border-border"
    }`;

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="text-xs font-mono text-primary tracking-[0.2em] uppercase">Contact</span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-4 tracking-tight">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="max-w-lg mx-auto text-muted-foreground mt-4 font-body text-sm">
          I'm currently seeking opportunities as a Full Stack Developer. 
          I’m passionate about building high-performance, visually engaging web applications. 
           </p>
          <p className="max-w-lg mx-auto text-muted-foreground mt-4 font-body text-sm">
          Whether it’s an internship, junior role, or freelance project — I’d love to collaborate and create impactful solutions.
           </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
        <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
  className="lg:col-span-3 glass rounded-2xl p-8 sm:p-10"
>
  {sent ? (
    // ✅ SUCCESS UI (MATCHES YOUR STYLE)
    <div className="text-center py-16 flex flex-col items-center justify-center">
      
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5 glow-primary">
        🚀
      </div>

      <h3 className="text-xl font-semibold mb-2">
        Message Sent Successfully
      </h3>

      <p className="text-sm text-muted-foreground mb-6 max-w-sm">
        Thanks for reaching out. I’ll get back to you within 24 hours.
      </p>

      <button
        onClick={() => setSent(false)}
        className="px-6 py-2.5 rounded-xl border border-border/60 hover:border-primary hover:text-primary transition-all text-sm"
      >
        Send Another
      </button>
    </div>
  ) : (
    // ✅ ORIGINAL FORM (UNCHANGED STYLE)
    <form onSubmit={handleSubmit} className="space-y-5">
      
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-medium mb-2.5 text-muted-foreground uppercase tracking-wider">Name</label>
          <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} onFocus={() => setFocused("name")} onBlur={() => setFocused(null)} className={inputClasses("name")} placeholder="Your Name" />
        </div>

        <div>
          <label className="block text-xs font-medium mb-2.5 text-muted-foreground uppercase tracking-wider">Email Address</label>
          <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} className={inputClasses("email")} placeholder="name@example.com" />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium mb-2.5 text-muted-foreground uppercase tracking-wider">Subject</label>
        <input type="text" required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} onFocus={() => setFocused("subject")} onBlur={() => setFocused(null)} className={inputClasses("subject")} placeholder="Job Opportunity / Internship / Freelance / Just saying hi" />
      </div>

      <div>
        <label className="block text-xs font-medium mb-2.5 text-muted-foreground uppercase tracking-wider">Message</label>
        <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} onFocus={() => setFocused("message")} onBlur={() => setFocused(null)} className={`${inputClasses("message")} resize-none`} placeholder="Tell me about the role or project..." />
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2.5 magnetic-btn text-sm"
      >
        {sending ? "Sending..." : "Send Message"}
        <Send size={15} />
      </motion.button>

    </form>
  )}
</motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <div className="glass rounded-2xl p-6 space-y-4 mb-2">
              <h4 className="text-sm font-semibold mb-3">Quick Info</h4>
              {[
                { icon: MapPin, text: "Chennai, India — Open to remote & relocation" },
                { icon: Clock, text: "IST (UTC+5:30) — Flexible availability" },
                { icon: Phone, text: "Open to internships, junior roles & freelance" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 text-sm text-muted-foreground font-body">
                  <item.icon size={14} className="text-primary shrink-0" />
                  {item.text}
                </div>
              ))}
            </div>

            {[
              { icon: Mail, label: "siva270410@gmail.com", subtitle: "Email me", href: "mailto:siva270410@gmail.com" },
              { icon: Github, label: "github.com/sivabalan", subtitle: "View my code", href: "https://github.com/sivabalan-27" },
              { icon: Linkedin, label: "linkedin.com/in/sivabalan", subtitle: "Let's connect", href: "https://www.linkedin.com/in/sivabalan27" },
            ].map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className="flex items-center gap-4 p-4 rounded-2xl glass gradient-border group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 group-hover:glow-primary transition-all duration-500 shrink-0">
                  <link.icon size={16} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[11px] text-muted-foreground font-body">{link.subtitle}</span>
                  <span className="block text-sm font-medium text-foreground/90 truncate">{link.label}</span>
                </div>
                <ArrowRight size={13} className="text-muted-foreground/40 group-hover:text-primary transition-colors shrink-0" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
