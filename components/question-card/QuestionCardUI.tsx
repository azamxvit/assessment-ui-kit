import React from 'react';
import { Lock, CheckCircle2, XCircle, ArrowRight, Loader2 } from 'lucide-react';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }

export const CardHeader = ({ content }: { content: string }) => (
  <header className="mb-6 space-y-4">
    <div 
      className="prose dark:prose-invert max-w-none text-lg text-foreground font-medium"
      dangerouslySetInnerHTML={{ __html: content }} 
    />
  </header>
);

export const AnswerOption = ({ 
  text, isSelected, status, onClick 
}: { 
  text: string, isSelected: boolean, status: string, onClick: () => void 
}) => {
  const isChecked = status === 'SUCCESS' || status === 'WRONG';
  
  let styles = "border-border bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800";
  let icon = null;

  if (isSelected) {
    styles = "border-primary bg-primary/5 ring-1 ring-primary dark:bg-primary/10";
  }

  if (status === 'SUCCESS' && isSelected) {
    styles = "border-success bg-success/10 ring-1 ring-success text-green-700 dark:text-green-400";
    icon = <CheckCircle2 className="text-green-600 dark:text-green-400 w-5 h-5" />;
  }

  if (status === 'WRONG' && isSelected) {
    styles = "border-destructive bg-destructive/10 ring-1 ring-destructive text-destructive dark:text-red-400";
    icon = <XCircle className="text-destructive dark:text-red-400 w-5 h-5" />;
  }

  return (
    <div 
      onClick={onClick}
      className={cn(
        "cursor-pointer p-4 rounded-lg border-2 transition-all flex items-center justify-between group",
        styles
      )}
    >
      <span className="font-medium text-foreground">{text}</span>
      {icon}
    </div>
  );
};

export const AnswerForm = ({ children, disabled }: { children: React.ReactNode, disabled: boolean }) => (
  <fieldset disabled={disabled} className="space-y-3 disabled:opacity-70">
    <legend className="sr-only">Answer Options</legend>
    {children}
  </fieldset>
);

export const ExplanationSection = ({ content, isDemo }: { content: string, isDemo: boolean }) => (
  <section className="mt-6 rounded-lg bg-slate-50 dark:bg-slate-950/50 p-4 border border-border relative overflow-hidden animate-in fade-in slide-in-from-top-2">
    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 opacity-70">Explanation</h4>
    
    <div className={cn("text-foreground transition-all", isDemo && "blur-sm select-none")}>
      <div dangerouslySetInnerHTML={{ __html: isDemo ? "Lorem ipsum hidden text..." : content }} />
    </div>

    {isDemo && (
      <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-[2px]">
        <button className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full font-bold shadow-lg hover:scale-105 transition-transform">
          <Lock className="w-4 h-4" /> Unlock Full Access
        </button>
      </div>
    )}
  </section>
);

export const ActionController = ({ status, onCheck, onNext }: { status: string, onCheck: () => void, onNext: () => void }) => {
  const isChecked = status === 'SUCCESS' || status === 'WRONG';
  
  return (
    <footer className="mt-8 pt-4 border-t border-border flex justify-end">
      {isChecked ? (
        <button 
          onClick={onNext} 
          className="flex items-center gap-2 bg-foreground text-background px-6 py-2.5 rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Next Question <ArrowRight className="w-4 h-4" />
        </button>
      ) : (
        <button 
          onClick={onCheck} 
          disabled={status === 'SUBMITTING'}
          className={cn(
            "flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium transition-all shadow-sm",
            "bg-primary text-primary-foreground hover:bg-primary/90",
            "disabled:opacity-50 disabled:cursor-not-allowed"
          )}
        >
          {status === 'SUBMITTING' && <Loader2 className="w-4 h-4 animate-spin" />}
          Check Answer
        </button>
      )}
    </footer>
  );
};