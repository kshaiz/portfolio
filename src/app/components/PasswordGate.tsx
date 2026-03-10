import React, { useState } from "react";

interface Props {
  password: string;
  caseStudyTitle: string;
  children: React.ReactNode;
}

export function PasswordGate({ password, caseStudyTitle, children }: Props) {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [requesting, setRequesting] = useState(false);

  if (unlocked) return <>{children}</>;

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (input === password) {
      setUnlocked(true);
    } else {
      setError(true);
      setInput("");
    }
  }

  function handleRequest(e: React.SyntheticEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Requesting password to access case-study - ${caseStudyTitle}`
    );
    const body = encodeURIComponent(
      `Hi Shaiz,\n\nI came across your portfolio and would love to review your case study on "${caseStudyTitle}". Could you please share the password to access it?\n\nThank you for your time, and I look forward to hearing from you.`
    );
    window.open(`mailto:k.shaiz@gmail.com?subject=${subject}&body=${body}`, "_blank");
  }

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        {!requesting ? (
          <>
            <h2 className="text-2xl mb-2">Password required</h2>
            <p className="text-neutral-600 mb-8">
              This case study is protected. Enter the password to continue.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="password"
                value={input}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setInput(e.target.value);
                  setError(false);
                }}
                placeholder="Enter password"
                autoFocus
                className="w-full border border-neutral-300 rounded-lg px-4 py-3 outline-none focus:border-neutral-900 transition-colors"
              />
              {error && (
                <p className="text-sm text-red-600">Incorrect password. Try again.</p>
              )}
              <button
                type="submit"
                className="bg-neutral-900 text-white px-6 py-3 rounded-lg hover:bg-neutral-800 transition-colors"
              >
                Unlock
              </button>
            </form>
            <div className="mt-6 pt-6 border-t border-neutral-200">
              <button
                onClick={() => setRequesting(true)}
                className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors underline underline-offset-2"
              >
                Don't have the password? Request access
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-2xl mb-2">Request access</h2>
            <p className="text-neutral-600 mb-8">
              Click send to open your email client with the request pre-filled.
            </p>
            <form onSubmit={handleRequest} className="flex flex-col gap-4">
              <button
                type="submit"
                className="bg-neutral-900 text-white px-6 py-3 rounded-lg hover:bg-neutral-800 transition-colors"
              >
                Send request
              </button>
            </form>
            <div className="mt-6 pt-6 border-t border-neutral-200">
              <button
                onClick={() => setRequesting(false)}
                className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors underline underline-offset-2"
              >
                Already have a password? Enter it here
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
