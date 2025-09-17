import { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { createGlobalStyle } from "styled-components";
import { ko } from "date-fns/locale";

const Section = styled.section`
  width: 100%;
  height: 1300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.herobg};
  transition: background-color 0.3s ease-in-out;
  @media (max-width: 768px) {
    height: 1300px;
  }
`;

const TitleWrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  transition: color 0.3s ease-in-out;
`;

const GrayText = styled.span`
  color: ${({ theme }) => theme.textGray};
  transition: color 0.3s ease-in-out;
  z-index: 1;
`;

const SubTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.textGray};
  transition: color 0.3s ease-in-out;
`;

const Form = styled.form`
  width: 35%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${({ theme }) => theme.herobg};
  transition: background-color 0.3s ease-in-out;
  @media (max-width: 1200px) {
    width: 50%;
    aspect-ratio: 1200 / 400;
    justify-content: center;
  }
  @media (max-width: 768px) {
    width: 80%;
    aspect-ratio: 400 / 300;
  }
`;

const FieldWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 18px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
  transition: color 0.3s ease-in-out;
`;

const Input = styled(({ isError, ...rest }) => <input {...rest} />)`
  padding: 10px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid
    ${({ isError, theme }) => (isError ? "#ff8282" : theme.text)};
  background-color: ${({ theme }) => theme.herobg};
  color: ${({ theme }) => theme.text};
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out,
    border-bottom 0.3s ease-in-out;

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.text};
    transition: border 0.3s ease-in-out;
  }
`;

const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid
    ${({ isError, theme }) => (isError ? "#ff8282" : theme.text)};
  border-radius: 8px;
  resize: vertical;
  background-color: ${({ theme }) => theme.herobg};
  color: ${({ theme }) => theme.text};
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out,
    border 0.3s ease-in-out;

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.text};
    transition: border 0.3s ease-in-out;
  }
`;

const ErrorMsg = styled.div`
  color: #ff8282;
  font-size: 14px;
  margin-top: 4px;
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CheckboxLabel = styled.label`
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.text};
  transition: color 0.3s ease-in-out;
`;

const StyledCheckboxInput = styled.input.attrs({ type: "checkbox" })`
  width: 18px;
  height: 18px;
  appearance: none;
  -webkit-appearance: none;
  background-color: contain;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s, border 0.3s ease-in-out;

  &:checked {
    background-color: ${({ theme }) => theme.text};
    transition: background-color 0.3s ease-in-out;
  }

  &:focus {
    outline: none;
  }
`;

const ConsentLabel = styled.label`
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.text};
  transition: color 0.3s ease-in-out;
`;

const SubmitBtn = styled.button`
  padding: 12px;
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.textWhite};
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.text};
    transition: background-color 0.3s ease-in-out;
  }
`;

const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 8px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.herobg};
  transition: border 0.3s ease-in-out, color 0.3s ease-in-out,
    background-color 0.3s ease-in-out;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.text};
    transition: border 0.3s ease-in-out;
  }
`;

const DatepickerStyleOverride = createGlobalStyle`
  .custom-sunday {
    color: #cc3333;
  }

  .custom-saturday {
    color: #0077cc;
  }

  /* 선택 불가능한 날짜(예: 오늘 이전)는 회색으로 강제 */
  .react-datepicker__day[aria-disabled="true"] .custom-sunday,
  .react-datepicker__day[aria-disabled="true"] .custom-saturday {
    color: #ccc !important;
  }

  .react-datepicker__day[aria-disabled="true"] {
    color: #ccc;
  }

  /* 다른 월의 날짜도 무조건 회색 */
  .react-datepicker__day--outside-month .custom-sunday,
  .react-datepicker__day--outside-month .custom-saturday {
    color: #7e7e7e !important;
  }

  .react-datepicker__day--outside-month {
    color: #7e7e7e;
  }

  .react-datepicker__day--selected {
    background-color: black;
    color: white;
  }

  .react-datepicker__day--keyboard-selected {
    background-color: transparent;
    color: inherit;
  }

  .react-datepicker__day:hover {
    background-color: #eee;
  }
`;

