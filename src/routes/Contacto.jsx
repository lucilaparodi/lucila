import React, { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { Banner } from "../sections/Banner";
import { Header } from "../sections/Header";
import { Button } from "../components/Button";
import Loader from "../components/Loader";
import ContactoBgTop from "../assets/contacto-bg-top.webp";
import ContactoBgBottom from "../assets/contacto-bg-bottom.webp";
import { Footer } from "../sections/Footer";
import { motion, useScroll, useTransform } from "framer-motion";

export const Contacto = () => {
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 1000], [0, 360]);
  const formRef = useRef();
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_5dchpkc",
        "template_a5c1x6a",
        formRef.current,
        "r7UAZefFkQfmccBum"
      )
      .then(
        (result) => {
          setLoading(false);
          setStatus("¡Mensaje enviado correctamente!");
          formRef.current.reset();
        },
        (error) => {
          setLoading(false);
          setStatus("Ocurrió un error. Intenta de nuevo.");
        }
      );
  };

  // Oculta el toast tras 3s
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(null), 10000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  // Mientras carga, muestra el Loader
  if (loading) return <Loader />;

  return (
    <div className="relative">
      <Header />

      <Banner
        bottomBg={ContactoBgBottom}
        topBg={ContactoBgTop}
        titleScript="Contacto"
        titleMain="LUCILA"
        showButton={false}
        buttonTitle="Conectar"
      />

      <section className="bg-[#FFAB95] py-16 max-w-[1600px] px-32 mx-auto shadow-lg overflow-hidden flex justify-between items-center">
        <div className="w-1/2 flex flex-col items-center justify-center">
          <motion.div style={{ rotate }}>
            <svg
              width="211"
              height="230"
              viewBox="0 0 176 192"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M97.2298 85.8166L98.3723 86.1818C101.571 82.6471 105.515 78.0917 110.205 72.5155C114.886 66.9666 120.087 61.7634 125.762 56.9517C131.436 52.14 137.259 48.2747 143.156 45.3929C149.054 42.511 154.836 41.9606 160.493 43.7688C168.409 46.2986 173.133 49.9968 174.701 54.845C176.27 59.6932 176.267 64.579 174.702 69.4751C173.016 74.7521 169.445 78.7971 163.989 81.6103C158.497 84.4419 152.212 86.6603 145.026 88.3209C137.84 89.9815 130.621 91.1819 123.324 91.9679C116.001 92.7452 109.631 93.917 104.15 95.4932L104.928 97.0007C120.378 101.939 132.748 106.102 142.037 109.49C151.327 112.879 158.511 116.104 163.533 119.149C168.575 122.229 171.56 125.551 172.472 129.17C173.384 132.789 172.954 137.419 171.146 143.076C169.094 149.496 165.258 153.336 159.649 154.661C154.039 155.986 148.582 155.801 143.332 154.123C138.817 152.68 134.441 150.143 130.206 146.511C125.97 142.879 122.073 138.845 118.523 134.383C114.972 129.92 111.53 125.402 108.23 120.81C104.931 116.219 101.938 112.264 99.2596 108.92L97.7521 109.697C98.5667 114.934 99.6196 120.457 100.856 126.248C102.121 132.049 103.241 137.923 104.263 143.825C105.275 149.755 105.847 155.754 105.976 161.821C106.106 167.888 105.284 173.741 103.476 179.399C101.911 184.295 98.5226 187.769 93.3014 189.848C88.0531 191.918 83.1892 192.222 78.6738 190.779C73.3969 189.092 69.5579 186.846 67.1472 183.977C64.7277 181.135 63.2524 177.966 62.7213 174.468C62.1902 170.971 62.351 167.185 63.2307 163.119C64.1104 159.053 65.2153 154.94 66.5454 150.778C68.9534 143.243 71.5987 135.904 74.5258 128.716C77.4442 121.554 80.4181 114.5 83.466 107.59L82.6887 106.082C78.6072 109.754 73.8057 114.365 68.3291 119.87C62.8252 125.366 56.9938 130.667 50.8077 135.765C44.5943 140.854 38.3404 144.852 32.0011 147.802C25.6619 150.753 19.2826 151.202 12.8904 149.159C7.61346 147.473 3.94389 144.321 1.90021 139.741C-0.17066 135.152 -0.358504 130.205 1.32799 124.928C3.01449 119.651 7.10895 115.564 13.6386 112.674C20.1682 109.784 27.4541 107.436 35.4877 105.657C43.5212 103.877 51.3601 102.425 58.9685 101.319C66.5769 100.213 72.4512 99.0927 76.5456 97.913L75.7683 96.4055C69.1055 95.1155 62.2587 93.5568 55.1823 91.685C48.0972 89.8403 40.9641 87.7705 33.8103 85.4841C30.4102 84.3975 26.7435 82.9258 22.7915 81.0332C18.8123 79.1319 15.1986 76.8377 11.923 74.142C8.6202 71.4376 6.21478 68.2705 4.67081 64.6592C3.12683 61.048 3.07639 56.9847 4.51947 52.4693C6.56239 46.0772 10.3161 41.4609 15.7807 38.6205C21.2366 35.8074 27.3647 35.4875 34.1377 37.6521C38.653 39.0952 43.0764 41.8579 47.3805 45.9317C51.6847 50.0054 55.7844 54.3435 59.7243 58.9004C63.6555 63.4845 67.5606 68.1501 71.4309 72.9246C75.3012 77.6991 78.8177 81.611 81.9988 84.6962L83.5063 83.9189C82.2136 80.1781 80.7061 75.1395 78.9925 68.7759C77.2789 62.4122 75.761 55.8114 74.4204 48.9374C73.0797 42.0634 72.1939 35.4547 71.7445 29.0754C71.295 22.6961 71.6565 17.6253 72.8562 13.8716C74.5427 8.59462 78.0182 4.84878 83.3003 2.57965C88.5736 0.337726 93.6627 -0.0144415 98.5861 1.55904C104.978 3.60196 109.254 6.82712 111.377 11.253C113.5 15.6789 114.436 20.535 114.177 25.8484C113.918 31.1618 112.911 36.6561 111.103 42.3139L97.2026 85.8079L97.2298 85.8166Z"
                fill="#F9643E"
              />
            </svg>
          </motion.div>
          <div class="flex flex-col items-center justify-center gap-8 mt-12 w-1/2">
            <h2 class="text-degular-bold text-5xl text-center text-[#500E14]">
              Contactate directamente
            </h2>
            <div class="flex flex-col items-center gap-4">
              <div class="flex items-center gap-4">
                <svg
                  width="31"
                  height="36"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 48L3.374 35.674C1.292 32.066 0.198 27.976 0.2 23.782C0.206 10.67 10.876 0 23.986 0C30.348 0.002 36.32 2.48 40.812 6.976C45.302 11.472 47.774 17.448 47.772 23.804C47.766 36.918 37.096 47.588 23.986 47.588C20.006 47.586 16.084 46.588 12.61 44.692L0 48ZM13.194 40.386C16.546 42.376 19.746 43.568 23.978 43.57C34.874 43.57 43.75 34.702 43.756 23.8C43.76 12.876 34.926 4.02 23.994 4.016C13.09 4.016 4.22 12.884 4.216 23.784C4.214 28.234 5.518 31.566 7.708 35.052L5.71 42.348L13.194 40.386ZM35.968 29.458C35.82 29.21 35.424 29.062 34.828 28.764C34.234 28.466 31.312 27.028 30.766 26.83C30.222 26.632 29.826 26.532 29.428 27.128C29.032 27.722 27.892 29.062 27.546 29.458C27.2 29.854 26.852 29.904 26.258 29.606C25.664 29.308 23.748 28.682 21.478 26.656C19.712 25.08 18.518 23.134 18.172 22.538C17.826 21.944 18.136 21.622 18.432 21.326C18.7 21.06 19.026 20.632 19.324 20.284C19.626 19.94 19.724 19.692 19.924 19.294C20.122 18.898 20.024 18.55 19.874 18.252C19.724 17.956 18.536 15.03 18.042 13.84C17.558 12.682 17.068 12.838 16.704 12.82L15.564 12.8C15.168 12.8 14.524 12.948 13.98 13.544C13.436 14.14 11.9 15.576 11.9 18.502C11.9 21.428 14.03 24.254 14.326 24.65C14.624 25.046 18.516 31.05 24.478 33.624C25.896 34.236 27.004 34.602 27.866 34.876C29.29 35.328 30.586 35.264 31.61 35.112C32.752 34.942 35.126 33.674 35.622 32.286C36.118 30.896 36.118 29.706 35.968 29.458Z"
                    fill="#F9643E"
                  ></path>
                </svg>
                <span class="text-degular-medium text-[#500E14] text-xl">
                  +598 94 912 776
                </span>
              </div>
              <div class="flex items-center gap-4">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.19234 9.71184C3.46154 10.4717 21.092 21.3845 21.7496 21.7775C22.4073 22.1706 23.0765 22.354 24.115 22.354C25.1534 22.354 25.8226 22.1706 26.4803 21.7775C27.138 21.3845 44.7684 10.4717 46.0376 9.71184C46.5107 9.43672 47.3068 8.9389 47.4799 8.37557C47.7799 7.37992 47.4568 7 46.1761 7H24.115H2.05388C0.773137 7 0.450066 7.39302 0.75006 8.37557C0.923134 8.952 1.71927 9.43672 2.19234 9.71184Z"
                    fill="#F9643E"
                  ></path>
                  <path
                    d="M47.0413 10.3014C46.0952 10.8517 37.6031 17.7164 31.984 21.8431L41.4684 33.9612C41.6991 34.2232 41.803 34.5377 41.6761 34.6949C41.5376 34.839 41.2376 34.7604 40.9953 34.5115L29.6186 23.6117C27.8994 24.8694 26.6879 25.734 26.4802 25.865C25.5918 26.3759 24.9687 26.4414 24.1149 26.4414C23.2611 26.4414 22.638 26.3759 21.7496 25.865C21.5303 25.734 20.3304 24.8694 18.6112 23.6117L7.23447 34.5115C7.0037 34.7735 6.69217 34.8521 6.55371 34.6949C6.41525 34.5508 6.5191 34.2232 6.74986 33.9612L16.2227 21.8431C10.6036 17.7164 2.01919 10.8517 1.07305 10.3014C0.057691 9.71191 0 10.4062 0 10.9434C0 11.4805 0 37.7997 0 37.7997C0 39.0181 1.58074 40.5378 2.71148 40.5378H24.1149H45.5183C46.649 40.5378 47.999 39.005 47.999 37.7997C47.999 37.7997 47.999 11.4674 47.999 10.9434C47.999 10.3931 48.0683 9.71191 47.0413 10.3014Z"
                    fill="#F9643E"
                  ></path>
                </svg>
                <span class="text-degular-medium text-[#500E14] text-xl">
                  lucila.parodi.c@gmail.com
                </span>
              </div>
            </div>
            <div class="mt-4"></div>
          </div>
        </div>

        <div className="bg-[#FFC7B8] bgopacity-50 p-12 rounded-2xl">
          <h2 className="font-bold text-degular-bold text-7xl text-[#F9643E] mb-8 text-center">
            Mandame un mensaje
          </h2>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block text-degular-medium text-xl text-[#500E14] mb-2">
                Nombre
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="Tu nombre"
                className="text-degular-medium text-xl w-full px-0 py-2 bg-transparent border-0 border-b-2 border-[#500E14]/30 placeholder-[#500E14]/50 focus:outline-none focus:border-[#500E14] transition autofill:shadow-[inset_0_0_0px_1000px_rgba(255,255,255,0)] autofill:text-[#500E14] autofill:!bg-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-[#500E14] text-degular-medium text-xl mb-2">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="tu@ejemplo.com"
                className="text-degular-medium text-xl w-full px-0 py-2 bg-transparent border-0 border-b-2 border-[#500E14]/30 placeholder-[#500E14]/50 focus:outline-none focus:border-[#500E14] transition autofill:shadow-[inset_0_0_0px_1000px_rgba(255,255,255,0)] autofill:text-[#500E14] autofill:!bg-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-[#500E14] text-degular-medium text-xl mb-2">
                Mensaje
              </label>
              <textarea
                name="message"
                rows="3"
                placeholder="Escribe tu mensaje..."
                className="text-degular-medium text-xl w-full px-0 py-2 bg-transparent border-0 border-b-2 border-[#500E14]/30 placeholder-[#500E14]/50 focus:outline-none focus:border-[#500E14] transition resize-none autofill:shadow-[inset_0_0_0px_1000px_rgba(255,255,255,0)] autofill:text-[#500E14] autofill:!bg-transparent"
                required
              />
            </div>

            <Button type="submit" title="Enviar" />
          </form>
        </div>
      </section>

      <Footer />

      {/* Toast */}
      {status && (
        <div className="fixed bottom-4 text-degular-medium right-4 bg-white opacity-50 text-[#500E14] border border-[#500E14] px-4 py-2 rounded shadow-lg z-50">
          {status}
        </div>
      )}
    </div>
  );
};
