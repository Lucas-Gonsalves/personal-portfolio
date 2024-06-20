import { 
  
  FormContainer, 
  WorkFormContainer,
  TitleContent,
  Form,
  InputSet,
  ContactInformation,
  
} from "./styles";

import { IoIosPin } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { MdOutlinePhoneInTalk } from "react-icons/md";


import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
import { Textarea } from "@/components/Textarea";
import { AnchorTopic } from "@/components/AnchorTopic";
import { ButtonSend } from "@/components/ButtonSend";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod"


const workFormSchema = z.object({

  name: z.string().min(1, "Por favor, forneça seu nome.").regex(/^[a-zA-ZÀ-ÿ\s]+$/, "Por favor, forneça uma nome válido."),
  lastName: z.string().min(1, "Por favor, forneça seu ultimo nome."),
  email: z.string().email("Por favor forneça um e-mail válido."),

  tell: z.string()
    .min(15, "Por favor, forneça seu número de telefone.")
    .regex(/^\(\d{2}\) \d{5}-\d{4}$/, "Por favor, forneça um número de telefone no formato (99) 99999-9999."),

  service: z.enum(["Criação de Site", "Manutenção", "Integração de API", "Design Responsivo", "Outros"], {
    errorMap: () => ({message: "Por favor selecione um serviço."})
  }),

  message: z.string().min(1, "Por favor, forneça uma mensagem para o corpo do e-mail.")
})

type WorkFormSchemaProps = z.infer<typeof workFormSchema>

interface WorkFormProps {
  id?: string;
}

export function WorkForm({
  id = "",
}: WorkFormProps) {

  const {

    register,
    handleSubmit,

    formState: {
      errors
    }

  } = useForm<WorkFormSchemaProps>({
    mode: "all",
    shouldFocusError: false,
    reValidateMode: "onChange",
    resolver: zodResolver(workFormSchema),

    defaultValues: {
      service: "Outros",
    }
  });


  function onSubmitForm(data: WorkFormSchemaProps) {

    console.log(data);
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


          <Select
            optionsGroup="Services"
            categoryName="Serviços"
            options={[ "Criação de Site", "Manutenção", "Integração de API", "Design Responsivo" ]}
            ariaInvalid={!!errors.service?.message}

            {...register("service")}
          />


          <Textarea
            placeholder="Mensagem"
            aria-invalid={!!errors.message?.message}

            {...register("message")}
          />

          <span>{errorsMessage}</span>

          <ButtonSend
            type="submit"
            title="Enviar Mensagem"
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
            description="lucasluz1710@gmail.com"
            href="mailto:lucasluz1710@gmail.com?subject=Interesse%20em%20Projeto"
          />

          <AnchorTopic
            targetBlank
            tabIndexHidden
            icon={IoIosPin}
            title="Endereço"
            description="Rolf passold, Corticeira, Guaramirim, SC"
            href="https://maps.app.goo.gl/ex4QYTjVo3m4YiKUA"
          />
        </ContactInformation>

    </WorkFormContainer>
  );
};