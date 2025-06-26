import { useRef, useState, useCallback, memo } from "react";
import emailjs from "@emailjs/browser";
import SectionHeading from "../components/SectionHeading";

const Contact = memo(() => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const sendEmail = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (!form.current || isSubmitting) return;

      setIsSubmitting(true);
      setSubmitStatus("idle");

      try {
        await emailjs.sendForm(
          "service_m7sv5ln",
          "template_7jhf4mj",
          form.current,
          "user_13jdfxcM0vv1Xlo9hL6WK"
        );

        setSubmitStatus("success");
        form.current.reset();
      } catch (error) {
        console.error("Email send failed:", error);
        setSubmitStatus("error");
      } finally {
        setIsSubmitting(false);
      }
    },
    [isSubmitting]
  );

  return (
    <section
      className="body-font relative bg-[#161616] flex items-center mb-20 min-h-screen"
      aria-label="Contact section"
    >
      <div className="container mx-auto">
        <div className="mb-12 flex w-full flex-col text-center">
          <SectionHeading
            Heading={"CONTACT ME"}
            Subheading={
              "Feel free to reach out to me! Whether you have a question, feedback, or a collaboration proposal."
            }
          />
        </div>
        <div className="mx-auto md:w-2/3 lg:w-1/2 p-[4%]">
          <form ref={form} onSubmit={sendEmail} noValidate>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    minLength={2}
                    className="peer w-full rounded border border-gray-600 bg-gray-950 py-3 px-3 text-base leading-8 text-white placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-white focus:bg-gray-900 focus:ring-2 focus:ring-white"
                    placeholder="Name"
                    aria-describedby="name-error"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-white transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-3 peer-placeholder-shown:bg-gray-950 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-white"
                  >
                    Name *
                  </label>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="peer w-full rounded border border-gray-600 bg-gray-950 py-3 px-3 text-base leading-8 text-white placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-white focus:bg-gray-900 focus:ring-2 focus:ring-white"
                    placeholder="Email"
                    aria-describedby="email-error"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-white transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-3 peer-placeholder-shown:bg-gray-950 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-white"
                  >
                    Email *
                  </label>
                </div>
              </div>
            </div>
            <div className="mt-8 w-full">
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  required
                  minLength={10}
                  rows={6}
                  className="peer h-32 w-full resize-none rounded border border-gray-600 bg-gray-950 py-3 px-3 text-base leading-6 text-white placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-white focus:bg-gray-900 focus:ring-2 focus:ring-white"
                  placeholder="Message"
                  aria-describedby="message-error"
                />
                <label
                  htmlFor="message"
                  className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-white transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-3 peer-placeholder-shown:bg-gray-950 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-white"
                >
                  Message *
                </label>
              </div>
            </div>

            {submitStatus === "success" && (
              <div
                className="mt-4 p-3 bg-green-800 text-green-100 rounded"
                role="alert"
              >
                Thank you! Your message has been sent successfully.
              </div>
            )}

            {submitStatus === "error" && (
              <div
                className="mt-4 p-3 bg-red-800 text-red-100 rounded"
                role="alert"
              >
                Sorry, there was an error sending your message. Please try
                again.
              </div>
            )}

            <div className="w-full mt-6 text-center md:text-left">
              <button
                type="submit"
                disabled={isSubmitting}
                className="self-center md:self-start border focus:outline-none focus:ring-4 font-medium text-sm px-6 py-3 bg-gray-950 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
                aria-label={
                  isSubmitting ? "Sending message..." : "Send message"
                }
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = "Contact";

export default Contact;
