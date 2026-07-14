// Renders the top navbar with the app's brand mark
function Navbar() {
  return (
    <header className="border-b border-border">
      <div className="max-w-5xl mx-auto flex items-center px-6 py-4">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent font-mono text-sm text-accent-foreground">
          &gt;_
        </span>
        <span className="ml-3 font-semibold tracking-tight">
          Claude Code Demo
        </span>
      </div>
    </header>
  );
}

// Renders the plug icon used by the MCP Integration feature card
function PlugIcon() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22v-5" />
      <path d="M9 8V2" />
      <path d="M15 8V2" />
      <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
    </svg>
  );
}

// Renders the hook icon used by the Hooks feature card
function HookIcon() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 3v10a5 5 0 0 0 10 0v-3" />
    </svg>
  );
}

// Renders the hero section with headline, subheadline, and feature cards
function Hero() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Built with Claude Code
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
          This app is a demo of Claude Code fitting into a real development
          workflow, including MCP integration and hooks.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-xl grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="rounded-3xl border border-border bg-card p-6 text-left shadow-[0_1px_2px_rgba(31,30,29,0.04),0_4px_12px_-4px_rgba(31,30,29,0.08)] transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_2px_4px_rgba(31,30,29,0.06),0_12px_28px_-8px_rgba(31,30,29,0.16)]">
          <span className="animate-icon-pulse inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
            <PlugIcon />
          </span>
          <h2 className="mt-4 font-semibold tracking-tight">
            MCP Integration
          </h2>
          <p className="mt-2 text-sm text-muted">
            Connects to external tools and data sources via the Model
            Context Protocol.
          </p>
        </div>
        <div className="rounded-3xl border border-border bg-card p-6 text-left shadow-[0_1px_2px_rgba(31,30,29,0.04),0_4px_12px_-4px_rgba(31,30,29,0.08)] transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_2px_4px_rgba(31,30,29,0.06),0_12px_28px_-8px_rgba(31,30,29,0.16)]">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
            <HookIcon />
          </span>
          <h2 className="mt-4 font-semibold tracking-tight">Hooks</h2>
          <p className="mt-2 text-sm text-muted">
            Automatically runs your own scripts at key moments, like before a
            commit or after a file edit.
          </p>
        </div>
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-background">
      <Navbar />
      <Hero />
    </div>
  );
}
