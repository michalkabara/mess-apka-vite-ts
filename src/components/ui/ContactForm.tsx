import { FormEvent, useCallback, useEffect, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { HiMail } from "react-icons/hi";
import { useSendContactForm } from "../../customHooks/useSendContactForm";

export const ContactForm = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [captcha, setCaptcha] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { mutate, isError, isSuccess, isPending } = useSendContactForm();

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      return;
    }

    const token = await executeRecaptcha("yourAction");
    setCaptcha(token);
  }, [executeRecaptcha]);

  useEffect(() => {
    handleReCaptchaVerify();
  }, [handleReCaptchaVerify]);

  const onSubmit = async (event: FormEvent<EventTarget>) => {
    event.preventDefault();
    const object = { name: name, email: email, message: message, "recaptcha-token": captcha };
    mutate(object);

    if (isSuccess) {
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="sm:w-1/2 w-full">
      <p className="mb-4 text-lg font-medium flex flex-row gap-3 items-center">
        <HiMail className="text-[#ed4535]" />
        Napisz do nas
      </p>

      <form onSubmit={onSubmit}>
        <div className="flex flex-row gap-2 mb-2 flex-wrap sm:flex-nowrap w-full">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="name">Imię</label>
            <input
              value={name}
              disabled={isPending}
              onChange={(e) => setName(e.target.value)}
              name="name"
              type="text"
              className="dark:bg-zinc-700 rounded-lg border dark:border-zinc-600 border-zinc-300 text-xs p-3 disabled:opacity-50 w-full"
              required
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="name">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isPending}
              name="email"
              type="email"
              className="dark:bg-zinc-700 rounded-lg border dark:border-zinc-600 border-zinc-300 text-xs p-3 disabled:opacity-50 w-full"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message">Wiadomość</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={isPending}
            name="message"
            id=""
            className="dark:bg-zinc-700 rounded-lg border dark:border-zinc-600 border-zinc-300 text-xs p-3 min-h-24 max-h-36 disabled:opacity-50"
            required
          ></textarea>
          <p className="text-xs">
            Strona chroniona przez reCAPTCHA, obowiązuje
            <a href="https://policies.google.com/privacy" target="_blank" className="text-[#ed4535]">
              {" "}
              Polityka prywatności{" "}
            </a>
            oraz
            <a href="https://policies.google.com/terms" target="_blank" className="text-[#ed4535]">
              {" "}
              Regulamin{" "}
            </a>
            Google
          </p>
        </div>
        <div className="flex flex-row items-center gap-3 mt-4 justify-between">
          <button className="bg-[#ed4535] py-3 px-4 text-sm rounded-md text-white">Wyślij</button>
          {isError && (
            <div className="bg-red-900 py-2 px-3 rounded-md border border-red-500">Wystąpił błąd, spróbuj ponownie</div>
          )}
          {isSuccess && (
            <div className="bg-green-900 py-2 px-3 rounded-md border border-green-500">
              Wiadomość została wysłana, dziękujemy
            </div>
          )}
        </div>
      </form>
    </div>
  );
};
