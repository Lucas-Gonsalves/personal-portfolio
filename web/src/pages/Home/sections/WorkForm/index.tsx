import { 
  
  FormContainer, 
  WorkFormContainer,
  TitleContent,
  Form,
  InputSet,
  ContactInformation,
  RecaptchaContainer,
  
} from "./styles";

import { IoIosPin } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { MdOutlinePhoneInTalk } from "react-icons/md";

import emailjs from '@emailjs/browser';

import { Input } from "@/components/Input";
import { Textarea } from "@/components/Textarea";
import { AnchorTopic } from "@/components/AnchorTopic";
import { ButtonSend } from "@/components/ButtonSend";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod"

import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";

const workFormSchema = z.object({

  name: z.string().min(1, "Por favor, forneça seu nome.").regex(/^[a-zA-ZÀ-ÿ\s]+$/, "Por favor, forneça uma nome válido."),
  lastName: z.string().min(1, "Por favor, forneça seu ultimo nome."),
  email: z.string().email("Por favor forneça um e-mail válido."),
  service: z.string().min(1, "Por favor, forneça o serviço desejado."),
  tell: z.string().min(10, "Por favor, forneça seu número de telefone."),
  message: z.string().min(1, "Por favor, forneça uma mensagem para o corpo do e-mail."),
  recaptcha: z.string().min(1, "Por favor, confirme que você não é um robô.")
})

type WorkFormSchemaProps = z.infer<typeof workFormSchema>

interface WorkFormProps {
  id?: string;
}

export function WorkForm({
  id = "",
}: WorkFormProps) {
  const [ isFormSubmiting, setIsFormSubmitting ] = useState(false);

  const {

    register,
    handleSubmit,
    setValue,
    trigger,
    reset,
    formState: {
      errors,
    }

  } = useForm<WorkFormSchemaProps>({
    mode: "all",
    shouldFocusError: false,
    reValidateMode: "onChange",
    resolver: zodResolver(workFormSchema),
    defaultValues: {
      recaptcha: "",
    }
  });

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  function handleRecaptchaChange(value: string | null) {
    setValue("recaptcha", value || "", { shouldValidate: true });
    trigger("recaptcha"); 
  };

  async function onSubmitForm(data: WorkFormSchemaProps) {
    const token = recaptchaRef.current?.getValue();

    if (!token) {
      setValue("recaptcha", "", { shouldValidate: true });
      return;
    };

    setIsFormSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          lastName: data.lastName,
          email: data.email,
          tell: data.tell,
          service: data.service,
          message: data.message,
          time: new Date().toLocaleString(),
          "g-recaptcha-response": token,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      alert("Mensagem enviada com sucesso!");
      setValue("recaptcha", "");
      recaptchaRef.current?.reset();

    } catch (error) {
      console.error("Erro ao enviar:", error);
      alert("Ocorreu um erro ao enviar sua mensagem.");
    
    } finally {
      setIsFormSubmitting(false);
      reset();
    };

    return;
  };

  const errorsMessage = Object.values(errors)[0]?.message;

  return(
    <WorkFormContainer
      id={id}
    >

      <FormContainer>

        <TitleContent>
          <h2>Vamos Trabalhar?</h2>

          <p>
            Codifico soluções elegantes e funcionais, 
            com paixão pelo que faço. Vamos criar algo extraordinário!
          </p>
        </TitleContent>

        <Form
          onSubmit={handleSubmit(onSubmitForm)}
        >

          <InputSet>
            <div>
              <Input
                placeholder="Primeiro nome"
                autoComplete="username"
                aria-invalid={!!errors.name?.message}

                {...register("name")}
              />

              <Input
                placeholder="Ultimo nome"
                autoComplete="additional-name"
                aria-invalid={!!errors.lastName?.message}

                {...register("lastName")}
              />
            </div>

            <div>
              <Input
                placeholder="Endereço de e-mail"
                autoComplete="email"
                aria-invalid={!!errors.email?.message}

                {...register("email")}
              />

              <Input
                placeholder="Número de telefone"
                autoComplete="tel-local"
                aria-invalid={!!errors.tell?.message}

                {...register("tell")}
              />
            </div>
          </InputSet>


          <Input
            placeholder="Serviço"
            autoComplete="organization-title"
            aria-invalid={!!errors.service?.message}

            {...register("service")}
          />

          <Textarea
            placeholder="Mensagem"
            aria-invalid={!!errors.message?.message}

            {...register("message")}
          />

          <RecaptchaContainer>
            <ReCAPTCHA
              sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
              onChange={handleRecaptchaChange}
              theme="dark"
              ref={recaptchaRef}
            />
          </RecaptchaContainer>


          <span>{errorsMessage}</span>

          <ButtonSend
            type="submit"
            title={isFormSubmiting ? "Enviando..." : "Enviar Mensagem"}
            disabled={isFormSubmiting}
          />
        </Form>
      </FormContainer>

        <ContactInformation>
          <AnchorTopic
            targetBlank
            tabIndexHidden
            icon={MdOutlinePhoneInTalk}
            title="Telefone"
            description="+55 (47) 99630-6744"
            href="https://wa.me/5547996306744/"/>

          <AnchorTopic
            tabIndexHidden
            icon={IoIosMail}
            title="E-mail"
            description="lucasluzdevcode@gmail.com"
            href="mailto:lucasluzdevcode@gmail.com?subject=Interesse%20em%20Projeto"
          />

          <AnchorTopic
            targetBlank
            tabIndexHidden
            icon={IoIosPin}
            title="Endereço"
            description="Guaramirim, SC."
            href="https://maps.app.goo.gl/54UWPwNqm2A3QYa38"
          />
        </ContactInformation>

    </WorkFormContainer>
  );
};