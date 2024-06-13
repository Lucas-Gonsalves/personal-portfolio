import { 
  
  FormContainer, 
  WorkFormContainer,
  TitleContent,
  Form,
  InputSet,
  ContactInformation,
  
} from "./styles";

import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { IoIosPin } from "react-icons/io";


import { Input } from "@/components/Input";
import { Textarea } from "@/components/Textarea";
import { TopicIcon } from "@/components/TopicIcon";
import { ButtonSend } from "@/components/ButtonSend";
import { Select } from "@/components/Select";



export function WorkForm() {

  


  return(
    <WorkFormContainer>

      <FormContainer>

        <TitleContent>
          <h2>Vamos Trabalhar?</h2>

          <p>
            Eu desenho e codifico coisas lindamente simples e 
            amo o que faço. Simples assim!
          </p>
        </TitleContent>

        <Form>

          <InputSet>
            <div>
              <Input
                placeholder="Primeiro nome"
              />

              <Input
                placeholder="Ultimo nome"
              />
            </div>

            <div>
              <Input
                placeholder="Endereço de e-mail"
              />

              <Input
                placeholder="Número de telefone"
              />
            </div>
          </InputSet>


          <Select
            optionsGroup="Services"
            categoryName="Serviços"
            options={[ "Branding Design", "Web Design", "UI/UX Design" ,"App Design" ]}
          />


          <Textarea
            placeholder="Mensagem"
          />

          <ButtonSend
            type="reset"
            title="Enviar Mensagem"
          />
        </Form>
      </FormContainer>

        <ContactInformation>
          <TopicIcon
            targetBlank
            tabIndexHidden
            icon={MdOutlinePhoneInTalk}
            title="Telefone"
            description="+55 (47) 99630-6744"
            href="https://wa.me/5547996306744/?text=Tudo%20bem,%20Lucas?%0A%0AAnalisei%20seu%20portf%C3%B3lio%20e%20fiquei%20bastante%20impressionado%20com%20a%20qualidade%20do%20seu%20trabalho.%20Gostaria%20de%20discutir%20a%20possibilidade%20de%20colaborarmos%20em%20um%20projeto.%20%0A%0AAguardo%20seu%20retorno.%0A%0AAtenciosamente,%0A[Seu%20Nome]"/>

          <TopicIcon
            tabIndexHidden
            icon={IoIosMail}
            title="E-mail"
            description="lucasluz1710@gmail.com"
            href="
              mailto:lucasluz1710@gmail.com?subject=Interesse%20em%20Projeto&body=Tudo%20bem,%20Lucas?%0A%0A
              Analisei%20seu%20portf%C3%B3lio%20e%20fiquei%20bastante%20impressionado%20com%20a%20qualidade
              %20do%20seu%20trabalho.%20Gostaria%20de%20discutir%20a%20possibilidade%20de%20colaborarmos%20
              em%20um%20projeto.%20%0A%0AAguardo%20seu%20retorno.%0A%0AAtenciosamente,%0A[Seu%20Nome]
            "
          />

          <TopicIcon
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