import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    0deg,
    rgba(208, 236, 205, 1) 0%,
    rgba(201, 217, 189, 1) 30%,
    rgba(223, 223, 190, 1) 69%,
    rgba(247, 235, 214, 1) 100%
  );
`;

const LoginWrap = styled.div`
  max-width: 440px;
  width: 100%;
  min-height: 338px;
  padding: 44px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  box-shadow: 0 2px 6px rgb(0 0 0 / 20%);
  form {
    margin: 10px 0;
  }
  input {
    all: unset;
    width: 100%;
    padding: 5px;
    border-bottom: 1px solid #666;
  }
`;

const Logo = styled.h3`
  font-size: 28px;
  font-weight: 900;
  margin-bottom: 20px;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 700;
`;

const BtnWrap = styled.div`
  position: relative;
  margin-top: 20px;
`;

const SignupWrap = styled.h3``;

const Button = styled.button`
  width: 50px;
  position: absolute;
  top: 0;
  right: 0;
`;

const ErrorMessage = styled.span`
  font-weight: 900;
  color: crimson;
  margin-top: 10px;
`;

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const onSubmit = () => {};
  return (
    <Wrap>
      <LoginWrap>
        <Logo>LOGO</Logo>
        <Title>로그인</Title>
        {errors?.username?.message && (
          <ErrorMessage>{errors?.username?.message}</ErrorMessage>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("username", {
              required: "아이디를 입력하세요",
              minLength: {
                value: 3,
                message: "올바른 전자 메일 주소 또는 전화 번호를 입력하세요.",
              },
            })}
            type="text"
            placeholder="전자 메일 또는 휴대폰"
          />
        </form>
        <SignupWrap>
          계정이 없으신가요?
          <Link to={"/Signup"}>
            <span>계정을 만드세요!</span>
          </Link>
        </SignupWrap>
        <BtnWrap>
          <Button>다음</Button>
        </BtnWrap>
      </LoginWrap>
    </Wrap>
  );
};
