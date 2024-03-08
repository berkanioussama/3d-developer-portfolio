import { useRef } from "react";
import { useState } from "react";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    // preventDefault to not reload the page after submit it
    e.preventDefault();
    setIsLoading(true);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = () => {};

  const handleBlur = () => {};

  return (
    <section className="max-container relative flex flex-col lg:flex-row">
      <div className="flex min-w-[50%] flex-1 flex-col">
        <h1 className="head-text">Get in touch</h1>

        <form
          className="mt-14 flex w-full flex-col gap-7"
          onSubmit={handleSubmit}
        >
          <label className="font-semibold text-black-500">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Oussama"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className="font-semibold text-black-500">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="mailexample@mail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className="font-semibold text-black-500">
            Message
            <textarea
              type="text"
              name="message"
              rows={4}
              className="textarea"
              placeholder="Let me know how i can help you!"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type="submit"
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="btn"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