const ContactPage = () => {
  const form = useRef();
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({});
  const fieldRefs = {
    company: useRef(),
    name: useRef(),
    phone: useRef(),
    area: useRef(),
    topic: useRef(),
  };
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    phone: "",
    area: "",
    preferredDate: "",
    message: "",
    topic: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "phone") {
      let digits = value.replace(/\D/g, "");

      if (digits.length <= 3) {
      } else if (digits.length <= 6) {
        digits = digits.replace(/(\d{3})(\d+)/, "$1-$2");
      } else if (digits.length === 9) {
        digits = digits.replace(/(\d{2})(\d{3})(\d{4})/, "$1-$2-$3");
      } else if (digits.length === 10 && digits.startsWith("02")) {
        digits = digits.replace(/(\d{2})(\d{4})(\d{4})/, "$1-$2-$3");
      } else if (digits.length <= 10) {
        digits = digits.replace(/(\d{3})(\d{3})(\d+)/, "$1-$2-$3");
      } else {
        digits = digits.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
      }

      setFormData((prev) => ({ ...prev, phone: digits }));

      if (errors.phone && digits.trim() !== "") {
        setErrors((prev) => {
          const updated = { ...prev };
          delete updated.phone;
          return updated;
        });
      }

      return;
    }
    if (type === "checkbox" && name === "topic") {
      setFormData((prev) => {
        const updatedTopics = checked
          ? [...prev.topic, value]
          : prev.topic.filter((item) => item !== value);
        return { ...prev, topic: updatedTopics };
      });

      if (errors.topic && checked) {
        setErrors((prev) => {
          const updated = { ...prev };
          delete updated.topic;
          return updated;
        });
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));

      if (errors[name] && value.trim() !== "") {
        setErrors((prev) => {
          const updated = { ...prev };
          delete updated[name];
          return updated;
        });
      }
    }
  };

  const validate = (data) => {
    const newErrors = {};
    if (!data.company.trim()) newErrors.company = true;
    if (!data.name.trim()) newErrors.name = true;
    if (!data.phone.trim()) newErrors.phone = true;
    if (!data.area.trim()) newErrors.area = true;
    if (data.topic.length === 0) newErrors.topic = true;

    return newErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const newErrors = validate(formData);
    setErrors(newErrors);

    if (!agree) {
      alert("개인정보 수집 및 이용에 동의해주세요.");
      return;
    }

    if (Object.keys(newErrors).length > 0) {
      alert("필수 입력사항을 작성해주세요.");
      const firstErrorKey = Object.keys(newErrors)[0];
      if (firstErrorKey && fieldRefs[firstErrorKey]) {
        fieldRefs[firstErrorKey].current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        fieldRefs[firstErrorKey].current?.focus();
      }
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("신청이 완료되었습니다!");
        form.current.reset();
        setFormData({
          company: "",
          name: "",
          phone: "",
          area: "",
          preferredDate: "",
          message: "",
          topic: [],
        });
        setErrors({});
        setAgree(false);
      })
      .catch((error) => {
        console.error("이메일 전송 오류:", error);
        const errorMsg =
          error?.text || error?.message || "알 수 없는 오류입니다.";
        alert("전송 중 오류가 발생했습니다: " + errorMsg);
      });
  };

  return (
    <Section>
      <TitleWrapper>
        <Title>
          간편 상담 <GrayText>문의</GrayText>
        </Title>
        <SubTitle>Quick and Easy Consultation</SubTitle>
      </TitleWrapper>
      <Form ref={form} onSubmit={sendEmail}>
        <FieldWrap>
          <Label>
            {!formData.company.trim() ? "업체명 / 상호명 *" : "업체명 / 상호명"}
          </Label>
          <Input
            type="text"
            name="company"
            maxLength={50}
            value={formData.company}
            onChange={handleChange}
            ref={fieldRefs.company}
            isError={errors.company}
            placeholder="ex) 백색클린"
          />
          {errors.company && <ErrorMsg>필수 입력 사항입니다</ErrorMsg>}
        </FieldWrap>

        <FieldWrap>
          <Label>{!formData.name.trim() ? "성함 *" : "성함"}</Label>
          <Input
            type="text"
            name="name"
            maxLength={50}
            value={formData.name}
            onChange={handleChange}
            ref={fieldRefs.name}
            isError={errors.name}
            placeholder="ex) 백색이"
          />
          {errors.name && <ErrorMsg>필수 입력 사항입니다</ErrorMsg>}
        </FieldWrap>

        <FieldWrap>
          <Label>{!formData.phone.trim() ? "연락처 *" : "연락처"}</Label>
          <Input
            type="text"
            name="phone"
            maxLength={20}
            value={formData.phone}
            onChange={handleChange}
            ref={fieldRefs.phone}
            isError={errors.phone}
            placeholder="숫자만 입력해주세요"
          />
          {errors.phone && <ErrorMsg>필수 입력 사항입니다</ErrorMsg>}
        </FieldWrap>

        <FieldWrap>
          <Label>{!formData.area.trim() ? "청소 지역 *" : "청소 지역"}</Label>
          <Input
            type="text"
            name="area"
            maxLength={100}
            value={formData.area}
            onChange={handleChange}
            isError={errors.area}
            ref={fieldRefs.area}
            placeholder="ex) 시/도, 구/군, 동"
          />
          {errors.area && <ErrorMsg>필수 입력 사항입니다</ErrorMsg>}
        </FieldWrap>

        <FieldWrap>
          <Label>
            {formData.topic.length === 0 ? "서비스 선택 *" : "서비스 선택"}
          </Label>
          <CheckboxGroup>
            {[
              "입주 · 거주 청소",
              "이사 청소",
              "상가 청소",
              "준공 청소",
              "특수 청소",
              "정기 청소",
              "기타",
            ].map((topic) => (
              <CheckboxLabel key={topic}>
                <StyledCheckboxInput
                  name="topic"
                  value={topic}
                  ref={fieldRefs.topic}
                  checked={formData.topic.includes(topic)}
                  onChange={handleChange}
                />
                {topic}
              </CheckboxLabel>
            ))}
          </CheckboxGroup>
          {errors.topic && <ErrorMsg>하나 이상 선택해주세요</ErrorMsg>}
        </FieldWrap>

        <DatepickerStyleOverride />
        <FieldWrap>
          <Label>희망 날짜</Label>
          <StyledDatePicker
            selected={
              formData.preferredDate ? new Date(formData.preferredDate) : null
            }
            onChange={(date) =>
              setFormData((prev) => ({
                ...prev,
                preferredDate: date
                  ? date.toLocaleDateString("sv-SE") // yyyy-mm-dd 형식
                  : "",
              }))
            }
            dateFormat="yyyy-MM-dd"
            minDate={new Date()}
            locale={ko}
            placeholderText="날짜를 선택해주세요"
            renderDayContents={(day, date) => {
              const weekday = date.getDay(); // 0 = Sun, 6 = Sat
              const className =
                weekday === 0
                  ? "custom-sunday"
                  : weekday === 6
                  ? "custom-saturday"
                  : "";

              return <span className={className}>{day}</span>;
            }}
          />
          <input
            type="hidden"
            name="preferredDate"
            value={formData.preferredDate}
          />
        </FieldWrap>

        <FieldWrap>
          <Label>문의사항</Label>
          <Textarea
            name="message"
            rows="6"
            maxLength={2000}
            value={formData.message}
            onChange={handleChange}
            placeholder="최대 2000자까지 입력 가능"
          />
        </FieldWrap>

        <ConsentLabel>
          <StyledCheckboxInput
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          {agree
            ? "개인정보 수집 및 이용에 동의합니다."
            : "개인정보 수집 및 이용에 동의합니다. *"}
        </ConsentLabel>
        <input type="hidden" name="time" value={new Date().toLocaleString()} />

        <SubmitBtn type="submit">문의하기</SubmitBtn>
      </Form>
    </Section>
  );
};

export default ContactPage;
