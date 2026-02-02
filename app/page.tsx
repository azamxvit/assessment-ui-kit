import Link from "next/link";
import { ArrowRight, CheckCircle2, Layout, Zap, Smartphone, Globe } from "lucide-react";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center p-6 text-center bg-background text-foreground w-full">
      
      {/* Hero Section */}
      <div className="max-w-3xl space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-4">
          <Globe className="w-3 h-3" />
          <span>Frontend Engineering Case</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
          Modern & Accessible <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            Exam Platform
          </span>
        </h1>

        <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
          Интерактивная платформа для тестирования знаний с мгновенной обратной связью. 
          Спроектирована с упором на <strong>UX</strong>, <strong>доступность</strong> и <strong>производительность</strong>.
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left my-10">
          {[
            { icon: Layout, title: "Responsive Design", desc: "Адаптация под любые устройства" },
            { icon: Zap, title: "Instant Feedback", desc: "Мгновенная валидация без задержек" },
            { icon: CheckCircle2, title: "Clean Architecture", desc: "Scalable React компоненты" }
          ].map((feature, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-2xl bg-background border border-border shadow-sm hover:shadow-md transition-shadow"
            >

              <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-3">
                <feature.icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-foreground">{feature.title}</h3>
              <p className="text-sm text-foreground/60 mt-1">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/exam" 
            className="group relative inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all active:scale-95 shadow-xl shadow-primary/20"
          >
            <span>Начать Экзамен</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <a 
            href="https://github.com/azamxvit" 
            target="_blank"
            className="px-8 py-4 rounded-full font-medium text-foreground/70 hover:text-foreground hover:bg-primary/5 transition-colors"
          >
            View Source Code
          </a>
        </div>
        
        {/* Footer Note */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-foreground/50 font-medium">
            Designed & Developed by <span className="text-foreground">Azamat Omirtay</span>
          </p>
        </div>
      </div>
    </main>
  );
}